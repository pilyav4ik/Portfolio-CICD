"use client"

import { useState } from "react";
import Burger from "../burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "../stairs";
import Menu from "../menu";
import styles from './style.module.scss';
import Link from "next/link";

export function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);


    return (
        <nav className="fixed z-20 w-full">
            <div className="fixmenu">
                <Link href={"/"} className="text-white text-4xl absolute">
                    LOGO
                </Link>

                <div className={styles.menuContactsButtons + " text-white"}>
                    <Link href={"/contacts"} className={styles.contactButton}>Contact</Link>
                    <Burger openMenu={() => { setMenuIsOpen(true) }} />
                    <AnimatePresence mode="wait">

                        {
                            menuIsOpen && <>
                                <Stairs />
                                <Menu closeMenu={() => { setMenuIsOpen(false) }} />
                            </>
                        }

                    </AnimatePresence>
                </div>
            </div>

        </nav>
    )
}