"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Shirt, Users, Baby, ShoppingBag, Home, ChevronDown, ChevronUp } from "lucide-react"

const pricingData = {
    "Women's Wear": [
        { item: "STOLE /DUPATTA REGULAR", rate: 125 },
        { item: "DUPATTA WITH WORK", rate: 225 },
        { item: "BLOUSE", rate: 125 },
        { item: "BLOUSE WITH WORK", rate: 175 },
        { item: "TOP", rate: 125 },
        { item: "TOP WITH WORK", rate: 199 },
        { item: "KURTI/KAMEEZ", rate: 150 },
        { item: "KURTI /KAMEEZ - LONG", rate: 199 },
        { item: "KURTI /KAMEEZ WITH WORK", rate: 249 },
        { item: "PYJAMA / SALWAR / LEGGING", rate: 125 },
        { item: "LEHANGA - NORMAL", rate: 399 },
        { item: "LEHANGA - MEDIUM", rate: 599 },
        { item: "LEHANGA - HEAVY", rate: 799 },
        { item: "GHAGHRA - NORMAL", rate: 229 },
        { item: "GHAGHRA - HEAVY", rate: 349 },
        { item: "GHAGHRA TOP", rate: 179 },
        { item: "SAREE - COTTON", rate: 149 },
        { item: "SAREE - CHIFFON", rate: 224 },
        { item: "SAREE - GEORGETTE", rate: 249 },
        { item: "SAREE - SILK", rate: 319 },
        { item: "SAREE - CREPE SILK", rate: 399 },
        { item: "NIGHT DRESS - 1Pc", rate: 169 },
        { item: "NIGHT DRESS - 2Pc", rate: 229 },
        { item: "GOWN", rate: 399 },
        { item: "CARDIGAN / PULLOVER", rate: 229 },
        { item: "SHAWL - REGULAR", rate: 239 },
        { item: "SHAWL - SILK / WOOL", rate: 339 },
    ],
    "Men's Wear": [
        { item: "SHIRT", rate: 135 },
        { item: "SHIRT (DESIGNER / PREMIUM)", rate: 195 },
        { item: "T-SHIRT", rate: 125 },
        { item: "T-SHIRT (PREMIUM)", rate: 185 },
        { item: "TROUSERS / JEANS", rate: 169 },
        { item: "TRACK PANT", rate: 149 },
        { item: "TRACK PANT (WOOLEN)", rate: 169 },
        { item: "KURTA - COTTON", rate: 159 },
        { item: "KURTA - SILK", rate: 229 },
        { item: "PYJAMA - COTTON", rate: 125 },
        { item: "PYJAMA - SILK", rate: 179 },
        { item: "TIE", rate: 99 },
        { item: "BLAZER / COAT", rate: 345 },
        { item: "COAT - LONG", rate: 395 },
        { item: "JACKET - NORMAL", rate: 345 },
        { item: "JACKET- HEAVY", rate: 395 },
        { item: "SWEAT SHIRT", rate: 229 },
        { item: "SWEATER", rate: 279 },
        { item: "WAIST COAT", rate: 245 },
        { item: "SHERWANI - NORMAL", rate: 499 },
        { item: "SHERWANI - MEDIUM", rate: 699 },
        { item: "SHERWANI - HEAVY", rate: 899 },
    ],
    "Unisex Wear": [
        { item: "SOCKS", rate: 49 },
        { item: "CAP", rate: 79 },
        { item: "GLOVES", rate: 99 },
        { item: "UNDER LINEN", rate: 129 },
        { item: "HANDKERCHIEF", rate: 29 },
        { item: "LAPTOP BAG - NON-LEATHER", rate: 299 },
        { item: "LAPTOP BAG - LEATHER", rate: 999 },
        { item: "HAND BAG - SMALL", rate: 299 },
        { item: "HAND BAG - MEDIUM", rate: 399 },
        { item: "HAND BAG - LARGE", rate: 599 },
        { item: "BACK PACK", rate: 249 },
        { item: "SCHOOL BAG", rate: 249 },
        { item: "JACKET - LEATHER", rate: 999 },
    ],
    "Kid's Wear": [
        { item: "T-SHIRT", rate: 89 },
        { item: "SHIRT", rate: 99 },
        { item: "TROUSER / JEANS", rate: 139 },
        { item: "KIDS LOWER", rate: 79 },
        { item: "KIDS UPPER", rate: 79 },
        { item: "JACKET", rate: 229 },
        { item: "COAT", rate: 299 },
        { item: "FROCK - SMALL", rate: 129 },
        { item: "FROCK - MEDIUM", rate: 149 },
    ],
    "Shoe Cleaning": [
        { item: "SPORTS SHOE - NORMAL", rate: 499 },
        { item: "SPORTS SHOE - PREMIUM", rate: 599 },
        { item: "SPORTS SHOE - DLX", rate: 699 },
        { item: "SNEAKER - NORMAL", rate: 499 },
        { item: "SNEAKER - PREMIUM", rate: 599 },
        { item: "SNEAKER - DLX", rate: 699 },
        { item: "SUEDE SHOE - NORMAL", rate: 599 },
        { item: "SUEDE SHOE - PREMIUM", rate: 699 },
        { item: "SUEDE SHOE - DLX", rate: 799 },
        { item: "LEATHER SHOE - NORMAL", rate: 599 },
        { item: "LEATHER SHOE - PREMIUM", rate: 799 },
        { item: "SLIPPERS", rate: 399 },
        { item: "KID'S SHOE", rate: 249 },
    ],
    "Household Products": [
        { item: "SOFA FABRIC - PER SEAT", rate: 399 },
        { item: "SOFA SUEDE - PER SEAT", rate: 499 },
        { item: "SOFA COVER - PER SEAT", rate: 99 },
        { item: "CHAIR - WITHOUT BACK", rate: 199 },
        { item: "CHAIR - WITH BACK", rate: 299 },
        { item: "CURTAIN - PER PANEL", rate: 299 },
        { item: "CURTAIN - PER PANEL WITH LINING", rate: 349 },
        { item: "CARPET NORMAL - PER SQ. FT", rate: 40 },
        { item: "CARPET PREMIUM - PER SQ. FT", rate: 50 },
        { item: "HAND TOWEL", rate: 69 },
        { item: "BATH TOWEL", rate: 129 },
        { item: "BATHROBE", rate: 149 },
        { item: "PILLOW COVER - SMALL", rate: 99 },
        { item: "PILLOW COVER - MEDIUM", rate: 109 },
        { item: "PILLOW - SMALL", rate: 179 },
        { item: "PILLOW - MEDIUM", rate: 199 },
        { item: "BEDCOVER - SINGLE", rate: 149 },
        { item: "BEDCOVER - DOUBLE", rate: 209 },
        { item: "BED SHEET - SINGLE", rate: 149 },
        { item: "BED SHEET - DOUBLE", rate: 209 },
        { item: "BLANKET - SINGLE", rate: 375 },
        { item: "BLANKET - DOUBLE", rate: 475 },
        { item: "QUILT - SINGLE", rate: 395 },
        { item: "QUILT - DOUBLE", rate: 495 },
        { item: "SOFA COVER", rate: 149 },
        { item: "CUSHION COVER - MEDIUM", rate: 69 },
        { item: "TABLE CLOTH - MEDIUM", rate: 129 },
        { item: "TABLE MAT - MEDIUM", rate: 99 },
        { item: "TROLLEY BAG - SMALL", rate: 399 },
        { item: "TROLLEY BAG - MEDIUM", rate: 499 },
        { item: "TROLLEY BAG - LARGE", rate: 599 },
        { item: "SOFT TOY - SMALL", rate: 299 },
        { item: "SOFT TOY - MEDIUM", rate: 399 },
        { item: "SOFT TOY - LARGE", rate: 499 },
        { item: "SOFT TOY - FULL SIZE", rate: 599 },
        { item: "DOG BED", rate: 699 },
        { item: "PIANO/GUITAR COVER", rate: 699 },
    ],
}

const categoryIcons = {
    "Women's Wear": Users,
    "Men's Wear": Shirt,
    "Unisex Wear": ShoppingBag,
    "Kid's Wear": Baby,
    "Shoe Cleaning": ShoppingBag,
    "Household Products": Home,
}

const gstCategories = ["Shoe Cleaning", "Household Products"]

function CategoryCard({ category, items, isOpen, onToggle }) {
    const IconComponent = categoryIcons[category]
    const hasGST = gstCategories.includes(category)

    return (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div
                className="p-6 cursor-pointer flex items-center justify-between transition-all duration-200 hover:bg-blue-500/5"
                onClick={onToggle}
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <IconComponent size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-gray-800 m-0">{category}</h3>
                        <p className="text-sm text-gray-500 m-0">{items.length} items</p>
                        {hasGST && (
                            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wide max-w-fit">
                                GST 18% Extra
                            </span>
                        )}
                    </div>
                </div>
                <div className={`text-blue-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
            >
                <div className="mx-6 mb-6 rounded-xl overflow-hidden shadow-md">
                    <div className="grid grid-cols-[1fr_auto] bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm uppercase tracking-wide">
                        <div className="px-5 py-4">Item</div>
                        <div className="px-5 py-4 text-right min-w-[120px]">Rate (₹)</div>
                    </div>
                    <div className="bg-white">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-[1fr_auto] border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50 ${index === items.length - 1 ? "border-b-0" : ""}`}
                            >
                                <div className="px-5 py-4 font-medium text-gray-700">{item.item}</div>
                                <div className="px-5 py-4 text-right font-bold text-blue-500 text-base min-w-[120px]">₹{item.rate}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PricingPage() {
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
    const [searchTerm, setSearchTerm] = useState("")
    const [openCategories, setOpenCategories] = useState(new Set())

    const filteredData = useMemo(() => {
        if (!searchTerm) return pricingData

        const filtered = {}

        Object.entries(pricingData).forEach(([category, items]) => {
            const filteredItems = items.filter((item) => item.item.toLowerCase().includes(searchTerm.toLowerCase()))
            if (filteredItems.length > 0) {
                filtered[category] = filteredItems
            }
        })

        return filtered
    }, [searchTerm])

    const toggleCategory = (category) => {
        const newOpenCategories = new Set(openCategories)
        if (newOpenCategories.has(category)) {
            newOpenCategories.delete(category)
        } else {
            newOpenCategories.add(category)
        }
        setOpenCategories(newOpenCategories)
    }

    const expandAll = () => {
        setOpenCategories(new Set(Object.keys(filteredData)))
    }

    const collapseAll = () => {
        setOpenCategories(new Set())
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-300">
            <motion.div
                className="bg-gradient-to-b from-blue-400 to-[#1D7BB3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" variants={itemVariants}>
                            Pricing
                        </motion.h1>
                        <motion.p className="text-xl text-blue-100 max-w-3xl mx-auto" variants={itemVariants}>
                            Transparent pricing for all our professional laundry and cleaning services
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
            <div className="max-w-6xl mx-auto px-5 py-10 relative z-10">
                {/* Search and Controls */}
                <div className="flex flex-col md:flex-row gap-5 mb-10 items-center">
                    <div className="relative flex-1 min-w-[300px] md:min-w-0">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                        <input
                            type="text"
                            placeholder="Search for items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-white/95 backdrop-blur-sm text-base shadow-lg transition-all duration-300 focus:outline-none focus:shadow-xl focus:bg-white"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={expandAll}
                            className="px-5 py-3 bg-blue-500 border border-white/30 rounded-xl text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500/80 hover:-translate-y-0.5 backdrop-blur-sm"
                        >
                            Expand All
                        </button>
                        <button
                            onClick={collapseAll}
                            className="px-5 py-3 bg-blue-500 border border-white/30 rounded-xl text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500/80 hover:-translate-y-0.5 backdrop-blur-sm"
                        >
                            Collapse All
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-col gap-6">
                    {Object.entries(filteredData).map(([category, items]) => (
                        <CategoryCard
                            key={category}
                            category={category}
                            items={items}
                            isOpen={openCategories.has(category)}
                            onToggle={() => toggleCategory(category)}
                        />
                    ))}
                </div>

                {/* Footer Note */}
                {/* Terms and Conditions */}
                <div className="mt-16 flex justify-center">
                    <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-8 max-w-4xl shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Terms and Conditions</h3>
                        <div className="space-y-4 text-gray-900 leading-relaxed">
                            <p className="m-0">
                                <strong>•</strong> All prices are exclusive of taxes. Government taxes as applicable.
                            </p>
                            <p className="m-0">
                                <strong>•</strong> Minimum order value of ₹300 for free pickup and delivery.
                            </p>
                            <p className="m-0">
                                <strong>•</strong> Actual prices may vary depending on the actual garment fabric, texture, size, weight,
                                embroidery work or any other similar work, etc.
                            </p>
                            <p className="m-0">
                                <strong>•</strong> All prices are per piece unless specified otherwise.
                            </p>
                            <p className="m-0 text-center font-semibold mt-6">Terms & Conditions apply.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
