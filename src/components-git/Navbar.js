"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    const navbarBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"])

    const navbarBackdrop = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    const navItems = [
        // { name: "Home", href: "#home", ariaLabel: "Navigate to home page" },
        { name: "About Us", href: "/about-us", ariaLabel: "Navigate to about us page" },
        { name: "Gallery", href: "/gallery", ariaLabel: "Navigate to gallery page" },
        { name: "Services", href: "/services", ariaLabel: "Navigate to services page" },
        { name: "Pricing", href: "/pricing", ariaLabel: "Navigate to pricing page" },
        { name: "Contact Us", href: "/contact-us", ariaLabel: "Navigate to contact page" },
    ]

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }



    return (
        <motion.nav
            style={{
                backgroundColor: navbarBackground,
                backdropFilter: navbarBackdrop,
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg border-b border-gray-200" : ""
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <a
                            href="/"
                            // onClick={(e) => handleNavClick(e, "#home")}
                            aria-label="PickupPro homepage"
                            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                        >

                            <Image
                                src="/logo.avif"
                                alt="PickupPro logo"
                                width={100}
                                height={100}
                                className="h-12 w-auto"
                            />
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <ul className="ml-10 flex items-baseline space-x-8" role="menubar">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    role="none"
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        aria-label={item.ariaLabel}
                                        role="menuitem"
                                        className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md ${isScrolled ? "text-gray-700" : "text-black"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden lg:block"
                    >
                        <Link href={'/contact-us'}>
                            <Button
                                className="font-bold bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label="Book a pickup service"
                            >
                                Book a Pickup
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={handleMenuToggle}
                            className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isScrolled ? "text-gray-700" : "text-white"
                                }`}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                id="mobile-menu"
                initial={false}
                animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white shadow-lg"
                aria-hidden={!isMenuOpen}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <ul role="menu">
                        {navItems.map((item) => (
                            <li key={item.name} role="none">
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    aria-label={item.ariaLabel}
                                    role="menuitem"
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="px-3 py-2">
                        <Link href={'/contact-us'}>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label="Book a pickup service"
                            >
                                Book a Pickup
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar
