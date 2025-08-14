"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
    Shirt,
    Clock,
    Sparkles,
    Sofa,
    ShoppingBag,
    Phone,
    MapPin,
    CheckCircle,
    Calendar,
    Truck,
    ArrowRight,
    ChevronRight,
} from "lucide-react"
import Testimonials from "@/components/dashboard/Testimonial"

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("dry-cleaning")

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

    const services = [
        {
            id: "dry-cleaning",
            icon: Shirt,
            title: "Dry Cleaning",
            description: "Gentle care for your suits, sarees, blazers, and delicate garments. Perfect for premium fabrics.",
            features: ["Premium fabric care", "Stain removal", "Professional pressing"],
            image: "/media/1.jpg",
        },
        {
            id: "premium-laundry",
            icon: Sparkles,
            title: "Premium Laundry",
            description: "Steam ironing, fabric-safe detergents, and softener treatment — just like 5-star hotel care.",
            features: ["Steam ironing", "Fabric softener", "Hotel-quality service"],
            image: "/media/2.jpg",
        },
        {
            id: "express-laundry",
            icon: Clock,
            title: "Express Laundry",
            description: "Need fresh clothes urgently? Get them cleaned, dried, and delivered within 24 hours.",
            features: ["24-hour delivery", "Rush service", "Same-day pickup"],
            image: "/media/3.jpg",
        },
        {
            id: "carpet-cleaning",
            icon: Sofa,
            title: "Carpet Cleaning",
            description: "We deep-clean carpets using industrial-grade machines — removing stains, dust, and odors.",
            features: ["Deep cleaning", "Stain removal", "Odor elimination"],
            image: "/media/7.jpg",
        },
        {
            id: "sofa-cleaning",
            icon: Sofa,
            title: "Sofa Cleaning",
            description: "On-site sofa shampooing and vacuuming with zero damage to upholstery.",
            features: ["On-site service", "Upholstery care", "Zero damage guarantee"],
            image: "/media/4.jpg",
        },
        {
            id: "shoe-cleaning",
            icon: ShoppingBag,
            title: "Shoe Cleaning",
            description: "Restore your favorite sneakers, boots, or leather shoes to like-new condition.",
            features: ["All shoe types", "Leather care", "Like-new restoration"],
            image: "/images/IMG_2979.webp",
        },
    ]

    const activeService = services.find((service) => service.id === activeTab)

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.div
                className="bg-gradient-to-b from-blue-400 to-[#1D7BB3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full opacity-20"></div>
                        {/* <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div> */}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                            <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-6" variants={itemVariants}>
                                Professional Laundry & Cleaning Services
                            </motion.h1>
                            <motion.p className="text-xl text-blue-100 mb-8" variants={itemVariants}>
                                At Laundry Talks, we're dedicated to creating a spotless world. Whether you're looking for dry cleaning,
                                express laundry, or deep cleaning for carpets and sofas — we've got you covered.
                            </motion.p>
                            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                                <motion.a
                                    href="tel:+919205032800"
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Phone size={20} />
                                    <span>Call +91 92050 32800</span>
                                </motion.a>
                                <motion.button
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Now
                                </motion.button>
                            </motion.div>
                            <motion.div
                                className="mt-8 bg-blue-700 bg-opacity-30 rounded-xl p-4 border border-blue-400 border-opacity-30"
                                variants={itemVariants}
                            >
                                <div className="flex items-center space-x-2 text-blue-100">
                                    <CheckCircle size={16} />
                                    <span>Free pickup & delivery on orders above ₹300</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hidden md:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Image
                                src="/media/3.jpg"
                                alt="Premium laundry services"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
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

            {/* Featured Service Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Laundry Services</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Explore our wide range of affordable laundry solutions designed to meet all your cleaning needs.
                    </p>
                </motion.div>

                {/* Service Tabs */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <button
                                key={service.id}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === service.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveTab(service.id)}
                            >
                                <IconComponent size={16} />
                                <span>{service.title}</span>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Active Service Display */}
                {activeService && (
                    <motion.div
                        key={activeService.id}
                        className="grid md:grid-cols-2 gap-8 items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
                            <p className="text-gray-700 mb-6">{activeService.description}</p>
                            <ul className="space-y-3 mb-8">
                                {activeService.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                                        <div className="bg-blue-100 p-1 rounded-full">
                                            <CheckCircle className="text-blue-600" size={16} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors group">
                                <span>Book this service</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
                            <Image
                                src={activeService.image || "/placeholder.svg"}
                                alt={activeService.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                )}

                {/* Service Grid */}
                <div className="mt-20">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {services.slice(0, 3).map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                                    <div className="relative h-64">
                                        <Image
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={50}
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                <IconComponent className="text-blue-600" size={18} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                        </div>
                                        <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                                        <div className="mt-4 flex items-center text-blue-300 text-sm font-medium">
                                            <span>Learn more</span>
                                            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Our simple 4-step process ensures your clothes get the best care from pickup to delivery.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline Lines */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
                        <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-200 md:hidden"></div>

                        {/* Step 1 */}
                        <div className="relative z-10">
                            <motion.div
                                className="flex flex-col md:flex-row items-center mb-8 md:mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                                    <div className="p-6 rounded-2xl  inline-block ml-12 md:ml-0">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">1. Schedule Pickup</h3>
                                        <p className="text-gray-700">Call or WhatsApp us at +91 92050 32800</p>
                                    </div>
                                </div>
                                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center z-20 absolute left-0 md:relative md:left-auto md:mx-0">
                                    <Phone className="text-white" size={20} />
                                </div>
                                <div className="md:w-1/2 md:pl-12 md:text-left w-full">
                                    <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mt-4 md:mt-0 ml-12 md:ml-0">
                                        <Image
                                            src="/schedulepickup1.jpg"
                                            alt="Schedule your laundry pickup"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 - Fixed mobile visibility */}
                            <motion.div
                                className="flex flex-col md:flex-row items-center mb-8 md:mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile: Show content first, then image */}
                                <div className="block md:hidden w-full mb-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm inline-block ml-12">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">2. We Collect</h3>
                                        <p className="text-gray-700">Doorstep pickup at your convenience</p>
                                    </div>
                                </div>

                                {/* Mobile: Show image */}
                                <div className="block md:hidden w-full mb-4">
                                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg ml-12">
                                        <Image
                                            src="/wecollect1.jpg"
                                            alt="We collect your laundry"
                                            fill
                                            sizes="100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Desktop layout */}
                                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/wecollect1.jpg"
                                            alt="We collect your laundry"
                                            fill
                                            sizes="50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center z-20 absolute left-0 md:relative md:left-auto md:mx-0">
                                    <Truck className="text-white" size={20} />
                                </div>

                                <div className="hidden md:block md:w-1/2 md:pl-12 md:text-left">
                                    <div className=" p-6 rounded-2xl inline-block">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">2. We Collect</h3>
                                        <p className="text-gray-700">Doorstep pickup at your convenience</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                className="flex flex-col md:flex-row items-center mb-8 md:mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                                    <div className=" p-6 rounded-2xl inline-block ml-12 md:ml-0">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">3. Professional Cleaning</h3>
                                        <p className="text-gray-700">Handled with care using advanced machines</p>
                                    </div>
                                </div>
                                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center z-20 absolute left-0 md:relative md:left-auto md:mx-0">
                                    <Sparkles className="text-white" size={20} />
                                </div>
                                <div className="md:w-1/2 md:pl-12 md:text-left w-full">
                                    <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mt-4 md:mt-0 ml-12 md:ml-0">
                                        <Image
                                            src="/media/1.jpg"
                                            alt="Professional cleaning process"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 4 - Fixed mobile visibility */}
                            <motion.div
                                className="flex flex-col md:flex-row items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile: Show content first, then image */}
                                <div className="block md:hidden w-full mb-4">
                                    <div className=" p-6 rounded-2xl inline-block ml-12">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">4. Delivery to Your Door</h3>
                                        <p className="text-gray-700">Get your clothes fresh, folded, and on time</p>
                                    </div>
                                </div>

                                {/* Mobile: Show image */}
                                <div className="block md:hidden w-full">
                                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg ml-12">
                                        <Image
                                            src="/deliverytoyourdoor1.jpg"
                                            alt="Delivery to your door"
                                            fill
                                            sizes="100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Desktop layout */}
                                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/deliverytoyourdoor1.jpg"
                                            alt="Delivery to your door"
                                            fill
                                            sizes="50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center z-20 absolute left-0 md:relative md:left-auto md:mx-0">
                                    <Truck className="text-white" size={20} />
                                </div>

                                <div className="hidden md:block md:w-1/2 md:pl-12 md:text-left">
                                    <div className=" p-6 rounded-2xl inline-block">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">4. Delivery to Your Door</h3>
                                        <p className="text-gray-700">Get your clothes fresh, folded, and on time</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>



            {/* Service Areas Section */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
                        <p className="text-gray-700 mb-8">
                            We proudly serve homes, hostels, PGs, and offices across Noida, Delhi NCR, and nearby areas.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-full mt-1">
                                    <MapPin className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Noida</h3>
                                    <p className="text-gray-700">All sectors covered including residential and commercial areas</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-full mt-1">
                                    <MapPin className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Delhi NCR</h3>
                                    <p className="text-gray-700">Major areas with convenient pickup and delivery options</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-full mt-1">
                                    <MapPin className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Nearby Areas</h3>
                                    <p className="text-gray-700">Ghaziabad, Faridabad and surrounding localities</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-blue-800 font-medium">
                                Not sure if we service your area? Call us at +91 92050 32800 to confirm!
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/placeholder.svg?height=800&width=800&text=Service+Areas+Map"
                            alt="Our service areas map"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div> */}

            {/* Testimonials Section - Placeholder for their component */}
            {/* <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Don't just take our word for it - hear from our satisfied customers across Noida and Delhi NCR.
                        </p>
                    </motion.div> */}

            {/* Placeholder for Testimonials Component */}
            {/* <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <p className="text-gray-700 mb-4">
                            This is where your testimonials component will be placed. It should include customer images and reviews.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Customer Image 1</p>
                            </div>
                            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Customer Image 2</p>
                            </div>
                            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Customer Image 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-gray-50">
                <Testimonials />

            </div>
            {/* CTA Section */}
            <motion.div
                className="relative bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
                    <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-400 rounded-full opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-3">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Ready for Premium Laundry Service?
                            </motion.h2>
                            <motion.p
                                className="text-xl text-blue-100 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                Experience the convenience of professional laundry service with free pickup and delivery on orders above
                                ₹300.
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-2 bg-blue-700 bg-opacity-30 px-4 py-2 rounded-lg">
                                    <CheckCircle className="text-blue-100" size={16} />
                                    <span className="text-blue-100">Free pickup & delivery</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-blue-700 bg-opacity-30 px-4 py-2 rounded-lg">
                                    <CheckCircle className="text-blue-100" size={16} />
                                    <span className="text-blue-100">24-hour express service</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-blue-700 bg-opacity-30 px-4 py-2 rounded-lg">
                                    <CheckCircle className="text-blue-100" size={16} />
                                    <span className="text-blue-100">100% satisfaction guarantee</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Pickup</h3>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+919205032800"
                                        className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                                    >
                                        <Phone size={20} />
                                        <span>Call +91 92050 32800</span>
                                    </a>
                                    <a
                                        href="https://wa.me/919205032800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white py-3 px-4 rounded-xl hover:bg-green-600 transition-colors"
                                    >
                                        <span>WhatsApp Us</span>
                                    </a>
                                    <button className="flex items-center justify-center space-x-2 w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors">
                                        <Calendar size={20} />
                                        <span>Schedule Online</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
