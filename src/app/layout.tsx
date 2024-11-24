import React from 'react'
import "./globals.css";
import { Navbar } from './Components/Navbar';

export const metadata = {
  title: 'Resham Acharya',
  description: 'Personal Portfolio of Resham Acharya',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" !overflow-x-hidden">
      <Navbar/>
        {children}</body>
    </html>
  )
}
