import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-6">
                <div className="md:max-w-96">
                    <img className="h-9" src={assets.logo_dark} alt="dummyLogoDark" />
                    <p className="mt-6 text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-100">Company</h2>
                        <ul className="text-sm space-y-2 text-gray-400">
                            <li><a href="#Header" className='rounded-full inline-block'>Home</a></li>
                            <li><a href="#About" className='rounded-full inline-block'>About</a></li>
                            <li><a href="#Projects" className='rounded-full inline-block'>Projects</a></li>
                            <li><a href="#Testimonials" className='rounded-full inline-block'>Testimonials</a></li>
                            <li><a href="#Contacts" className='rounded-full inline-block'>Contacts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-100">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-2 text-gray-400">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input className="border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-500">
                Copyright © estate. All Right Reserved
            </p>
        </footer>
    )
}

export default Footer
