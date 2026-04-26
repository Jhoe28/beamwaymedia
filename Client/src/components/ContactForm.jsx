import React, { useState } from 'react'
import assets from '../assets/assets'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Please agree to the terms and privacy policy.')
      return
    }
    setStatus('sending')
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="flex items-center justify-center py-12 px-4 bg-gray-100">
        <div className="grid min-[1024px]:grid-cols-2 max-[1023px]:grid-cols-1 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">
            <div className="p-5">
                <h1 className="text-3xl font-semibold text-gray-900 text-center md:text-start mb-3 tracking-tight">
                    Get in touch
                </h1>
                <p className="text-sm/6 text-gray-600 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[400px]">
                    Have a question or idea? Our approachable team would love to connect and support you.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label htmlFor="firstname" className="block text-sm text-gray-500 mb-2">First name</label>
                            <input onChange={handleChange} value={formData.firstname} type="text" id='firstname' placeholder="David" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm text-gray-500 mb-2">Last name</label>
                            <input onChange={handleChange} value={formData.lastname} type="text" id='lastname' placeholder="Andrew" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm text-gray-500 mb-2">Email id</label>
                        <input onChange={handleChange} value={formData.email} type="email" id='email' placeholder="david@company.com" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"/>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="phone" className="block text-sm text-gray-500 mb-2">Phone number</label>
                        <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                            <select className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-500 bg-white border-r border-gray-300">
                                <option>US</option>
                                <option>UK</option>
                                <option>IN</option>
                                <option>CA</option>
                                <option>NG</option>
                            </select>
                            <input onChange={handleChange} value={formData.phone} type="tel" id='phone' placeholder="+234 812 345 6789" className="flex-1 px-3 py-3 text-sm outline-none" />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="message" className="block text-sm text-gray-500 mb-2">Message</label>
                        <textarea onChange={handleChange} value={formData.message} id='message' rows="4" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"></textarea>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                        <input onChange={handleChange} checked={formData.consent} type="checkbox" id='consent' className="w-5 h-5 cursor-pointer accent-indigo-500 rounded-[5px]" />
                        <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer">
                            You agree to our <span className="underline">terms</span> and <span className="underline">privacy policy</span>.
                        </label>
                    </div>

                    {/* Status messages */}
                    {status === 'success' && (
                        <p className="text-green-600 text-sm mb-4">✅ Message sent! We'll be in touch soon.</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-sm mb-4">❌ Something went wrong. Please try again.</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-fit px-6 py-3.5 bg-linear-to-r from-black to-gray-800 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </div>

            <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] max-[1023px]:hidden min-[1024px]:flex flex-col justify-between overflow-hidden">
                <img src={assets.AccentImg_1} alt="3D shapes" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default ContactForm