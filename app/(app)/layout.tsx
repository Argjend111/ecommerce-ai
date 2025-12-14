import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <CartStoreProvider>
                <ChatStoreProvider>
                    <AppShell>
                        <Header />
                        <main>{children}</main>
                    </AppShell>
                    <CartSheet />
                    <ChatSheet />
                    <Toaster position="bottom-right" />
                    <SanityLive />
                </ChatStoreProvider>
            </CartStoreProvider>
        </ClerkProvider>
    )
}

export default AppLayout