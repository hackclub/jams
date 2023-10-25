import matter from 'gray-matter'
import serialize from '@/components/mdSerializer'
import JamComponent from '@/components/JamComponent'

export async function getStaticPaths() {
  const { getSingleJams } = await import('@/libs/JamsData')
  const paths = getSingleJams().map(j => j.path)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { getJam, getAllJams } = await import("@/libs/JamsData")
  const jams = getAllJams()
  const jam = getJam(params.slug)

  const { content } = matter(jam.content)

  const formattedContent = content.replace(/\\n/g, '\n')

  const mdxSource = await serialize(formattedContent)

  const headers = []

  const regex = /^#{2}\s(.+)$/gm // Regular expression to match ## headers

  let match
  while ((match = regex.exec(content))) {
    headers.push(match[1])
  }

  return {
    props: {
      jam: {
        ...jam,
        source: mdxSource,
        headers
      },
      jamsContent: jams
    }
  }
}

export default function JamPage({ jam, jamsContent }) {
  return <JamComponent jam={jam} jamsContent={jamsContent} />
}
