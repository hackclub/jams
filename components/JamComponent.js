import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Icon from '@hackclub/icons';
import { Link as ScrollLink, Element } from 'react-scroll';
import PresentationSlider from '@/components/presentationSlider';
import BatchPartSlider from '@/components/BatchPartSlider';
import { MDXRemote } from 'next-mdx-remote';
import mdxComponents from '@/components/mdxComponents';
import { Container, Text, Link, Box, Grid, Badge } from 'theme-ui';
import Header from '@/components/Header';

/** @jsxImportSource theme-ui */
import Meta from '@hackclub/meta'
import Head from 'next/head'

export default function JamComponent({ jam, jamsContent }) {
    const router = useRouter();
  
    const [presentationSelected, setPresentationSelected] = useState(true);
  
  
    const [activeSection, setActiveSection] = useState();
    const [passedSections, setPassedSections] = useState([]);
    const [upcomingSections, setUpcomingSections] = useState([]);
    
    const handleSectionClick = (sectionId) => {
      // router.push(`#${sectionId}`, undefined, { scroll: false });
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.scrollBy(0, -50);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        let newActiveSection = null;
        let passedSections = [];
        let upcomingSections = [];
    
        jam?.headers?.forEach((header) => {
          const sectionElement = document.getElementById(header);
          const rect = sectionElement?.getBoundingClientRect();
          
          if(rect?.top <= 128) {
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

      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const [query, setQuery] = useState("")
  
    return <>

<Meta
  as={Head}
  name={jam.title}
  title={jam.title}
  description={jam.description}
  image={jam.thumbnail}
  color="#ec3750"
/>
      <Header query={query} setQuery={setQuery} jams={jamsContent.singles
        .filter((jam) => 
        { 
          return (Object.values(jam).some((value) => value.toLowerCase().includes(query.toLowerCase().split(" "))))
        }
          )
      } back={"/"}/>
      <div sx={{ height:"5rem" }}></div>

      {/* <Container as="nav" sx={{
        maxWidth:"80rem",
        position:"sticky",
        top:0,
        px:"1.5rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        gap:"2rem",
        bg:"rgb(255,255,255,0.50)",
        backdropFilter:"blur(16px)",
        zIndex: 40
      }}>
        <button sx={{
          border:"none",
          font:"inherit",
          background:"none",
          px:"0.625rem",
          py:"0.25rem",
          display:"flex",
          alignItems:"center",
          gap:"0.25rem",
          color:"#993CCF",
          borderRadius:"9999px",
          my:"1rem",
          ":hover": { outlineStyle:"solid", outlineColor:"#993CCF", outlineWidth:"2px" }
        }}>
          ← Back
        </button>

        <input 
          sx={{
            width:"16rem",
            border:"none",
            font:"inherit",
            background:"none",
            px:"1rem",
            py:"0.5rem",
            bg:"white",
            borderRadius:"9999px",
            outlineStyle:"solid",
            outlineWidth:"2px",
            outlineColor: "#d4d4d4",
            my:"1rem",
            ":focus": { outlineColor:"#993CCF" },
          }}
          placeholder="Search for Raspberry Jam"
        />

        <button sx={{
          border:"none",
          font:"inherit",
          background:"none",
          p:"0.25rem",
          color:"#993CCF",
          borderRadius:"9999px",
          ":hover": { outlineStyle:"solid", outlineColor:"#993CCF", outlineWidth:"2px" }
        }}>
          GH
        </button>
      </Container> */}

      
      {/* So what this code does is checks if batch is null or not. upon null renders the singles breadcrumbs ver, upon non null renders the batch ver */}
      {jam.batch != null
        
          ? (<Container sx={{ p:"1rem"}} style={{ maxWidth:"64rem !important"}}>
                {/* Structure: root / batch name / part */}
                <Link href="/" sx={{ color: "#993CCF", textDecoration: "underline" }}>batch</Link> / <Link href={"/batch/" + jam.batch} sx={{ color: "#993CCF", textDecoration: "underline" }}>{jam.batch}</Link> / <Link href={"/batch/" + jam.batch + "/" + jam.part} sx={{ color: "#993CCF", textDecoration: "underline" }}>{jam.part}</Link>
              </Container>)
        
          : (<Container sx={{ p:"1rem"}} style={{ maxWidth:"64rem !important"}}>
                {/* Structure: root / jam name */}
                <Link href="/" sx={{ color: "#993CCF", textDecoration: "underline" }}>jam</Link> / <Link href={"/jam/" + jam.slug} sx={{ color: "#993CCF", textDecoration: "underline" }}>{jam.slug}</Link>
              </Container>)}


      <Container as="main" sx={{
        px:"1rem",
        display:"flex",
        flexDirection:["column","column","row"],
        gap:"3rem",
      }} style={{ maxWidth:"64rem !important"}}>
        <div sx={{ flex:"1 1 0%" }}>

        {jam.presentationPDF != "" && jam.video == "" && 
                      <div style={{ width: '100%', aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '24px', overflow: "hidden" }}>
                      <PresentationSlider presentationPlay={jam.presentationPlay} presentation={jam.presentation} pdfPath={jam.presentationPDF} />
                    </div> 
        }
        {jam.video != "" && jam.presentationPDF == "" && 
                      <div style={{ width: '100%', aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '24px', overflow: "hidden" }}>
              <video style={{ width: '100%', borderRadius: '0px 0px 24px 24px', aspectRatio: '16/9', backgroundColor: '#000' }} controls src={jam.video} />
                    </div> 
        }
        {jam.presentationPDF != "" && jam.video != "" && 

          (<Box>

            <Box style={{display: "flex", borderRadius: '24px 24px 0px 0px', justifyContent: "center", backgroundColor: "#e0e6ed", gap: "32px"}}>
              <Box style={{display: "flex", border:"1px solid #e0e6ed", padding: "2px", backgroundColor: "#fff", marginTop: "8px", marginBottom: "8px", backgroundColor: "#f9fafc", gap: "16px", padding: "4px 16px", borderRadius: "16px"}}>
              <p onClick={() => setPresentationSelected(true)} style={{cursor: "pointer",  border:"1px solid #e0e6ed", marginBottom: "2px", marginTop: "2px", backgroundColor: presentationSelected ? ("#F1E8FF") : ("#F6F6F6"), color: presentationSelected ? ("#993CCF") : ("#000"), width: "120px", alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "4px", paddingBottom: "4px", borderRadius: "8px"}}>Presentation</p>
              <p onClick={() => setPresentationSelected(false)} style={{cursor: "pointer", border:"1px solid #e0e6ed", marginBottom: "2px", marginTop: "2px", backgroundColor: !presentationSelected ? ("#F1E8FF") : ("#F6F6F6"), color: !presentationSelected ? ("#993CCF") : ("#000"), width: "120px", alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "4px", paddingBottom: "4px", borderRadius: "8px"}}>Video</p>
              </Box>
            </Box>
            {(presentationSelected ?            
              <div style={{ width: '100%', aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '0px 0px 24px 24px', overflow: "hidden" }}>
                <PresentationSlider presentationPlay={jam.presentationPlay} presentation={jam.presentation} pdfPath={jam.presentationPDF} />
              </div>
            :
              <video style={{ width: '100%', borderRadius: '0px 0px 24px 24px', aspectRatio: '16/9', backgroundColor: '#000' }} controls src={jam.video} />
            )}
          </Box>)}
            
          <Box style={{ marginTop: 8 }}>
            <Badge
              key="keywordFeature"
              mr={2}
              sx={{ cursor: 'pointer', backgroundColor: '#fff', marginBottom: '8px', fontSize: ['14px', 'auto'] }}
              variant="outline"
              color="#993CCF"
            >
              {jam?.keywords.split(', ')[0]}
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
          
          <Link href={`https://github.com/${jam.contributor}`} target="_blank" rel="noopener noreferrer" sx={{ textDecoration:"none"}}>
            <div sx={{ display:"flex", alignItems:"center", gap:"0.5rem", mt:"0.25rem" }}>
              <img
                src={`https://github.com/${jam.contributor}.png`}
                sx={{ width:"1.5rem", borderRadius:"9999px" }}
              />
              <span sx={{ fontWeight:"bold", color:"rgb(115 115 115)", "&:hover": {
                      color: '#993CCF', // Set text color to purple on hover
                    } }}>
                {jam.contributor}
              </span>
            </div>
          </Link>

          <Box style={{ fontSize: 18, lineHeight: '200%', paddingBottom: [32,64] }}>
            <MDXRemote components={mdxComponents} {...jam.source} />
          </Box>
        </div>

        <div sx={{ width:["auto","auto","20rem"], position:"relative" }}>
          <div sx={{ position: "sticky", top: "6rem", pb: "3rem", maxHeight: ["none", "none", "100vh"], overflowY: ["visible", "visible", "auto"] }}>
            
            {jam.batch != null ? <BatchPartSlider jam={jam} currentPart={jam.part} maxParts={jam.totalParts}></BatchPartSlider> : <></>}
            
            <h2 sx={{ fontSize:"1.5rem", lineHeight:"1rem", fontWeight:"bold" }}>
              Author
            </h2>

            <div sx={{
              px: "1.5rem",
              py: "1rem",
              display:"flex",
              alignItems:"center",
              gap:"1rem",
              bg: "rgb(229 229 229 / 0.50)",
              borderRadius: "1rem",
            }}>
              <img src={`https://github.com/${jam.contributor}.png`} sx={{ width:"3rem", height:"3rem", borderRadius:"9999px" }} />
              <div>
                <Link href={`https://github.com/${jam.contributor}`} target="_blank" rel="noopener noreferrer" sx={{ textDecoration:"none"}}>
                  <div sx={{ display:"flex", alignItems:"end", gap:"0.25rem", mt:"0.25rem", color:"rgb(115 115 115)",                     "&:hover": {
                      color: '#993CCF', // Set text color to purple on hover
                      borderColor: "#993CCF",
                      opacity: 1
                    }, }}>
                    <span sx={{ fontSize:"1.1rem", lineHeight:"1rem", fontWeight:"bold" }}>
                      {jam.contributor}
                    </span>

                    <Icon glyph="github" style={{ height: '20px', width: '20px' }} />
                  </div>
                </Link>

                <div sx={{ display:"flex", gap:"0.75rem", mt:"0.1rem" }}>
                  <Link
                    href={``}
                    sx={{ display:"flex", opacity: 0.5, border: "1px solid #000", fontSize: "15px", padding: ["1px 12px", "1px 8px"], marginTop: "4px", backgroundColor: "#fff", borderRadius: "8px", textDecoration: "none", alignItems:"center", gap:"0.25rem",           color: '#000', // Set initial text color to black
                    "&:hover": {
                      color: '#993CCF', // Set text color to purple on hover
                      borderColor: "#993CCF",
                      opacity: 1
                    }, }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Icon glyph="slack" style={{ height: '20px', width: '20px', padding: "0px" }} />
                    <span style={{textDecoration: "none"}}>Message on Slack</span>
                  </Link>
                </div>
              </div>
            </div>

            <h2 sx={{ fontSize:"1.5rem", lineHeight:"1rem", fontWeight:"bold", mt:"2rem" }}>
              Resources
            </h2>

            <Box sx={{ display:'flex', flexDirection:'column', gap:"8px", marginTop: "6px" }}>
              {jam.presentation && (
                <Link sx={{ color: '#993CCF' }} href={jam.presentationPDF}>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      border: '1px solid',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      borderRadius: '8px',
                      bg: '#fff',
                      
                    }}
                  >
                    <Text sx={{ textDecoration: 'none' }}>Presentation</Text>
                    <Icon height={22} width={22} glyph={'download'} />
                  </Box>
                </Link>
              )}
              {jam.video && (
                <Link sx={{ color: '#993CCF' }} href={jam.video}>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      border: '1px solid',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      borderRadius: '8px',
                      bg: '#fff',
                    }}
                  >
                    <Text sx={{ textDecoration: 'none' }}>Video</Text>
                    <Icon height={22} width={22} glyph={'download'} />
                  </Box>
                </Link>
              )}
              {jam.notes && (
                <Link sx={{ color: '#993CCF' }} href={jam.notes}>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      border: '1px solid',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      borderRadius: '8px',
                      bg: '#fff',
                    }}
                  >
                    <Text sx={{ textDecoration: 'none' }}>Notes</Text>
                    <Icon height={22} width={22} glyph={'download'} />
                  </Box>
                </Link>
              )}
              {jam.poster && (
                <Link sx={{ color: '#993CCF' }} href={jam.poster}>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      border: '1px solid',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      borderRadius: '8px',
                      bg: '#fff',
                    }}
                  >
                    <Text sx={{ textDecoration: 'none' }}>Poster</Text>
                    <Icon height={22} width={22} glyph={'download'} />
                  </Box>
                </Link>
              )}
            </Box>

            <div sx={{ display:["none","none","block"] }}>
              <h2 sx={{ fontSize:"1.5rem", lineHeight:"1rem", fontWeight:"bold", mt:"2rem" }}>
                Outline
              </h2>

              <ul style={{paddingLeft: 16, display:'flex', flexDirection:'column', gap:6}}>
                {jam?.headers?.map((header) => (
                  <li key={header}>
                    <div>
                      <Link 
                        href={`#${header}`} 
                        onClick={() => handleSectionClick(header)}
                        sx={{color: header === activeSection ? "#000" : passedSections.includes(header) ? "muted" : "#000", textDecoration: header === activeSection ? "underline" : "none"}}
                      >
                        {header}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>;
  }
  