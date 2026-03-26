import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>That&apos;s a 404!</h1>
      <Link href="/">Go back home</Link>
    </div>
  )
}
