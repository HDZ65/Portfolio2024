'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from './../../../public/logo.png';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const LinkNav: React.FC = () => {
    const pathname = usePathname()?.slice(1) || '';

    const content = [
        {
            href: '/',
            label: 'Accueil',
            icon: <Home className="h-4 w-4 stroke-[1.5]" />
        },
        {
            href: 'aPropos',
            label: 'A propos',
            icon: <User className="h-4 w-4 stroke-[1.5]" />
        },
        {
            href: 'mesProjets',
            label: 'Mes projets',
            icon: <FolderGit2 className="h-4 w-4 stroke-[1.5]" />
        },
        {
            href: 'contact',
            label: 'Contact',
            icon: <Mail className="h-4 w-4 stroke-[1.5]" />
        }
    ]

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3
                }}
                className="absolute left-[5px] top-0 md:left-[72px] md:top-[0.2rem] z-[1001] px-1 md:px-0"
            >
                <Link href="/">
                    <Image 
                        className="h-14 w-14 md:h-14 md:w-14" 
                        src={logo} 
                        alt="logo" 
                        width={500} 
                        height={500}
                    />
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="hidden md:flex md:justify-center md:items-center md:gap-4 lg:gap-8"
            >
                {content.map((item, index) => {
                    const isActive = pathname === item.href.slice(1);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3 + index * 0.1
                            }}
                        >
                            <Link
                                href={item.href}
                                className={`
                                    flex flex-row items-center gap-2 text-lg px-3 xl:px-6 select-none
                                    transition-all duration-500 ease-out 
                                    ${isActive 
                                        ? 'text-gray-500' 
                                        : 'text-primary hover:text-gray-500'
                                    }
                                `}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    )
}

export default LinkNav;