"use client"

import Link from "next/link"
import { Mountain, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SiteFooter() {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    }

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-b from-blue-300 to-[#EEEFEE] py-12 md:py-16 text-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <Link href="#home" className="flex items-center justify-center md:justify-start mb-4">
                            {/* <Mountain className="size-8 text-blue-700" />
                            <span className="ml-2 text-2xl font-bold text-gray-900">Pickup Service</span> */}
                            <Image
                                src="/logo.avif"
                                alt="PickupPro logo"
                                width={100}
                                height={100}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Your trusted partner for fast, reliable, and eco-friendly laundry and dry cleaning services.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <Facebook className="size-6" />
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <Twitter className="size-6" />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <Instagram className="size-6" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="#about-us" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                                About Us
                            </Link>
                            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                                Services
                            </Link>

                            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                                Testimonials
                            </Link>
                            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                                Contact
                            </Link>
                        </nav>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center md:justify-start text-sm">
                                <Phone className="size-4 mr-2 text-blue-600" />
                                <span>+ 91-9205032800</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start text-sm">
                                <Mail className="size-4 mr-2 text-blue-600" />
                                <span>info@laundrytalks.in</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start text-sm">
                                <MapPin className="size-4 mr-2 text-blue-600" />
                                <span>91 Springboard, A 130, Sector 63, Noida</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Operating Hours */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
                        <div className="space-y-2 text-sm">
                            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <Link
                            href="#contact"
                            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-gray-600"
                >
                    <p>&copy; {new Date().getFullYear()} Pickup Service. All rights reserved.</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <Link href="#" className="hover:underline">
                            Terms & Conditions
                        </Link>
                        <Link href="#" className="hover:underline">
                            Privacy Policy
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    )
}
