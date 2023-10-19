import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const jamsDir = path.join(process.cwd(), 'jams')
const batchesDir = path.join(jamsDir, 'batches')
const singlesDir = path.join(jamsDir, 'singles')

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

export function getJam(jamName) {
  const fileContent = fs.readFileSync(
    path.join(singlesDir, jamName, 'en-US.md'),
    'utf8'
  )
  const { data, content } = matter(fileContent)

  return {
    ...data, // Spread the properties from the data object
    keywords: parseKeywords(data.keywords),
    type: 'single',
    path: '/jam/' + data.slug,
    content
  }
}

export function getSingleJams() {
  const filenames = fs.readdirSync(singlesDir)

  return filenames.map(getJam)
}

function parseKeywords(keywordString) {
  return keywordString.split(',').map(k => k.toLowerCase().trim()) || []
}

export function getBatchJams() {
  const batchNames = fs.readdirSync(batchesDir)
  return batchNames.map(batchName => getBatch(batchName))
}

export function getBatch(batchName) {
  const batchDirectory = path.join(batchesDir, batchName)
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

  const parts = partsNames.map(partName => getBatchPart(batchName, partName))

  return {
    ...readMeData, // Spread the properties from the readMeData object
    content: readMeContent,
    keywords: parseKeywords(readMeData.keywords),
    type: 'batch',
    path: '/batch/' + readMeData.slug,
    parts
  }
}

export function getBatchPart(batchName, partName) {
  const batchDirectory = path.join(batchesDir, batchName)
  const partsDirectory = path.join(batchDirectory)
  const partContent = fs.readFileSync(
    path.join(partsDirectory, partName, 'en-US.md'),
    'utf8'
  )
  const { data, content } = matter(partContent)

  return {
    ...data, // Spread the properties from the data object
    keywords: parseKeywords(data.keywords),
    path: '/batch/' + batchName + '/' + data.part,
    content
  }
}