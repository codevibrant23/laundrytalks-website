"use client"

import { motion } from "framer-motion"
import { Truck, DollarSign, Leaf, Clock } from "lucide-react"

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Truck,
            title: "Free Pickup & Delivery",
            description: "Enjoy the convenience of complimentary pickup and delivery right to your doorstep.",
        },
        {
            icon: DollarSign,
            title: "Affordable Pricing",
            description: "Premium services at competitive rates, ensuring great value for your money.",
        },
        {
            icon: Leaf,
            title: "Eco-Friendly Detergents",
            description: "We use environmentally safe and gentle detergents for a sustainable clean.",
        },
        {
            icon: Clock,
            title: "Fast Turnaround Time",
            description: "Quick and efficient service to get your items back to you sooner.",
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
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    }

    return (
        <section
            id="why-choose-us"
            className="relative py-16 lg:py-24 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/why-choose-us-bg.webp')" }}
            aria-labelledby="why-choose-us-heading"
        >
            <div className="absolute inset-0 bg-blue-500 " aria-hidden="true"></div> {/* Overlay for readability */}
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    id="why-choose-us-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
                >
                    Why Choose Us
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg"
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100/20 text-white mb-4">
                                    <IconComponent className="w-8 h-8" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-200">{benefit.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
