import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { SanityLive } from '@/sanity/lib/live'

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <main>{children}</main>
            <SanityLive />
        </ClerkProvider>
    )
}

export default AppLayout