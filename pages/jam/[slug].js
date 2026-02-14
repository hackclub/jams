import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import serialize from '@/components/mdSerializer'
import { MDXRemote } from 'next-mdx-remote'
import mdxComponents from '../../components/mdxComponents'
import { Container, Text, Link, Box, Grid, Badge } from 'theme-ui'
import Header from '@/components/Header'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Icon from '@hackclub/icons'
import { Link as ScrollLink, Element } from 'react-scroll'
import JamComponent from '@/components/JamComponent'

function getJams(fs, directory) {
  const filenames = fs.readdirSync(directory)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(directory, filename, 'en-US.md'),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      content
    }
  })
}

function getBatches(fs, directory) {
  const batchNames = fs.readdirSync(directory)

  return batchNames.map(batchName => {
    const batchDirectory = path.join(directory, batchName)
    const readMeFileContent = fs.readFileSync(
      path.join(batchDirectory, 'readMe', 'en-US.md'),
      'utf8'
    )
    const { data: readMeData, content: readMeContent } =
      matter(readMeFileContent)

    const partsDirectory = path.join(batchDirectory)
    const partsNames = fs
      .readdirSync(partsDirectory)
      .filter(part => part.startsWith('part'))
    partsNames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    const parts = partsNames.map(partName => {
      const partContent = fs.readFileSync(
        path.join(partsDirectory, partName, 'en-US.md'),
        'utf8'
      )
      const { data, content } = matter(partContent)

      return {
        ...data, // Spread the properties from the data object
        content
      }
    })

    return {
      ...readMeData, // Spread the properties from the readMeData object
      content: readMeContent,
      parts
    }
  })
}

export async function getStaticPaths() {
  const jamsDir = path.join(process.cwd(), 'jams', 'singles')
  const jamNames = fs.readdirSync(jamsDir)

  const paths = jamNames.map(jamName => {
    return {
      params: { slug: jamName }
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fs = require('fs')
  const path = require('path')

  const jamDirectory = path.join(process.cwd(), 'jams', 'singles', params.slug)

  const fileContent = fs.readFileSync(
    path.join(jamDirectory, 'en-US.md'),
    'utf8'
  )
  const { data, content } = matter(fileContent)

  const formattedContent = content.replace(/\\n/g, '\n')

  const mdxSource = await serialize(formattedContent)

  const headers = []

  const regex = /^#{2}\s(.+)$/gm // Regular expression to match ## headers

  let match
  while ((match = regex.exec(content))) {
    headers.push(match[1])
  }

  const jamsDir = path.join(process.cwd(), 'jams')

  const singlesDir = path.join(jamsDir, 'singles')
  const batchesDir = path.join(jamsDir, 'batches')

  const singles = getJams(fs, singlesDir)
  const batches = getBatches(fs, path.join(jamsDir, 'batches'))

  return {
    props: {
      jam: {
        ...data,
        source: mdxSource,
        headers
      },
      jamsContent: {
        singles,
        batches
      }
    }
  }
}

export default function JamPage({ jam, jamsContent }) {
  return <JamComponent jam={jam} jamsContent={jamsContent} />
}
