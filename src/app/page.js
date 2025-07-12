import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main>
          <Hero />

          {/* Additional sections for scroll effect */}
          <section
            id="about"
            className="h-screen bg-white flex items-center justify-center"
            aria-labelledby="about-heading"
          >
            <div className="text-center">
              <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-xl text-gray-600">Learn more about our professional pickup and delivery services</p>
            </div>
          </section>

          <section
            id="services"
            className="h-screen bg-gray-50 flex items-center justify-center"
            aria-labelledby="services-heading"
          >
            <div className="text-center">
              <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">Discover comprehensive pickup and delivery solutions</p>
            </div>
          </section>

          <section
            id="gallery"
            className="h-screen bg-white flex items-center justify-center"
            aria-labelledby="gallery-heading"
          >
            <div className="text-center">
              <h2 id="gallery-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Gallery
              </h2>
              <p className="text-xl text-gray-600">View our fleet and service locations</p>
            </div>
          </section>

          <section
            id="pricing"
            className="h-screen bg-gray-50 flex items-center justify-center"
            aria-labelledby="pricing-heading"
          >
            <div className="text-center">
              <h2 id="pricing-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Pricing
              </h2>
              <p className="text-xl text-gray-600">Transparent and competitive pricing plans</p>
            </div>
          </section>

          <section
            id="contact"
            className="h-screen bg-white flex items-center justify-center"
            aria-labelledby="contact-heading"
          >
            <div className="text-center">
              <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-600">Get in touch for pickup service inquiries</p>
            </div>
          </section>
        </main>
      </div>
    </>)
}

export default page