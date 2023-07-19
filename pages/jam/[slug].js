import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '../../components/mdxComponents';
import { Container, Text, Link, Box, Grid, Badge } from 'theme-ui';
import Header from '@/components/Header';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Icon from '@hackclub/icons'
import { Link as ScrollLink, Element } from 'react-scroll';
import PresentationSlider from '../../components/presentationSlider';


export async function getStaticPaths() {
  const jamsDir = path.join(process.cwd(), 'jams', 'singles');
  const jamNames = fs.readdirSync(jamsDir);

  const paths = jamNames.map((jamName) => {
    return {
      params: { slug: jamName },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const jamDirectory = path.join(process.cwd(), 'jams', 'singles', params.slug);

  const fileContent = fs.readFileSync(path.join(jamDirectory, 'en-US.md'), 'utf8');
  const { data, content } = matter(fileContent);

  const formattedContent = content.replace(/\\n/g, '\n');

  const mdxSource = await serialize(formattedContent);

  const headers = [];

  const regex = /^#{2}\s(.+)$/gm; // Regular expression to match ## headers

  let match;
  while ((match = regex.exec(content))) {
    headers.push(match[1]);
  }

  return {
    props: {
      jam: {
        ...data,
        source: mdxSource,
        headers,
      },
    },
  };
}



export default function JamPage({ jam }) {
  const router = useRouter();
  const scrollBoxRef = useRef(null);

  const [presentationSelected, setPresentationSelected] = useState(true);


  const [activeSection, setActiveSection] = useState();
  const [passedSections, setPassedSections] = useState([]);
  const [upcomingSections, setUpcomingSections] = useState([]);
  
  const handleSectionClick = (sectionId) => {
    router.push(`#${sectionId}`, undefined, { scroll: false });
  };

  useEffect(() => {
    const handleScroll = () => {
      let newActiveSection = null;
      let passedSections = [];
      let upcomingSections = [];
  
      jam.headers.forEach((header) => {
        const sectionElement = document.getElementById(header);
        const rect = sectionElement.getBoundingClientRect();
        
        if(rect.top <= 128) {
          newActiveSection = header;
          passedSections.push(header);
        } else {
          upcomingSections.push(header);
        }
      });
  
      setActiveSection(newActiveSection);
      setPassedSections(passedSections);
      setUpcomingSections(upcomingSections);
    };
    if (scrollBoxRef.current) {
      scrollBoxRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (scrollBoxRef.current) {
        scrollBoxRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  

  return (
    <div>
      <Header back={"/"}/>

      <Container style={{ paddingTop: '96px' }}>
        <Grid columns={[null, '0.75fr 3fr 0.75fr']} gap={24} style={{ overflow: 'hidden', height: 'calc(100vh - 96px)' }}>
          <nav>
            <h2 style={{ margin: 0 }}>Outline</h2>
            <ul>
  {jam.headers.map((header) => (
    <li key={header}>
      <div>
        <Link 
          href={`#${header}`} 
          onClick={() => handleSectionClick(header)}
          sx={{color: header === activeSection ? "#000" : passedSections.includes(header) ? "muted" : "#000",
                  textDecoration: header === activeSection ? "underline" : "none"}}
        >
          {header}
        </Link>
      </div>
    </li>
  ))}
</ul>

          </nav>
          <Box ref={scrollBoxRef} style={{ overflow: 'scroll', paddingLeft: '24px', paddingRight: '24px', height: 'calc(100vh - 96px)' }}>
            <Box>


            <Box style={{display: "flex", borderRadius: '24px 24px 0px 0px', justifyContent: "center", backgroundColor: "#e0e6ed", gap: "32px"}}>
              <Box style={{display: "flex", border:"1px solid #e0e6ed", padding: "2px", backgroundColor: "#fff", marginTop: "8px", marginBottom: "8px", backgroundColor: "#f9fafc", gap: "16px", padding: "4px 16px", borderRadius: "16px"}}>
              <p onClick={() => setPresentationSelected(true)} style={{cursor: "pointer",  border:"1px solid #e0e6ed", marginBottom: "2px", marginTop: "2px", backgroundColor: presentationSelected ? ("#F1E8FF") : ("#F6F6F6"), color: presentationSelected ? ("#993CCF") : ("#000"), width: "120px", alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "4px", paddingBottom: "4px", borderRadius: "8px"}}>Presentation</p>
              <p onClick={() => setPresentationSelected(false)} style={{cursor: "pointer", border:"1px solid #e0e6ed", marginBottom: "2px", marginTop: "2px", backgroundColor: !presentationSelected ? ("#F1E8FF") : ("#F6F6F6"), color: !presentationSelected ? ("#993CCF") : ("#000"), width: "120px", alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "4px", paddingBottom: "4px", borderRadius: "8px"}}>Video</p>
              </Box>
            </Box>

            {presentationSelected ?            
            (<div style={{ width: '100%', aspectRatio: "16/9", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '0px 0px 24px 24px', overflow: "hidden" }}>
            <PresentationSlider presentationPlay={jam.presentationPlay} presentation={jam.presentation} pdfPath={jam.presentationPDF} />

            </div>)
            :
            (<video style={{ width: '100%', borderRadius: '0px 0px 24px 24px', aspectRatio: '16/9', backgroundColor: '#000' }} controls src={jam.video} />)}
            </Box>
            <Box style={{ marginTop: 8 }}>
              <Badge
                key="keywordFeature"
                mr={2}
                sx={{ cursor: 'pointer', backgroundColor: '#fff', marginBottom: '8px', fontSize: ['14px', 'auto'] }}
                variant="outline"
                color="#993CCF"
              >
                {jam.keywords.split(', ')[0]}
              </Badge>
              <Badge
                key="difficultyFeature"
                mr={2}
                sx={{ cursor: 'pointer', backgroundColor: '#fff', marginBottom: '8px', fontSize: ['14px', 'auto'] }}
                variant="outline"
                color="#993CCF"
              >
                {jam.difficulty}
              </Badge>
              <Badge
                key="timeFeature"
                mr={2}
                sx={{ cursor: 'pointer', backgroundColor: '#fff', marginBottom: '8px', fontSize: ['14px', 'auto'] }}
                variant="outline"
                color="#993CCF"
              >
                {jam.timeEstimate}
              </Badge>
            </Box>
            <h1 style={{ marginTop: 0, marginBottom: 0 }}>{jam.title}</h1>

            <Box style={{ fontSize: 18, lineHeight: '200%' }}>
              <MDXRemote components={mdxComponents} {...jam.source} />
            </Box>
          </Box>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ margin: 0 }}>Jam Resources</h2>
            {jam.presentation && (
              <Link sx={{ marginBottom: '12px', color: '#993CCF' }} href={jam.presentationPDF}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '1px solid',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                >
                  <Text sx={{ textDecoration: 'none' }}>Presentation</Text>
                  <Icon height={22} width={22} glyph={'download'} />
                </Box>
              </Link>
            )}
            {jam.video && (
              <Link sx={{ marginBottom: '12px', color: '#993CCF' }} href={jam.video}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '1px solid',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                >
                  <Text sx={{ textDecoration: 'none' }}>Video</Text>
                  <Icon height={22} width={22} glyph={'download'} />
                </Box>
              </Link>
            )}
            {jam.notes && (
              <Link sx={{ marginBottom: '12px', color: '#993CCF' }} href={jam.notes}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '1px solid',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                >
                  <Text sx={{ textDecoration: 'none' }}>Notes</Text>
                  <Icon height={22} width={22} glyph={'download'} />
                </Box>
              </Link>
            )}
            {jam.poster && (
              <Link sx={{ marginBottom: '12px', color: '#993CCF' }} href={jam.poster}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '1px solid',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                >
                  <Text sx={{ textDecoration: 'none' }}>Poster</Text>
                  <Icon height={22} width={22} glyph={'download'} />
                </Box>
              </Link>
            )}
          </div>
        </Grid>
      </Container>
    </div>
  );
}
