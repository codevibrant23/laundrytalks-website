"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pickupLocation: "",
        time: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Contact form submitted:", formData)
        // Add form submission logic here (e.g., API call)
        alert("Thank you for your inquiry! We will get back to you soon.")
        setFormData({ name: "", phone: "", pickupLocation: "", time: "" }) // Clear form
    }

    return (
        <section id="contact" className=" bg-white w-[90%] rounded-2xl" aria-labelledby="contact-heading">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    id="contact-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
                >
                    Get in Touch
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <Phone className="w-8 h-8 text-blue-600 mb-2" aria-hidden="true" />
                            <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                            <p className="text-gray-700">+91 98765 43210</p>
                            <Button asChild className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3">
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                    <MessageSquareText className="w-5 h-5 mr-2" aria-hidden="true" /> WhatsApp Us
                                </a>
                            </Button>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <Mail className="w-8 h-8 text-blue-600 mb-2" aria-hidden="true" />
                            <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                            <p className="text-gray-700">info@pickupservice.com</p>
                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">
                                <a href="mailto:info@pickupservice.com">Send Email</a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-100 p-8 rounded-lg shadow-md"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Service</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
                            <div>
                                <Label htmlFor="name" className="text-gray-700">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-700">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="pickupLocation" className="text-gray-700">
                                    Pickup Location
                                </Label>
                                <Textarea
                                    id="pickupLocation"
                                    placeholder="Your Full Address"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 min-h-[80px]"
                                />
                            </div>
                            <div>
                                <Label htmlFor="time" className="text-gray-700">
                                    Preferred Pickup Time
                                </Label>
                                <Input
                                    id="time"
                                    type="text"
                                    placeholder="e.g., Tomorrow 10 AM - 12 PM"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="mt-1"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-semibold transition-colors"
                            >
                                Submit Request
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
