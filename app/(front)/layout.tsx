import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      {/* <h2>I am a Front Pages only Layout</h2> */}
      <Navbar/>
      {children}
    </div>
  )
}