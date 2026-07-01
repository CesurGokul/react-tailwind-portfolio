import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-white border-t border-gray-200 pt-16 pb-8'>
            <div className='container mx-auto px-6 max-w-6xl'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
                    <div className='md:col-span-1'>
                        <a href='#home' className='flex items-center gap-2.5 text-xl font-bold text-gray-900 mb-4'>
                            <div className='w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200'>
                                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                </svg>
                            </div>
                            <span>Gokul<span className='text-indigo-600'>.</span></span>
                        </a>
                        
                        <p className='text-gray-600 mb-6 leading-relaxed text-sm max-w-xs'>
                            {t.footer.description || 'Bridging cultures through code.'}
                        </p>
                        
                        <a 
                            href='https://www.linkedin.com/in/gokul-%E3%82%B4%E3%82%AF%E3%83%AB-c-46334925b/' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='inline-flex items-center justify-center w-10 h-10 bg-gray-50 text-gray-600 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200' 
                            aria-label='LinkedIn'
                        >
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                            </svg>
                        </a>
                    </div>

                    <div>
                        <h4 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                            {t.footer.quickLinks || 'Quick Links'}
                        </h4>
                        <ul className='space-y-3'>
                            {/* ✅ FIX: Added safe fallbacks for all links */}
                            <li><a href='#home' className='text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm'>{t.nav.home || 'Home'}</a></li>
                            <li><a href='#about' className='text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm'>{t.nav.about || 'About'}</a></li>
                            <li><a href='#projects' className='text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm'>{t.nav.projects || 'Projects'}</a></li>
                            <li><a href='#contact' className='text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm'>{t.nav.contact || 'Contact'}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                            {t.contact.titlePart1 || 'Contact'} {t.contact.titlePart2 || ''}
                        </h4>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-3 text-gray-600 text-sm'>
                                <div className='w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                </div>
                                <span className='break-all'>{t.contact.emailAddress || 'cesurgokul69@gmail.com'}</span>
                            </li>
                            <li className='flex items-center gap-3 text-gray-600 text-sm'>
                                <div className='w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                </div>
                                <span>{t.footer.location || 'Osaka, Japan'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-200 pt-8 text-center'>
                    <p className='text-gray-500 text-sm'>
                        © {currentYear} Gokul. {t.footer.rights || 'All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}