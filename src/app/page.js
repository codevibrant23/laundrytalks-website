import AboutUs from '@/components/dashboard/aboutus'
import HowItWorks from '@/components/dashboard/howitworks'
import OurServices from '@/components/dashboard/services'
import ContactSection from '@/components/dashboard/Contact'
import WhyChooseUs from '@/components/dashboard/whyus'
import Hero from '@/components/Hero'
import React from 'react'
import BeforeAfterSlider from '@/components/BeforeAfter'
import Testimonials from '@/components/dashboard/Testimonial'

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
            id="Beforeafter"
            className=" py-10 bg-gray-50 flex items-center justify-center flex-col text-center"
            aria-labelledby="Beforeafter-heading"
          >
            <div className='flex items-center justify-center flex-col gap-4 mb-10'>
              <h2>
                The difference we make
              </h2>
              <p>
                Experience the transformation our professional cleaning services can make. Drag the slider to see the remarkable before and after results.
              </p>
            </div>
            <BeforeAfterSlider />
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
            <Testimonials />
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