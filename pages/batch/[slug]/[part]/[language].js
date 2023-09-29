import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import JamComponent from '@/components/JamComponent'

function getLanguagesForPart(directory) {
    const files = fs.readdirSync(directory);
    // Assuming your languages follow the format 'xx-XX.md'
    return files.filter(file => /^[a-z]{2}-[A-Z]{2}\.md$/.test(file)).map(file => file.replace('.md', ''));
  }
  

function getJams(fs, directory) {
  const filenames = fs.readdirSync(directory)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(directory, filename, 'en-US.md'),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      content
    }
  })
}

function getBatches(fs, directory) {
  const batchNames = fs.readdirSync(directory)

  return batchNames.map(batchName => {
    const batchDirectory = path.join(directory, batchName)
    const readMeFileContent = fs.readFileSync(
      path.join(batchDirectory, 'readMe', 'en-US.md'),
      'utf8'
    )
    const { data: readMeData, content: readMeContent } =
      matter(readMeFileContent)

    const partsDirectory = path.join(batchDirectory)
    const partsNames = fs
      .readdirSync(partsDirectory)
      .filter(part => part.startsWith('part'))
    partsNames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    const parts = partsNames.map(partName => {
      const partContent = fs.readFileSync(
        path.join(partsDirectory, partName, 'en-US.md'),
        'utf8'
      )
      const { data, content } = matter(partContent)

      return {
        ...data, // Spread the properties from the data object
        content
      }
    })

    return {
      ...readMeData, // Spread the properties from the readMeData object
      content: readMeContent,
      parts
    }
  })
}

export async function getStaticPaths() {
    const batchesDir = path.join(process.cwd(), 'jams', 'batches');
    const batchNames = fs.readdirSync(batchesDir);
  
    const paths = [];
    batchNames.forEach(batchName => {
      const batchDirectory = path.join(batchesDir, batchName);
      const partsDirectory = path.join(batchDirectory);
      const partsNames = fs
        .readdirSync(partsDirectory)
        .filter(part => part.startsWith('part'));
  
      partsNames.forEach(partName => {
        const languages = getLanguagesForPart(path.join(partsDirectory, partName));
        languages.forEach(language => {
          paths.push({
            params: {
              slug: batchName,
              part: partName,
              language: language
            }
          });
        });
      });
    });
  
    return { paths, fallback: false };
  }
  

export async function getStaticProps({ params }) {
  const partDirectory = path.join(
    process.cwd(),
    'jams',
    'batches',
    params.slug,
    params.part
  )

  const partContent = fs.readFileSync(
    path.join(partDirectory, params.language + '.md'),
    'utf8'
  )
  const { data, content } = matter(partContent)

  // Correctly format the Markdown content
  const formattedContent = content.replace(/\\n/g, '\n')

  // Serialize the MDX content
  const mdxSource = await serialize(formattedContent)
  const headers = []

  const regex = /^#{2}\s(.+)$/gm // Regular expression to match ## headers

  const jamsDir = path.join(process.cwd(), 'jams')

  const singlesDir = path.join(jamsDir, 'singles')

  const singles = getJams(fs, singlesDir)
  const batches = getBatches(fs, path.join(jamsDir, 'batches'))

  let match
  while ((match = regex.exec(content))) {
    headers.push(match[1])
  }

  return {
    props: {
      part: {
        ...data,
        headers,
        source: mdxSource // Replace the content property with the serialized MDX source
      },
      jamsContent: {
        singles,
        batches
      }
    }
  }
}

export default function PartPage({ part, jamsContent }) {
  // console.log(part.headers)
  return <JamComponent jamsContent={jamsContent} jam={part} />
}
