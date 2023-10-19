import  serialize  from '@/components/mdSerializer'
import JamComponent from '@/components/JamComponent'

export async function getStaticPaths() {
  // get parts for all batches
  const { getBatchJams } = await import('@/libs/JamsData')
  const batches = getBatchJams()
  const partPaths = new Set()
  batches.forEach(batch => {
    batch.parts.forEach(part => {
      partPaths.add(part.path)
    })
  })
  const paths = Array.from(partPaths)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug, part } = params
  const { getBatchPart, getAllJams } = await import('@/libs/JamsData')
  const jams = getAllJams()
  const batchPart = getBatchPart(slug, part)
  const { content } = batchPart

  // Correctly format the Markdown content
  const formattedContent = content.replace(/\\n/g, '\n')

  // Serialize the MDX content
  const mdxSource = await serialize(formattedContent)
  const headers = []

  const regex = /^#{2}\s(.+)$/gm // Regular expression to match ## headers

  let match
  while ((match = regex.exec(content))) {
    headers.push(match[1])
  }

  return {
    props: {
      part: {
        ...batchPart,
        headers,
        source: mdxSource // Replace the content property with the serialized MDX source
      },
      jams,
    }
  }
}

export default function PartPage({ part, jams }) {
  return <JamComponent jamsContent={jams} jam={part} />
}
