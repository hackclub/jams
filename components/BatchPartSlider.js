import React, { useMemo } from 'react'
import { Container, Link } from 'theme-ui'

const BatchPartSlider = ({ jam, currentPart, maxParts }) => {
  /* jam is the jam object */
  /* currentPart indicates current part slug piece, maxParts indicates maximum parts number */

  const currentPartInt = parseInt(currentPart.substring(5))

  const prevPage = useMemo(
    () =>
      currentPartInt >= 2
        ? '/batch/' + jam.batch + '/part-' + (currentPartInt - 1).toString()
        : null,
    [currentPartInt, jam.batch]
  )

  const nextPage = useMemo(
    () =>
      currentPartInt < maxParts
        ? '/batch/' + jam.batch + '/part-' + (currentPartInt + 1).toString()
        : null,
    [currentPartInt, jam.batch, maxParts]
  )

  return (
    <div style={{ textAlign: 'center' }}>
      <Container sx={{ p: '0rem' }} style={{ textAlign: 'center' }}>
        <ul
          style={{
            display: 'inline-block',
            textAlign: 'center',
            color: '#993CCF'
          }}>
          <li key={0} style={{ display: 'inline-block', padding: '5px 5px' }}>
            {prevPage != null ? (
              <Link
                href={prevPage}
                sx={{ color: '#993CCF', textDecoration: 'underline' }}>
                Previous
              </Link>
            ) : (
              ''
            )}
          </li>
          <li key={1} style={{ display: 'inline-block', padding: '5px 5px' }}>
            {currentPartInt}/{maxParts}
          </li>
          <li key={2} style={{ display: 'inline-block', padding: '5px 5px' }}>
            {nextPage != null ? (
              <Link
                href={nextPage}
                sx={{ color: '#993CCF', textDecoration: 'underline' }}>
                Next
              </Link>
            ) : (
              ''
            )}
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default BatchPartSlider
