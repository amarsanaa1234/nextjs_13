import React from 'react'

function AboutLayout({children,}: {children: React.ReactNode}) {
  return (
    <div>
        <h1>about header</h1>
      {children}
    </div>
  )
}

export default AboutLayout
