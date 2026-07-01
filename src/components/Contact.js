import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t, language } = useLanguage();
    const form = useRef();

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        
        const SERVICE_ID = 'service_17fdk7f';
        const TEMPLATE_ID = 'template_9himyi9';
        const PUBLIC_KEY = '0Mjh6KQLj0NrJCYDA';

        try {
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            console.log('✅ SUCCESS!', result.text);
            
            setSubmitStatus('success');
            // ✅ Uses the translated success message from context
            setSubmitMessage(t.contact.successMessage); 
            setFormData({ from_name: '', from_email: '', message: '' });
            
        } catch (error) {
            console.log('❌ FAILED...', error.text);
            setSubmitStatus('error');
            // ✅ Uses the translated error message from context
            setSubmitMessage(t.contact.errorMessage); 
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitMessage('');
                setSubmitStatus('');
            }, 5000);
        }
    };

    return (
        <section id='contact' className='py-20 bg-slate-50'>
            <div className='container mx-auto px-6 max-w-6xl'>
                
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        {t.contact.titlePart1} <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>{t.contact.titlePart2}</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full'></div>
                    <p className='text-gray-600 mt-6 max-w-2xl mx-auto text-lg'>
                        {t.contact.description}
                    </p>
                </div>

                <div className='max-w-2xl mx-auto'>
                    
                    {/* Modern Dashboard Form Card */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10'>
                        <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                            
                            {/* Name Field */}
                            <div>
                                <label htmlFor='name' className='block text-gray-700 font-medium text-sm mb-2'>
                                    {t.contact.nameLabel}
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='from_name'
                                    value={formData.from_name} 
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200'
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor='email' className='block text-gray-700 font-medium text-sm mb-2'>
                                    {t.contact.emailLabel}
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='from_email'
                                    value={formData.from_email} 
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200'
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor='message' className='block text-gray-700 font-medium text-sm mb-2'>
                                    {t.contact.messageLabel}
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows='6'
                                    className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none'
                                    placeholder={t.contact.messagePlaceholder}
                                ></textarea>
                            </div>

                            {/* Submit Button with Loading Spinner */}
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2'
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t.contact.sending}
                                    </>
                                ) : (
                                    <>
                                        {t.contact.sendButton}
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {/* Success/Error Message (Dashboard Alert Style) */}
                            {submitMessage && (
                                <div className={`p-4 rounded-xl text-sm font-medium border flex items-center gap-3 ${
                                    submitStatus === 'success' 
                                        ? 'bg-green-50 text-green-700 border-green-200' 
                                        : 'bg-red-50 text-red-700 border-red-200'
                                }`}>
                                    {submitStatus === 'success' ? (
                                        <svg className='w-5 h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                    ) : (
                                        <svg className='w-5 h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                    )}
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information Cards */}
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {/* Email Card */}
                        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow'>
                            <div className='w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                            </div>
                            <h3 className='text-gray-900 font-semibold mb-1'>{t.contact.emailTitle}</h3>
                            <p className='text-gray-500 text-sm break-all'>{t.contact.emailAddress}</p>
                        </div>

                        {/* Location Card */}
                        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow'>
                            <div className='w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                </svg>
                            </div>
                            <h3 className='text-gray-900 font-semibold mb-1'>{t.contact.locationTitle}</h3>
                            <p className='text-gray-500 text-sm'>{t.contact.locationAddress}</p>
                        </div>

                        {/* Availability Card */}
                        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow'>
                            <div className='w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                            </div>
                            <h3 className='text-gray-900 font-semibold mb-1'>{t.contact.availabilityTitle}</h3>
                            <p className='text-gray-500 text-sm'>{t.contact.availabilityHours}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}