'use client'

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { CartStoreProvider } from '@/libs/store/cart-store-povider'
import { ChatStoreProvider } from '@/stores/chat-store'
import { AppShell } from '@/components/app-shell'
import { Header } from '@/components/header'
import { CartSheet } from '@/components/cart-sheet'
import { ChatSheet } from '@/components/chat-sheet'
import { Toaster } from 'react-hot-toast'
import { SanityLive } from '@/sanity/lib/live'

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