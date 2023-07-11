import Header from '@/components/Header'
import { Box, Container, Heading, Text } from 'theme-ui'
import { promises as fs } from 'fs'
import path from 'path'
import { useEffect } from 'react'

const isMarkdownFile = fileName => path.extname(fileName) === '.md'

async function getFiles(dirPath) {
  let entries = await fs.readdir(dirPath, { withFileTypes: true })
  let files = entries
    .filter(fileEnt => fileEnt.isFile() && isMarkdownFile(fileEnt.name))
    .map(fileEnt => path.join(dirPath, fileEnt.name))
  let folders = entries.filter(folderEnt => folderEnt.isDirectory())
  for (let folder of folders) {
    files = files.concat(await getFiles(path.join(dirPath, folder.name)))
  }
  return files
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'jams')
  const fileNames = await getFiles(postsDirectory)

  const files = await Promise.all(
    fileNames.map(async filePath => {
      const fileContents = await fs.readFile(filePath, 'utf8')

      const filePathArray = filePath.split('/')
      filePathArray.splice(0, filePathArray.indexOf('jams') + 1)

      return {
        filePath: filePathArray,
        fileName: path.basename(filePath),
        content: fileContents
      }
    })
  )

  return {
    props: {
      files: files
    }
  }
}

export function getMetaContent(entireFile) {
  const removingStartingDashes = entireFile.split('---')

  const metaData = removingStartingDashes[1].split('\n')
  const keyValuePairs = []
  for (const dataSegment of metaData) {
    if (dataSegment !== '') {
      const dataSegmentSplit = dataSegment.split(':')
      const keyData = dataSegmentSplit[0]
      let valueData = dataSegmentSplit
        .slice(1)
        .join(':')
        .replace(/'/g, '')
        .slice(1)

      if (keyData == 'keywords') {
        valueData = valueData.split(', ')
      }
      keyValuePairs.push([keyData, valueData])
    }
  }

  return keyValuePairs
}

export default function Test(props) {
  useEffect(() => {
    const files = props.files
    const jams = []
    for (const file of files) {
      const newJam = {}
      if (!jams.some(jam => jam.slug == file.filePath[0])) {
        newJam['slug'] = file.filePath[0]
        jams.push(newJam)
      }

      var jamsIndex = jams.findIndex(jam => jam.slug == file.filePath[0])
      if (file.filePath[1] == 'readMe') {
        jams[jamsIndex]['isBatch'] = true
        if (jams[jamsIndex]['readMe'] != undefined) {
          jams[jamsIndex]['readMe'][file.fileName] = file.content
        } else {
          jams[jamsIndex]['readMe'] = {}
          const metaData = getMetaContent(file.content)
          for (const dataSegment of metaData) {
            jams[jamsIndex]['readMe'][dataSegment[0]] = dataSegment[1]
          }
        }
      }
      if (file.filePath.some(breadcrumb => breadcrumb.includes('part'))) {
        const partInteger = file.filePath[1].split('part-')
        const partMeaData = getMetaContent(file.content)

        const part = {
          position: parseInt(partInteger[1]),
          file: file
        }
        for (const dataSegment of partMeaData) {
          part[dataSegment[0]] = dataSegment[1]
        }

        if (jams[jamsIndex]['parts'] != undefined) {
          jams[jamsIndex]['parts'].push(part)
        } else {
          jams[jamsIndex]['parts'] = [part]
        }
      }
    }
    console.log(jams)
  }, [])
  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg, #993CCF 0%, rgba(170, 77, 181, 0.95) 17.19%, rgba(193, 99, 146, 0.90) 31.77%, rgba(223, 129, 101, 0.71) 52.08%, rgba(240, 146, 75, 0.60) 63.54%, rgba(240, 146, 75, 0.00) 96.88%), linear-gradient(180deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Box sx={{ p: 6, textAlign: 'center' }}>
        <Text
          as="h1"
          sx={{
            fontFamily: 'var(--heading)',
            fontSize: 96,
            textShadow: '0px 0px 64px 0px rgba(56, 10, 83, 0.75)'
          }}>
          Code Jams
        </Text>
        <p>
          Collaborative coding workshops where sparks ignite, fears dissolve,
          and inventions come to life.
        </p>
      </Box>
    </Box>
  )
}
