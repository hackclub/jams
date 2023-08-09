import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../../components/mdxComponents';
import { Container } from 'theme-ui'
import Header from '@/components/Header'
import JamPage from '../../jam/[slug]'
import JamComponent from '@/components/JamComponent';

function getJams(fs, directory) {
  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    const fileContent = fs.readFileSync(path.join(directory, filename, 'en-US.md'), 'utf8');
    const { data, content } = matter(fileContent);

    return {
      ...data, // Spread the properties from the data object
      content,
    };
  });
}

export async function getStaticPaths() {
  const batchesDir = path.join(process.cwd(), 'jams', 'batches');
  const batchNames = fs.readdirSync(batchesDir);

  const paths = [];
  batchNames.forEach((batchName) => {
    const batchDirectory = path.join(batchesDir, batchName);
    const partsDirectory = path.join(batchDirectory);
    const partsNames = fs.readdirSync(partsDirectory).filter(part => part.startsWith('part'));

    partsNames.forEach((partName) => {
      paths.push({
        params: { slug: batchName,
           
          part: partName },
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const partDirectory = path.join(process.cwd(), 'jams', 'batches', params.slug, params.part);

  const partContent = fs.readFileSync(path.join(partDirectory, 'en-US.md'), 'utf8');
  const { data, content } = matter(partContent);

  // Correctly format the Markdown content
  const formattedContent = content.replace(/\\n/g, '\n');

  // Serialize the MDX content
  const mdxSource = await serialize(formattedContent);
  const headers = [];
  
  const regex = /^#{2}\s(.+)$/gm; // Regular expression to match ## headers

  const jamsDir = path.join(process.cwd(), 'jams');

  const singlesDir = path.join(jamsDir, 'singles');

  const singles = getJams(fs, singlesDir);


  let match;
  while ((match = regex.exec(content))) {
    headers.push(match[1]);
  }


  return {
    props: {
      part: {
        ...data,
        headers,
        source: mdxSource, // Replace the content property with the serialized MDX source
      },
      jamsContent: {
        singles
      },
    },
  };
}

export default function PartPage({ part, jamsContent }) {
  // console.log(part.headers)
  return (
    <JamComponent jamsContent={jamsContent} jam={part}/>
  );
}
