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
import PresentationSlider from '@/components/presentationSlider';
import JamComponent from '@/components/JamComponent';


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
  const fs = require('fs');
  const path = require('path');

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

  const jamsDir = path.join(process.cwd(), 'jams');

  const singlesDir = path.join(jamsDir, 'singles');
  const batchesDir = path.join(jamsDir, 'batches');

  const singles = getJams(fs, singlesDir);

  return {
    props: {
      jam: {
        ...data,
        source: mdxSource,
        headers,
      },
      jamsContent: {
        singles
      },
    },
  };
}



export default function JamPage({ jam, jamsContent }) {
  return (
    
    <JamComponent jam={jam} jamsContent={jamsContent}/>
  );
}
