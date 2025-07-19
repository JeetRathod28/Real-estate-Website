import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl bo font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those who Found Home with Us</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((Testimonaial, idx) => (
          <div key={idx} className='max-w-[340px] border border-gray-200 shadow-lg rounded px-8 py-12 text-center'>
            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={Testimonaial.image} alt={Testimonaial.alt} />
            <h2 className='text-xl text-gray-700 font-medium'>{Testimonaial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{Testimonaial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: Testimonaial.rating }, (items, idx) => (
                <img key={idx} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className='text-gray-600'>{Testimonaial.text}</p>
          </div>

        ))}
      </div>

    </motion.div>
  )
}

export default Testimonials
