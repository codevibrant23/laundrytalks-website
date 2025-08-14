"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutUs() {
    const features = [
        "Dedicated Professional Team",
        "Commitment to Quality",
        "Customer Satisfaction Guaranteed",
        "Eco-Friendly Practices",
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section id="about-us" className="py-16 lg:py-24 bg-white" aria-labelledby="about-us-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    id="about-us-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
                >
                    About Us
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Laundry Talks, we are dedicated to providing the most convenient and reliable laundry and dry cleaning
                            solutions right to your doorstep. We understand the demands of modern life, which is why we've streamlined
                            the process to save you time and effort.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Our mission is to deliver exceptional care for your garments, using advanced techniques and eco-friendly
                            products, ensuring your clothes return fresh, clean, and perfectly maintained.
                        </p>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
                        >
                            {features.map((feature, index) => (
                                <motion.div key={index} variants={itemVariants} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                    <span className="text-gray-800 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y : 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/media/about.png"
                            alt="Our team providing excellent service"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                        />
                        {/* <div className="absolute inset-0 bg-blue-600/30 flex items-center justify-center">
                            <span className="text-white text-3xl font-bold text-center p-4">Your Clothes, Our Care.</span>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
