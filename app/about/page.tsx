import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>
      <Link href='/'> back home</Link>
    </div>
  )
}

export default page
