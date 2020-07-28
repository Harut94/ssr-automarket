import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
//styles
import styles from './nav-link.module.css'

interface NavLinkInterface {
    href: string
    className: string
    text: string
}   

const NavLink = ({href, className, text}:NavLinkInterface) => {
    const router = useRouter()
    const [active, setActive] = useState(false)
    useEffect(() => {
        if(router.pathname === href) {
            setActive(true)
        } 
    }, [router.pathname])

    return (
        <Link href={href}>
            <a className={`${className} ${active ? styles.active : ''}`} >
                {text}
            </a>
        </Link>
    )
};

export default NavLink