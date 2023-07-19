import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../../components/mdxComponents';
import { Container } from 'theme-ui'
import Header from '@/components/Header'

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
        params: { slug: batchName, part: partName },
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

  return {
    props: {
      part: {
        ...data,
        content: mdxSource, // Replace the content property with the serialized MDX source
      },
    },
  };
}

export default function PartPage({ part }) {
  return (
<div>
  <Header greyModeDefault={true} />

    <Container sx={{paddingTop: "96px"}} variant="copy">
      <h1>{part.title}</h1>
      <video style={{width: "256px"}}  controls src={part.video}/>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Part Resources</h2>
        {part.presentation && <a href={part.presentationPDF}>Presentation</a>}
        {part.video && <a href={part.video}>Video</a>}
        {part.notes && <a href={part.notes}>Notes</a>}
        {part.poster && <a href={part.poster}>Poster</a>}
      </div>
      {/* Render the MDX content */}
      <MDXRemote components={mdxComponents} {...part.content} />
    </Container>
    </div>
  );
}
