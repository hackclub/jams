import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const jamsDir = path.join(process.cwd(), 'jams')

export function getAllJams() {
  const singles = getSingleJams()
  const batches = getBatchJams()

  return singles.concat(batches)
}

export function getFilteredJams(keyword) {
  const allJams = getAllJams()
  return allJams.filter(jam => jam.keywords.includes(keyword))
}

export function getAllTags() {
  const jams = getAllJams()
  const tags = new Set()
  jams.forEach(jam => {
    jam.keywords.forEach(keyword => {
      tags.add(keyword)
    })
  })
  tags.delete('')
  return Array.from(tags)
}

export function getSingleJams() {
  const directory = path.join(jamsDir, 'singles')
  const filenames = fs.readdirSync(directory)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(directory, filename, 'en-US.md'),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      keywords: parseKeywords(data.keywords),
      type: 'single',
      path: '/single/' + data.slug,
      content
    }
  })
}

function parseKeywords(keywordString) {
  return keywordString.split(',').map(k => k.toLowerCase().trim())
}

export function getBatchJams() {
  const directory = path.join(jamsDir, 'batches')
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
        keywords: parseKeywords(data.keywords),
        content
      }
    })

    return {
      ...readMeData, // Spread the properties from the readMeData object
      content: readMeContent,
      keywords: parseKeywords(readMeData.keywords),
      type: 'batch',
      path: '/batch/' + readMeData.slug,
      parts
    }
  })
}
