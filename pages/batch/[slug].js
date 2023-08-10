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

/** @jsxImportSource theme-ui */

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
  return <>
    <Meta
      as={Head}
      name={batch.title}
      title={batch.title}
      description={batch.description}
      image={batch.thumbnail}
      color="#ec3750"
    />
    <Header
      setQuery={setQuery} query={query}
      jams={jams.singles.filter((jam) => 
        {
          /* check if it is true that:
              for some value in jam's values
              every part of the query is contained within that value*/
          var jamValues = Object.values(jam); // indicates each value that exists in the jam dict
          var queryWords = query.toLowerCase().trim().split(" "); // splits query into separate words and elimiates prefix and suffix whitespaces
          for (let singleJamValue = 0; singleJamValue < jamValues.length; singleJamValue++) { // iterates through the jam values
            var successful = true; // assume it works
            for (let singleWord = 0; singleWord < queryWords.length; singleWord++) { // iterates through the words in query
              if ((jamValues[singleJamValue].toLowerCase().split(" ")).indexOf(queryWords[singleWord]) == -1) { // if ANY word in query is not found in the values
                successful = false; // it is not working / not successful / wont be displayed
              }
            }
            if (successful) { // if it is confirmed to be successful
              return true; // display it
            }
          }
          return false; // it went here if no part of its values are successful, therefore it doesnt fit search criteria and is not shown
          // return (Object.values(jam).some((value) => value.toLowerCase().includes(query.toLowerCase().split(" "))))
        })
      }
      back={`/`}
    />

    <Container sx={{paddingTop: "96px"}} style={{ maxWidth:"64rem !important"}}>
      {/* Structure: root / batch name / part */}
      <Link href="/" sx={{ color: "#993CCF", textDecoration: "underline" }}>batch</Link> / <Link href={"/batch/" + batch.slug} sx={{ color: "#993CCF", textDecoration: "underline" }}>{batch.slug}</Link>
    </Container>

    <Container as="main"
      sx={{
        px:"1rem",
        mt:"1rem",
      }} style={{ maxWidth:"64rem !important"}}
    >
      <div sx={{
        px: "1.5rem",
        pt: "1.5rem",
        pb: "1rem",
        display:"flex",
        flexDirection:["column","column","row"],
        gap:["1rem", "1rem", "2rem"],
        bg: "rgb(229 229 229 / 0.50)",
        borderRadius: "16px",
      }}>
        <div sx={{ flex:"1 1 0%" }}>
          <img style={{width: "100%", aspectRatio:"16 / 9", objectFit:"cover", borderRadius: "16px"}} src={batch.thumbnail}/>
        </div>

        <div sx={{ width:["auto","auto","20rem"], position:"relative" }}>
          <h1 sx={{ m:0, lineHeight:"2.2rem" }}>
            {batch.title}
          </h1>

          <Link href={`https://github.com/${batch.contributor}`} target="_blank" rel="noopener noreferrer" sx={{ textDecoration:"none"}}>
            <div sx={{ display:"flex", alignItems:"center", gap:"0.5rem", mt:"0.5rem" }}>
              <img
                src={`https://github.com/${batch.contributor}.png`}
                sx={{ width:"1.5rem", borderRadius:"9999px" }}
              />
              <span sx={{ fontWeight:"bold", color:"rgb(115 115 115)", "&:hover": {
                color: '#993CCF', // Set text color to purple on hover
              } }}>
                {batch.contributor}
              </span>
            </div>
          </Link>

          <p>
            {batch.description}
          </p>
        </div>
      </div>
    </Container>

    <Container sx={{ mt:"3rem" }} style={{ maxWidth:"64rem !important"}}>
      <Grid columns={[null, '1fr 1fr 1fr']} sx={{ marginBottom: "32px", gap:"1rem" }}>
        {batch.parts.map((part) => 
          <Link
            style={{color: "#000", textDecoration: "none"}} 
            href={`/batch/${params.slug}/${part.part}`}
          >
            <PreviewCard
            {...part}
            />
          </Link>
        )}
      </Grid>

      {/* render other batch data here */}
    </Container>
    <Footer/>
  </>;
}
