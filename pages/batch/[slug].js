import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Header from '@/components/Header'
import { Container, Grid, Link } from 'theme-ui'
import PreviewCard from '@/components/PreviewCard'
import Footer from '@/components/Footer';
import { useState } from 'react'
import JamComponent from '@/components/JamComponent';
import Meta from '@hackclub/meta'
import Head from 'next/head'

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
  const jamDirectory = path.join(process.cwd(), 'jams', 'singles', params.slug);

  const jamsDir = path.join(process.cwd(), 'jams');

  const singlesDir = path.join(jamsDir, 'singles');

  const singles = getJams(fs, singlesDir);


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
      jams: {
        singles
      },
      params
    },
  };
}

export default function Page({ batch, params, jams }) {
  
  const [query, setQuery] = useState("")

    const router = useRouter();
  return     <div>
  <Meta
  as={Head}
  name={batch.title}
  title={batch.title}
  description={batch.description}
  image={batch.thumbnail}
  color="#ec3750"
/>
  <Header setQuery={setQuery} query={query} jams={jams.singles} back={`/`} />

<Container sx={{paddingTop: "96px"}}>
  <Container sx={{ p:"1rem"}} style={{ maxWidth:"64rem !important"}}>
    {/* Structure: root / batch name / part */}
    <Link href="/" sx={{ color: "#993CCF", textDecoration: "underline" }}>batch</Link> / <Link href={"/batch/" + batch.slug} sx={{ color: "#993CCF", textDecoration: "underline" }}>{batch.slug}</Link>
  </Container>
<Grid sx={{marginBottom: "32px"}} columns={[null, '3fr 2fr']} gap={[1,32]}>
<img style={{width: "100%", borderRadius: "16px"}} src={batch.thumbnail}/>
    <div>
    <h1>{batch.title}</h1>
    <p>{batch.contributor}</p>
    <p>{batch.description}</p>
    </div>

</Grid>
<Grid columns={[null, '1fr 1fr 1fr']} sx={{marginBottom: "32px"}}>

    {batch.parts.map((part) => 
    <div
    onClick={() => router.push(`/batch/${params.slug}/${part.part}`)}

    >
          <PreviewCard
    {...part}
    />
    </div>
    )}
  </Grid>
    {/* render other batch data here */}
  </Container>
  <Footer/>
  </div>;
}
