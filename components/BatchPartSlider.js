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
        <div style={{margin: "auto auto", maxWidth: "64rem !important", textAlign: "center" }}>
            <Container sx={{ p: "0rem" }} style={{ maxWidth: "64rem !important", textAlign: "center" }}>
                <ul style={{display: "inline-block", textAlign: "center", color: "#993CCF"}}>
                    <li style={{ display: "inline-block", padding: "5px 5px"}}>
                        {prevPage != null ? <Link href={prevPage} sx={{ color: "#993CCF", textDecoration: "underline" }}>Previous</Link> : "First Page"}
                    </li>
                    <li style={{ display: "inline-block", padding: "5px 5px" }}>
                        {currentPartInt}/{maxParts}
                    </li>
                    <li style={{ display: "inline-block", padding: "5px 5px" }}>
                        {nextPage != null ? <Link href={nextPage} sx={{ color: "#993CCF", textDecoration: "underline" }}>Next</Link> : "Last Page"}
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default BatchPartSlider;
