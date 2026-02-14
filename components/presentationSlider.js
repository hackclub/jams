import React from 'react'
import { Link, Box } from 'theme-ui'

const PresentationSlider = ({ pdfPath, presentationPlay, presentation }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#000',
        position: 'relative',
        height: '100%',
        aspectRatio: '16/9'
      }}>
      <div
        style={{
          cursor: 'pointer',
          position: 'absolute',
          borderRadius: '12px',
          top: 16,
          left: 16,
          zIndex: 1
        }}>
        <Link
          target={'_blank'}
          sx={{ textDecoration: 'none', marginRight: '16px' }}
          href={presentationPlay}
          style={{
            color: '#5551FF',
            backgroundColor: '#fff',
            border: '2px solid #5551FF',
            padding: '8px 16px',
            fontSize: '16px',
            borderRadius: '8px'
          }}>
          Present
        </Link>
        <Link
          target={'_blank'}
          sx={{ textDecoration: 'none' }}
          href={presentation}
          style={{
            color: '#fff',
            backgroundColor: '#5551FF',
            padding: '8px 16px',
            fontSize: '16px',
            borderRadius: '8px'
          }}>
          Edit In Figma
        </Link>
      </div>

      <iframe
        src={pdfPath}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: '#E1E6EC'
        }}
        title="Presentation slides"
      />
    </div>
  )
}

export default PresentationSlider
