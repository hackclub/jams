import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Icon from '@hackclub/icons'
import { Container, Text, Link, Box, Grid, Badge } from 'theme-ui';

const BatchPartSlider = ({ jam, currentPart, maxParts}) => {
    /* jam is the jam object */
    /* currentPart indicates current part slug piece, maxParts indicates maximum parts number */

    const currentPartInt = parseInt(currentPart.substring(5));

    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    /* When the page gets loaded successfully */
    useEffect(() => {
        console.log(currentPartInt);
        console.log(maxParts);
        if (currentPartInt >= 2) {
            setPrevPage("/batch/" + jam.batch + "/part-" + (currentPartInt - 1).toString());
        }
    
        if (currentPartInt < maxParts) {
            setNextPage("/batch/" + jam.batch + "/part-" + (currentPartInt + 1).toString());
        }
    }, []);

    return (
        <div style={{textAlign: "center" }}>
            <Container sx={{ p: "0rem" }} style={{ textAlign: "center" }}>
                <ul style={{display: "inline-block", textAlign: "center", color: "#993CCF"}}>
                    <li key={0} style={{ display: "inline-block", padding: "5px 5px"}}>
                        {prevPage != null ? <Link href={prevPage} sx={{ color: "#993CCF", textDecoration: "underline" }}>Previous</Link> : ""}
                    </li>
                    <li key={1} style={{ display: "inline-block", padding: "5px 5px" }}>
                        {currentPartInt}/{maxParts}
                    </li>
                    <li key={2} style={{ display: "inline-block", padding: "5px 5px" }}>
                        {nextPage != null ? <Link href={nextPage} sx={{ color: "#993CCF", textDecoration: "underline" }}>Next</Link> : ""}
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default BatchPartSlider;
