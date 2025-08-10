"use client"

import { motion } from "framer-motion"
import { Sparkles, WashingMachine, Zap, Sofa } from "lucide-react"
import Image from "next/image"

export default function OurServices() {
    const services = [
        {
            icon: Sparkles,
            title: "Dry Cleaning",
            description: "Expert dry cleaning for delicate fabrics and special garments, ensuring a pristine finish.",
            image: "/media/1.jpg",
            alt: "Dry cleaning service",
        },
        {
            icon: WashingMachine,
            title: "Premium Laundry",
            description: "High-quality wash, dry, and fold service for everyday wear, handled with utmost care.",
            image: "/media/2.jpg",
            alt: "Premium laundry service",
        },
        {
            icon: Zap,
            title: "Express Laundry",
            description:
                "Fast turnaround laundry service for when you need your clothes back quickly, without compromising quality.",
            image: "/media/3.jpg",
            alt: "Express laundry service",
        },
        {
            icon: Sofa,
            title: "Carpet / Sofa / Shoe Cleaning",
            description: "Specialized cleaning for your home furnishings and footwear, restoring their original look.",
            image: "/media/4.jpg",
            alt: "Carpet, sofa, and shoe cleaning service",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section id="services" className="py-16 lg:py-24 bg-white" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    id="services-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
                >
                    What We Offer
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-16"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        const isEven = index % 2 === 0
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                <div
                                    className={`relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg ${isEven ? "order-2 lg:order-1" : "order-2"}`}
                                >
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                    />
                                </div>
                                <div className={`text-center lg:text-left ${isEven ? "order-1 lg:order-2" : "order-1"}`}>
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto lg:mx-0">
                                        <IconComponent className="w-8 h-8" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-700 text-lg">{service.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
