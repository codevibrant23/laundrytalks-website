"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfterSlider({
    beforeImage = "/images/IMG_2973.webp",
    afterImage = "/images/IMG_2974.webp",
    beforeLabel = "Before",
    afterLabel = "After",
    className = "",
}) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef(null)
    const sliderRef = useRef(null)

    // Calculate slider position based on mouse/touch position
    const calculatePosition = useCallback((clientX) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setSliderPosition(percentage)
    }, [])

    // Mouse event handlers
    const handleMouseDown = useCallback(
        (e) => {
            setIsDragging(true)
            calculatePosition(e.clientX)
            e.preventDefault()
        },
        [calculatePosition],
    )

    const handleMouseMove = useCallback(
        (e) => {
            if (!isDragging) return
            calculatePosition(e.clientX)
            e.preventDefault()
        },
        [isDragging, calculatePosition],
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    // Touch event handlers
    const handleTouchStart = useCallback(
        (e) => {
            setIsDragging(true)
            calculatePosition(e.touches[0].clientX)
            e.preventDefault()
        },
        [calculatePosition],
    )

    const handleTouchMove = useCallback(
        (e) => {
            if (!isDragging) return
            calculatePosition(e.touches[0].clientX)
            e.preventDefault()
        },
        [isDragging, calculatePosition],
    )

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false)
    }, [])

    // Container click handler
    const handleContainerClick = useCallback(
        (e) => {
            if (isDragging) return
            calculatePosition(e.clientX)
        },
        [isDragging, calculatePosition],
    )

    // Add global event listeners
    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
            document.addEventListener("touchmove", handleTouchMove, { passive: false })
            document.addEventListener("touchend", handleTouchEnd)

            // Prevent text selection while dragging
            document.body.style.userSelect = "none"
            document.body.style.webkitUserSelect = "none"
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)

            // Restore text selection
            document.body.style.userSelect = ""
            document.body.style.webkitUserSelect = ""
        }
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

    // Keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === "ArrowLeft") {
            setSliderPosition((prev) => Math.max(0, prev - 5))
            e.preventDefault()
        } else if (e.key === "ArrowRight") {
            setSliderPosition((prev) => Math.min(100, prev + 5))
            e.preventDefault()
        }
    }, [])

    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[4/3] cursor-col-resize select-none"
                ref={containerRef}
                onClick={handleContainerClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="slider"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Before and after comparison slider"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Before Image (Background) */}
                <div className="absolute inset-0">
                    <Image
                        src={beforeImage || "/placeholder.svg"}
                        alt="Before image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    {/* Before Label */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {beforeLabel}
                    </div>
                </div>

                {/* After Image (Foreground with clip) */}
                <div
                    className="absolute inset-0 transition-all duration-100 ease-out"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                >
                    <Image
                        src={afterImage || "/placeholder.svg"}
                        alt="After image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    {/* After Label */}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {afterLabel}
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10 transition-all duration-100 ease-out"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    {/* Handle Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform">
                        <div className="flex items-center space-x-0.5">
                            <ChevronLeft size={12} className="text-gray-600" />
                            <ChevronRight size={12} className="text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Loading overlay */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ display: "none" }} />
            </motion.div>

            {/* Instructions */}
            {/* <motion.div
                className="mt-4 text-center text-gray-600 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>Drag the slider or click anywhere to compare • Use arrow keys for precise control</p>
            </motion.div> */}
        </div>
    )
}
