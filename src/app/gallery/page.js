"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Gallery images with placeholder images
    const galleryImages = [
        {
            id: 1,
            image: "/images/IMG_2969.webp",
        },
        {
            id: 2,
            image: "/images/IMG_2970.webp",
        },
        {
            id: 3,
            image: "/images/IMG_2971.webp",
        },
        {
            id: 4,
            image: "/images/IMG_2972.webp",
        },
        {
            id: 5,
            image: "/images/IMG_2973.webp",
        },
        {
            id: 6,
            image: "/images/IMG_2974.webp",
        },
        {
            id: 7,
            image: "/images/IMG_2975.webp",
        },
        {
            id: 8,
            image: "/images/IMG_2976.webp",
        },
        {
            id: 9,
            image: "/images/IMG_2977.webp",
        },
        {
            id: 10,
            image: "/images/IMG_2978.webp",
        },
        {
            id: 11,
            image: "/images/IMG_2979.webp",
        },
        {
            id: 12,
            image: "/images/IMG_2980.webp",
        },
        {
            id: 13,
            image: "/images/IMG_2981.webp",
        },
        {
            id: 14,
            image: "/images/IMG_2982.webp",
        },
    ];


    // Open lightbox
    const openLightbox = (index) => {
        setSelectedImage(galleryImages[index])
        setCurrentImageIndex(index)
    }

    // Close lightbox
    const closeLightbox = () => {
        setSelectedImage(null)
    }

    // Navigate in lightbox
    const navigateLightbox = (direction) => {
        const newIndex =
            direction === "next"
                ? (currentImageIndex + 1) % galleryImages.length
                : (currentImageIndex - 1 + galleryImages.length) % galleryImages.length

        setCurrentImageIndex(newIndex)
        setSelectedImage(galleryImages[newIndex])
    }

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!selectedImage) return

        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") navigateLightbox("next")
        if (e.key === "ArrowLeft") navigateLightbox("prev")
    }

    return (
        <div className="min-h-screen bg-gray-50" onKeyDown={handleKeyDown} tabIndex="0">
            {/* Hero Section */}
            <motion.div
                className="bg-gradient-to-b from-blue-400 to-[#1D7BB3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
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

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => openLightbox(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Image
                                src={image.image || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                quality={95}
                                priority={index < 6} // Prioritize first 6 images for faster loading
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative max-w-5xl max-h-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                                aria-label="Close"
                            >
                                <X className="text-black" size={24} />
                            </button>

                            {/* Navigation Buttons */}
                            {/* <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    navigateLightbox("prev")
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="text-black" size={24} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    navigateLightbox("next")
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight className="text-black" size={24} />
                            </button> */}

                            {/* Lightbox Image */}
                            <div className="relative w-full max-w-5xl max-h-[90vh]">
                                <Image
                                    src={selectedImage.image || "/placeholder.svg"}
                                    alt={selectedImage.alt}
                                    width={1200}
                                    height={800}
                                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                    quality={100}
                                    priority
                                    sizes="90vw"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
