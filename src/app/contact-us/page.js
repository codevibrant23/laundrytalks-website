"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Phone,
    MapPin,
    Clock,
    Send,
    Mail,
    Calendar,
    ArrowRight,
    ChevronDown,
    CheckCircle,
    Headphones,
} from "lucide-react"
import Testimonials from "@/components/dashboard/Testimonial"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    const [activeCard, setActiveCard] = useState(null)
    const [openFaq, setOpenFaq] = useState(null)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            subtitle: "Speak directly with our team",
            info: "+ 91 92050 32800",
            action: "Call Now",
            color: "bg-blue-500",
        },
        {
            icon: Mail,
            title: "Email Support",
            subtitle: "Get detailed assistance",
            info: "info@laundrytalks.in",
            action: "Send Email",
            color: "bg-green-500",
        },
        // {
        //     icon: Calendar,
        //     title: "Schedule Pickup",
        //     subtitle: "Book your service online",
        //     info: "Next available: Today",
        //     action: "Book Now",
        //     color: "bg-purple-500",
        // },
    ]

    const locations = [
        {
            name: "Plant",
            address: "A 48, Block A, Sector 64, Noida, Uttar Pradesh 201309",
            phone: "+ 91 92050 32800",
            hours: "Mon-Sat: 10AM-10PM",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6218115252777!2d77.37485337509483!3d28.6111202850534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5dd88f67d81%3A0x1ddcc0762270da5d!2sLaundry%20Talks%20Private%20Limited!5e0!3m2!1sen!2sin!4v1753812797778!5m2!1sen!2sin",
        },
        {
            name: "Indirapuram Branch",
            address: "Jaipuriya Sun Rise Plaza, SC-152, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
            phone: "+ 91 92050 32800",
            hours: "Mon-Sat: 10AM-10PM",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6293988086923!2d77.37398247509591!3d28.6408673837028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb90a0f120af%3A0xc055df32a4a0231c!2sLaundry%20Talks%20-%20Indirapuram!5e0!3m2!1sen!2sin!4v1753812844213!5m2!1sen!2sin",
        },
    ]

    const faqs = [
        {
            question: "How quickly can you pick up my laundry?",
            answer:
                "We offer same-day pickup for orders placed before 2 PM. Next-day pickup is guaranteed for all orders. Our team works around your schedule to ensure maximum convenience.",
        },
        {
            question: "What areas do you service?",
            answer:
                "We currently service Manhattan, Brooklyn, and Queens with plans to expand to the Bronx and Staten Island soon. Our coverage area is constantly growing based on customer demand.",
        },
        {
            question: "Do you handle special care items?",
            answer:
                "Yes! We specialize in delicate fabrics, designer clothing, wedding dresses, suits, and items requiring special attention. Our expert team is trained in handling luxury and sensitive materials.",
        },
        {
            question: "What if I'm not satisfied with the service?",
            answer:
                "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of our service, we'll re-clean your items for free or provide a full refund. Your satisfaction is our top priority.",
        },
        {
            question: "How do you ensure the safety of my clothes?",
            answer:
                "We use eco-friendly cleaning products, state-of-the-art equipment, and have comprehensive insurance coverage. Each item is tagged and tracked throughout the entire process for maximum security.",
        },
        {
            question: "What are your pricing options?",
            answer:
                "We offer flexible pricing including per-pound rates, monthly subscriptions, and custom packages for businesses. Contact us for a personalized quote based on your specific needs.",
        },
    ]

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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Gradient Background */}
            <motion.div
                className="bg-gradient-to-b from-blue-400 to-[#1D7BB3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" variants={itemVariants}>
                            Contact <span className="text-blue-100">Us</span>
                        </motion.h1>
                        <motion.p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8" variants={itemVariants}>
                            Ready to experience premium laundry service? We're here to answer your questions, schedule your pickup,
                            and provide the best laundry care in the city.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
                            <motion.button
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 group shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar size={20} />
                                <span>Book Pickup Now</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone size={20} className="inline mr-2" />
                                Call (+91) 9205032800
                            </motion.button>
                        </motion.div>
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Contact Form and Methods Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* Contact Form - Takes 2 columns */}
                    <motion.div
                        className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-600">
                                Fill out the form below and we'll get back to you within 2 hours during business hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select a service</option>
                                    <option value="pickup-delivery">Pickup & Delivery</option>
                                    <option value="dry-cleaning">Dry Cleaning</option>
                                    <option value="wash-fold">Wash & Fold</option>
                                    <option value="commercial">Commercial Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your laundry needs or ask any questions..."
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Methods - Takes 1 column */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Way</h2>
                            <p className="text-gray-600">Multiple ways to reach us for your convenience</p>
                        </div>

                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon
                                return (
                                    <motion.div
                                        key={index}
                                        className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer ${activeCard === index ? "ring-2 ring-blue-500 ring-opacity-50 transform scale-105" : ""
                                            }`}
                                        variants={cardVariants}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                        whileHover={{ y: -3 }}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-xl ${method.color} text-white`}>
                                                <IconComponent size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-semibold text-gray-900 ">{method.title}</h5>
                                                <p className="text-gray-600 text-sm">{method.subtitle}</p>
                                                <p className="text-blue-600 font-medium text-sm">{method.info}</p>
                                            </div>
                                        </div>
                                        <button className="w-full mt-4 bg-gradient-to-br from-blue-400 to-[#1D7BB3] text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                                            {method.action}
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Quick Info Card */}
                        <motion.div
                            className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <Headphones className="text-blue-500" size={24} />
                                <h5 className="font-semibold text-gray-900">Business Hours</h5>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium">7:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday - Sunday</span>
                                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <p className="text-xs text-blue-800">
                                    <CheckCircle size={14} className="inline mr-1" />
                                    <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Testimonials Carousel Section - Self-contained */}
                <Testimonials />

                {/* FAQ Accordion Section */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
                    </div>
                    <motion.div
                        className="max-w-4xl mx-auto space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                                variants={itemVariants}
                            >
                                <motion.button
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleFaq(index)}
                                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                                >
                                    <h5 className="font-medium text-gray-900 pr-4">{faq.question}</h5>
                                    <motion.div
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown size={20} className="text-blue-500" />
                                    </motion.div>
                                </motion.button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-2">
                                                <motion.p
                                                    initial={{ y: -10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2, delay: 0.1 }}
                                                    className="text-gray-600 leading-relaxed"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Locations with Maps */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Locations</h2>
                        <p className="text-gray-600 text-lg">Two convenient locations to serve you better</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="h-64 relative">
                                    <iframe
                                        src={location.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-t-2xl"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex items-start space-x-2">
                                            <MapPin size={16} className="mt-1 text-blue-500" />
                                            <span>{location.address}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone size={16} className="text-blue-500" />
                                            <span>{location.phone}</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Clock size={16} className="mt-1 text-blue-500" />
                                            <span>{location.hours}</span>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full bg-blue-500 text-white py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors">
                                        Get Directions
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        className="text-center text-white"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
                            Ready to Experience Premium Laundry Service?
                        </motion.h2>
                        <motion.p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" variants={itemVariants}>
                            Join thousands of satisfied customers who trust us with their laundry. Book your first pickup today and
                            get 20% off!
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
                            <motion.button
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar size={20} />
                                <span>Book Pickup Now</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Call (555) 123-4567
                            </motion.button>
                        </motion.div>
                        <motion.p className="mt-6 text-blue-100 text-sm" variants={itemVariants}>
                            ✨ Free pickup and delivery • Same-day service available • 100% satisfaction guarantee
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
