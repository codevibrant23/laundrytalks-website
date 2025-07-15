import AboutUs from '@/Components/dashboard/aboutus'
import HowItWorks from '@/Components/dashboard/howitworks'
import OurServices from '@/Components/dashboard/services'
import ContactSection from '@/Components/dashboard/Contact'
import WhyChooseUs from '@/Components/dashboard/whyus'
import Hero from '@/Components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <main>
          <Hero />

          {/* Additional sections for scroll effect */}
          <section
            id="about"
            className="py-10 bg-white flex items-center justify-center"
            aria-labelledby="about-heading"
          >
            <AboutUs />
          </section>

          <section
            id="howitworks"
            className=" py-10 bg-white flex items-center justify-center"
            aria-labelledby="services-howitworks"
          >
            <HowItWorks />
          </section>

          <section
            id="services"
            className=" py-10 bg-white flex items-center justify-center"
            aria-labelledby="services-heading"
          >
            <OurServices />
          </section>

          <section
            id="WhyChooseUs"
            className=" py-10 bg-gray-50 flex items-center justify-center"
            aria-labelledby="WhyChooseUs-heading"
          >
            <WhyChooseUs />
          </section>
          <section
            id="testimonial"
            className=" py-10 bg-gray-50 flex items-center justify-center"
            aria-labelledby="testimonial-heading"
          >
          </section>

          <section
            id="contact"
            className=" py-10 bg-gray-50 flex items-center justify-center"
            aria-labelledby="contact-heading"
          >
            <ContactSection />
          </section>
        </main>
      </div>
    </>)
}

export default page