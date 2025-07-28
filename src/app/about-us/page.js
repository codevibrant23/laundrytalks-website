"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Clock, Award, Users, Leaf, Shield } from "lucide-react"

export default function AboutPage() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.div
                className="bg-gradient-to-b from-blue-400 to-[#1D7BB3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" variants={itemVariants}>
                            About Us
                        </motion.h1>
                        <motion.p className="text-xl text-blue-100 max-w-3xl mx-auto" variants={itemVariants}>
                            Providing premium laundry services with care and dedication since 2005
                        </motion.p>
                    </motion.div>
                </div>
                {/* Decorative Wave */}
                <div className="relative">
                    <svg
                        className="absolute bottom-0 w-full h-12 z-50 text-gray-50 transform rotate-180"
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </motion.div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                At Laundry Talks, we are dedicated to providing the most convenient and reliable laundry and dry
                                cleaning solutions right to your doorstep. We understand the demands of modern life, which is why we've
                                streamlined the process to save you time and effort.
                            </p>
                            <p>
                                Founded in 2005, our journey began with a simple mission: to deliver exceptional care for your garments,
                                using advanced techniques and eco-friendly products, ensuring your clothes return fresh, clean, and
                                perfectly maintained.
                            </p>
                            <p>
                                Over the years, we've grown from a small local operation to serving thousands of satisfied customers
                                across the city, all while maintaining our commitment to quality, sustainability, and customer
                                satisfaction.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-blue-500" size={20} />
                                <span className="text-gray-700">Dedicated Professional Team</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-blue-500" size={20} />
                                <span className="text-gray-700">Commitment to Quality</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-blue-500" size={20} />
                                <span className="text-gray-700">Customer Satisfaction Guaranteed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-blue-500" size={20} />
                                <span className="text-gray-700">Eco-Friendly Practices</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/media/1.jpg"
                            alt="Our professional laundry team at work"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            quality={90}
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Our Values Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            These core principles guide everything we do, from how we treat your garments to how we interact with our
                            customers and the environment.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-sm"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <Award className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
                            <p className="text-gray-700">
                                We are committed to delivering the highest quality cleaning services, paying attention to every detail
                                to ensure your garments receive the best care possible.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-sm"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <Leaf className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Responsibility</h3>
                            <p className="text-gray-700">
                                We use eco-friendly detergents and energy-efficient equipment to minimize our environmental impact while
                                still providing exceptional cleaning results.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-sm"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <Users className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-First Approach</h3>
                            <p className="text-gray-700">
                                Your satisfaction is our priority. We listen to your needs, provide personalized service, and ensure a
                                seamless experience from pickup to delivery.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Why Trust Us Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Us With Your Garments</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        With years of experience and thousands of satisfied customers, we've built our reputation on reliability,
                        quality, and exceptional service.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="flex space-x-4 bg-gray-100 p-5 rounded-xl shadow-sm" variants={itemVariants}>
                        <div className="bg-blue-100 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                            <Clock className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years of Experience</h3>
                            <p className="text-gray-700">
                                With over 15 years in the industry, we've developed expertise in handling all types of fabrics and
                                stains, ensuring your clothes receive the best possible care.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className="flex space-x-4 bg-gray-100 p-5 rounded-xl shadow-sm" variants={itemVariants}>
                        <div className="bg-blue-100 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                            <Shield className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                            <p className="text-gray-700">
                                We stand behind our work with a complete satisfaction guarantee. If you're not happy with our service,
                                we'll make it right—no questions asked.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className="flex space-x-4 bg-gray-100 p-5 rounded-xl shadow-sm" variants={itemVariants}>
                        <div className="bg-blue-100 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                            <Users className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Trained Professional Staff</h3>
                            <p className="text-gray-700">
                                Our team consists of skilled professionals who are trained in the latest cleaning techniques and fabric
                                care methods to provide exceptional service.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className="flex space-x-4 bg-gray-100 p-5 rounded-xl shadow-sm" variants={itemVariants}>
                        <div className="bg-blue-100 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                            <Leaf className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Conscious Cleaning</h3>
                            <p className="text-gray-700">
                                We use environmentally friendly cleaning products and processes that are gentle on your clothes and the
                                planet, without compromising on quality.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
                className="bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                        className="text-center text-white"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
                            Experience Premium Laundry Service Today
                        </motion.h2>
                        <motion.p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" variants={itemVariants}>
                            Join thousands of satisfied customers who trust us with their laundry needs.
                        </motion.p>
                        <motion.button
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Your First Pickup
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
