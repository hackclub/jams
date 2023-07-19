import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PresentationSlider = ({ pdfPath }) => {
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
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#000', position: 'relative', height: '100%', aspectRatio: '16/9' }} ref={containerRef}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, color: '#fff' }}>
        <div>
          <div className="pagec">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </div>
          <div className="buttonc">
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className="Pre">
              Previous
            </button>
            <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
      <Document style={{ backgroundColor: '#000' }} file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={containerWidth}
          height={containerHeight}
          title=""
        />
      </Document>
      
    </div>
  );
};

export default PresentationSlider;
