"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {

    const pathname = usePathname()

    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className='sidebar-logo'>
                    <Image  src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
                </Link>

                <nav className='sidebar-nav'>
                    {/* Code montré seulement si le user est connecté */}
                    <SignedIn> 
                        <ul className='sidebar-nav_elements'>
                            {navLinks.slice(0, 6).map(e => {

                                const isActive = e.route === pathname

                                return(
                                    <li key={e.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gay-700'}`}>
                                        <Link className='sidebar-link' href={e.route}>
                                            <Image 
                                                src={e.icon} 
                                                alt='logo' 
                                                width={24} 
                                                height={24} 
                                                className={`${isActive && 'brigthness-200'}`}
                                            />
                                            {e.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className='sidebar-nav_elements'>
                            {navLinks.slice(6).map(e => {

                                const isActive = e.route === pathname

                                return(
                                    <li key={e.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gay-700'}`}>
                                        <Link className='sidebar-link' href={e.route}>
                                            <Image 
                                                src={e.icon} 
                                                alt='logo' 
                                                width={24} 
                                                height={24} 
                                                className={`${isActive && 'brigthness-200'}`}
                                            />
                                            {e.label}
                                        </Link>
                                    </li>
                                )
                            })}

                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName/>
                            </li>

                        </ul>
                    </SignedIn>

                    {/* Code montré si le user n'est pas connecté */}
                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href="/sign-in"></Link>
                        </Button>
                    </SignedOut>

                </nav>

            </div>
        </aside>
    )
}

export default Sidebar