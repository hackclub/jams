import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Icon from '@hackclub/icons'
import { Link
 } from 'theme-ui'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PresentationSlider = ({ pdfPath, presentationPlay, presentation }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  /* When the document gets loaded successfully */
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    if((pageNumber >= 2)){
    changePage(-1);
    }
  }

  function nextPage() {
    if((pageNumber <= numPages - 1)){
        changePage(1);
    }
  }

  return (
    <div style={{ width: '100%', cursor: pageNumber <= numPages - 1 ? ("pointer") : ("auto"), backgroundColor: '#000', position: 'relative', height: '100%', aspectRatio: '16/9' }} ref={containerRef}>
        <div style={{cursor: "pointer", position: 'absolute', borderRadius: "12px", top: 16, left: 16, zIndex: 1}}>
        <Link sx={{textDecoration: "none", marginRight: "16px"}} href={presentationPlay} style={{ color: '#5551FF', backgroundColor: "#fff", border: "2px solid #5551FF", padding: "8px 16px", fontSize: "16px", borderRadius: "8px" }}>
        Play in Figma
        </Link>
        <Link sx={{textDecoration: "none"}} href={presentation} style={{ color: '#fff', backgroundColor: "#5551FF", padding: "8px 16px", fontSize: "16px", borderRadius: "8px" }}>
            Remix In Figma
        </Link>

        </div>
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 1, color: '#fff' }}>
        <div>

          <div style={{display: "flex", backgroundColor: "#E1E6EC", borderRadius: "12px", color: "#000", alignItems: "center", padding: "8px"}}>
            <div  style={{display: "flex", cursor: "pointer", color: (pageNumber >= 2) ? ("#000") : ("#e0e6ed"), backgroundColor: "#fff", borderRadius: "8px 0px 0px 8px", alignItems: "center", justifyContent: "center"}} disabled={pageNumber <= 1} onClick={previousPage} className="Pre">
            <Icon glyph={"view-back"}/>
            </div>
            <div>
            <p style={{marginLeft: "1px", backgroundColor: "#fff", marginRight: "1px", height: "32px", alignItems: "center", display: "flex", justifyContent: "center", paddingLeft: "12px", paddingRight: "12px", marginTop: "0px", marginBottom: "0px"}}>
            {pageNumber || (numPages ? 1 : '--')}/{numPages || '--'}
            </p>
          </div>
            <div style={{display: "flex", cursor: "pointer", color: (pageNumber <= numPages - 1) ? ("#000") : ("#e0e6ed"), backgroundColor: "#fff", borderRadius: "0px 8px 8px 0px", alignItems: "center", justifyContent: "center"}} disabled={pageNumber >= numPages} onClick={nextPage}>
            <Icon glyph={"view-forward"}/>
            </div>
          </div>
        </div>
      </div>

      
      <Document style={{ backgroundColor: '#E1E6EC' }} file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={containerWidth}
          height={containerHeight}
          title=""
          onClick={() => nextPage()}
          load={
            <div style={{width: "100%", backgroundColor: "#E1E6EC", aspectRatio: "16/9"}}>

            </div>
          }
        />
      </Document>
      
    </div>
  );
};

export default PresentationSlider;
