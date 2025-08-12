"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials({
    title = "What Our Customers Say",
    subtitle = "Real feedback from our valued customers",
    autoplayDelay = 4000,
}) {
    // Reduced to 6 testimonials
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Busy Professional",
            location: "Manhattan, NY",
            content:
                "Laundry Talks has been a game-changer for my hectic schedule. Their pickup service is always on time and the quality is exceptional!",
            rating: 5,
        },
        {
            name: "Mike Chen",
            role: "Restaurant Owner",
            location: "Brooklyn, NY",
            content:
                "Outstanding quality and customer service. They handle our restaurant uniforms perfectly every time. The stain removal is incredible.",
            rating: 5,
        },
        {
            name: "Emily Davis",
            role: "Working Mom",
            location: "Queens, NY",
            content:
                "The convenience and quality are unmatched. I can't imagine going back to doing laundry myself. Worth every penny!",
            rating: 5,
        },
        {
            name: "David Rodriguez",
            role: "Corporate Executive",
            location: "Manhattan, NY",
            content:
                "Professional service that fits my demanding schedule. My suits and dress shirts are always perfectly pressed and ready.",
            rating: 5,
        },
        {
            name: "Lisa Thompson",
            role: "Fitness Instructor",
            location: "Brooklyn, NY",
            content:
                "They handle my workout clothes amazingly well. No more lingering odors or stains. The eco-friendly products are perfect.",
            rating: 5,
        },
        {
            name: "James Wilson",
            role: "College Student",
            location: "Manhattan, NY",
            content:
                "Affordable and reliable service for students. The pickup and delivery system works perfectly with my class schedule.",
            rating: 5,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoplay, setIsAutoplay] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(3)

    const containerRef = useRef(null)
    const autoplayRef = useRef(null)

    // Calculate max slides that can be shown
    const getMaxIndex = () => {
        return Math.max(0, testimonials.length - itemsPerView)
    }

    // Responsive items per view
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2)
            } else {
                setItemsPerView(3)
            }
        }

        updateItemsPerView()
        window.addEventListener("resize", updateItemsPerView)
        return () => window.removeEventListener("resize", updateItemsPerView)
    }, [])

    // Reset current index if it exceeds max when itemsPerView changes
    useEffect(() => {
        const maxIndex = getMaxIndex()
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [itemsPerView, currentIndex])

    // Autoplay functionality
    useEffect(() => {
        if (isAutoplay && !isDragging) {
            autoplayRef.current = setInterval(() => {
                setCurrentIndex((prev) => {
                    const maxIndex = getMaxIndex()
                    return prev >= maxIndex ? 0 : prev + 1
                })
            }, autoplayDelay)
        }

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current)
            }
        }
    }, [isAutoplay, isDragging, itemsPerView, autoplayDelay])

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setIsAutoplay(false)
        setDragStart(e.clientX)
        e.preventDefault()
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        const diff = e.clientX - dragStart
        setDragOffset(diff)
    }

    const handleMouseUp = () => {
        if (!isDragging) return

        const threshold = 50
        const maxIndex = getMaxIndex()

        if (Math.abs(dragOffset) > threshold) {
            if (dragOffset > 0 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1)
            } else if (dragOffset < 0 && currentIndex < maxIndex) {
                setCurrentIndex(currentIndex + 1)
            }
        }

        setIsDragging(false)
        setDragOffset(0)
        setTimeout(() => setIsAutoplay(true), 2000)
    }

    // Touch handlers - IMPROVED
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setIsAutoplay(false)
        setDragStart(e.touches[0].clientX)
        // Prevent default to avoid iOS bounce/scroll issues
        e.preventDefault()
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const diff = e.touches[0].clientX - dragStart
        setDragOffset(diff)
        // Prevent default to stop page scrolling during horizontal drag
        e.preventDefault()
    }

    const handleTouchEnd = (e) => {
        handleMouseUp()
        // Prevent default to avoid tap events
        e.preventDefault()
    }

    // Navigation functions
    const goToPrevious = () => {
        setIsAutoplay(false)
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : getMaxIndex()))
        setTimeout(() => setIsAutoplay(true), 3000)
    }

    const goToNext = () => {
        setIsAutoplay(false)
        const maxIndex = getMaxIndex()
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
        setTimeout(() => setIsAutoplay(true), 3000)
    }

    const goToSlide = (index) => {
        setIsAutoplay(false)
        const maxIndex = getMaxIndex()
        setCurrentIndex(Math.min(index, maxIndex))
        setTimeout(() => setIsAutoplay(true), 3000)
    }

    // Calculate transform - Simplified and fixed
    const getTransform = () => {
        const maxIndex = getMaxIndex()
        const safeIndex = Math.min(Math.max(0, currentIndex), maxIndex)
        const slideWidth = 100 / itemsPerView
        const baseTransform = -(safeIndex * slideWidth)

        // Add drag offset only if dragging
        let dragTransform = 0
        if (isDragging && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            dragTransform = (dragOffset / containerWidth) * slideWidth
        }

        return `translateX(${baseTransform + dragTransform}%)`
    }

    // Calculate number of dots needed
    const totalDots = getMaxIndex() + 1

    return (
        <motion.div
            className="py-16 overflow-hidden" // ADDED overflow-hidden
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
            </div>

            {/* IMPROVED: Added overflow-hidden and proper mobile padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Carousel Container */}
                <div className="relative overflow-hidden"> {/* ADDED overflow-hidden */}
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
                    >
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
                    >
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>

                    {/* MOBILE NAVIGATION ARROWS */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 md:hidden flex items-center justify-center"
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft size={16} className="text-gray-600" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 md:hidden flex items-center justify-center"
                        disabled={currentIndex === getMaxIndex()}
                    >
                        <ChevronRight size={16} className="text-gray-600" />
                    </button>

                    {/* IMPROVED: Carousel Track with better mobile handling */}
                    <div
                        ref={containerRef}
                        className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y" // ADDED touch-pan-y
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={() => setIsAutoplay(false)}
                        onMouseLeave={() => !isDragging && setTimeout(() => setIsAutoplay(true), 1000)}
                        // ADDED: Prevent context menu on long press (mobile)
                        onContextMenu={(e) => e.preventDefault()}
                        style={{ touchAction: 'pan-y' }} // ADDED: Allow vertical scrolling only
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: getTransform(),
                                width: "100%",
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-2 md:px-3" // REDUCED mobile padding
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <motion.div
                                        className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group h-full" // REDUCED mobile padding
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Quote Icon */}
                                        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Quote size={32} className="text-blue-500 md:w-10 md:h-10" /> {/* SMALLER on mobile */}
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                                >
                                                    <Star className="text-yellow-400 fill-current" size={16} /> {/* SMALLER stars */}
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base"> {/* SMALLER text on mobile */}
                                            "{testimonial.content}"
                                        </p>

                                        {/* Customer Info */}
                                        <div className="flex items-center space-x-3 mt-auto">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-lg"> {/* SMALLER avatar */}
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                                                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                                                {testimonial.location && <p className="text-xs text-gray-400">{testimonial.location}</p>}
                                            </div>
                                        </div>

                                        {/* Hover Effect Border - DISABLED on mobile */}
                                        <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block"></div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots Navigation */}
                {/* {totalDots > 1 && (
                    <div className="flex justify-center mt-6 md:mt-8 space-x-2"> 
                        {Array.from({ length: totalDots }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? "bg-blue-500 scale-125" 
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`} 
                            />
                        ))}
                    </div>
                )} */}
            </div>
        </motion.div>
    )
}
