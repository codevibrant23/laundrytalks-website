"use client"

import { motion } from "framer-motion"
import { CalendarCheck, Package, Shirt, Truck } from "lucide-react"

export default function HowItWorks() {
    const steps = [
        {
            icon: CalendarCheck,
            title: "Schedule Pickup",
            description: "Choose a convenient time online or via WhatsApp for us to collect your items.",
        },
        {
            icon: Package,
            title: "We Collect Your Clothes",
            description: "Our professional team will arrive at your doorstep to pick up your laundry.",
        },
        {
            icon: Shirt,
            title: "Wash & Dry Clean",
            description: "We use premium cleaning services to ensure your clothes are spotless and fresh.",
        },
        {
            icon: Truck,
            title: "Delivery",
            description: "Get your clothes back, fresh, clean, and perfectly folded, right to your door.",
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
        <section id="how-it-works" className="w-full md:w-[95%] py-16 lg:py-24 bg-blue-50 rounded-xl" aria-labelledby="how-it-works-heading">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    id="how-it-works-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
                >
                    How It Works
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => {
                        const IconComponent = step.icon
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                                    <IconComponent className="w-8 h-8" aria-hidden="true" />
                                </div>
                                <h3 className=" font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
