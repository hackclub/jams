import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Header from '@/components/Header'
import { Container } from 'theme-ui'

export async function getStaticPaths() {

  const jamsDir = path.join(process.cwd(), 'jams', 'batches');
  const batchNames = fs.readdirSync(jamsDir);

  const paths = batchNames.map((batchName) => {
    return {
      params: { slug: batchName },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const batchDirectory = path.join(process.cwd(), 'jams', 'batches', params.slug);

  const readMeFileContent = fs.readFileSync(path.join(batchDirectory, 'readMe', 'en-US.md'), 'utf8');
  const { data: readMeData, content: readMeContent } = matter(readMeFileContent);

  const partsDirectory = path.join(batchDirectory);
  const partsNames = fs.readdirSync(partsDirectory).filter(part => part.startsWith('part'));
  partsNames.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));

  const parts = partsNames.map(partName => {
    const partContent = fs.readFileSync(path.join(partsDirectory, partName, 'en-US.md'), 'utf8');
    const { data, content } = matter(partContent);

    return {
      ...data,
      content,
    };
  });
  return {
    props: {
      batch: {
        ...readMeData,
        content: readMeContent,
        parts,
      },
      params
    },
  };
}

export default function Page({ batch, params }) {
    const router = useRouter();
console.log(batch)
  return     <div>
  <Header />

<Container sx={{paddingTop: "96px"}} variant="copy">
    <img src={batch.thumbnail}/>

    <h1>{batch.title}</h1>
    <p>{batch.contributor}</p>
    <p>{batch.description}</p>

    {batch.parts.map((part) => 
    <div
    onClick={() => router.push(`/batch/${params.slug}/${part.part}`)}

    >
        <img src={part.thumbnail}/>
        <p>Part {part.part.split("part-")[1]}</p>
        <p>{part.keywords.split(", ")[0]}</p>
        <p>{part.timeEstimate}</p>
        <p>{part.difficulty}</p>

        <p>{part.title}</p>
    </div>
    )}
    {/* render other batch data here */}
  </Container>
  </div>;
}
