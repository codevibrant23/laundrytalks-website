"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
    const handleBookNow = () => {
        // Add booking functionality here
        console.log("Book now clicked")
    }

    const handleLearnMore = () => {
        const aboutSection = document.querySelector("#about")
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            })
        }
    }

    const features = [
        {
            icon: Phone,
            text: "24/7 Support",
            ariaLabel: "24 hours 7 days support available",
        },
        {
            icon: Mail,
            text: "Quick Response",
            ariaLabel: "Quick response to customer inquiries",
        },
        {
            icon: MapPin,
            text: "Wide Coverage",
            ariaLabel: "Wide geographical coverage area",
        },
    ]

    return (
        <section id="home" className="pt-16 lg:pt-20 min-h-screen flex items-center bg-gradient-to-b from-blue-300 via-[#EEEFEE] to-[#EEEFEE]  " aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                        >
                            Fast & Reliable <span className="text-blue-600">Pickup Service</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
                        >
                            Experience seamless pickup and delivery services with our professional team. We handle your packages with
                            care and deliver them on time, every time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                onClick={handleBookNow}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label="Book pickup service now"
                            >
                                Book Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={handleLearnMore}
                                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                aria-label="Learn more about our services"
                            >
                                Learn More
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left"
                            role="list"
                            aria-label="Service features"
                        >
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center lg:justify-start space-x-3"
                                        role="listitem"
                                    >
                                        <IconComponent className="h-5 w-5 text-blue-600" aria-hidden="true" />
                                        <span className="text-gray-600" aria-label={feature.ariaLabel}>
                                            {feature.text}
                                        </span>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden ">
                            <Image
                                src="/heroLaundary.webp"
                                alt="Professional delivery person with packages, representing fast and reliable pickup service"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block"
                            role="img"
                            aria-label="Free & Fast Delivery"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                                <span className="text-sm font-medium text-gray-700">Free & Fast Delivery</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block"
                            role="img"
                            aria-label="On-time delivery statistics"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">99%</div>
                                <div className="text-xs text-gray-600">On-time Delivery</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
