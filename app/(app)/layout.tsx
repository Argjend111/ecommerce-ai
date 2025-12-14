import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <div>{children}</div>
        </ClerkProvider>
    )
}

export default Layout