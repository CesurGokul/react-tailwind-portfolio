import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    // ✅ FIX: Removed unused 'language' variable to stop ESLint warning
    const { toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ✅ FIX: Added safe fallbacks ('#') so href is never undefined
    const navLinks = [
        { name: t.nav.home || 'Home', href: '#home' },
        { name: t.nav.about || 'About', href: '#about' },
        { name: t.nav.resume || 'Resume', href: '#resume' },
        { name: t.nav.projects || 'Projects', href: '#projects' },
        { name: t.nav.contact || 'Contact', href: '#contact' }
    ];

    return (
        <header className='bg-white/90 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 z-50'>
            <nav className='container mx-auto px-6 py-3'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <a href='#home' className='flex items-center gap-2.5 text-xl font-bold text-gray-900'>
                        <div className='w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200'>
                            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                            </svg>
                        </div>
                        <span>{t.nav.portfolio || 'Portfolio'}<span className='text-indigo-600'>.</span></span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-1'>
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className='text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium transition-all duration-200'
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        <button 
                            onClick={toggleLanguage} 
                            className='ml-4 flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-gray-200 shadow-sm'
                        >
                            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' />
                            </svg>
                            {t.nav.switchLang || '日本語'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition-colors' 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {isMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden mt-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 space-y-1'>
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className='block text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg font-medium transition-all duration-200' 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button 
                            onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
                            className='w-full text-left text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mt-2 border-t border-gray-100 pt-4'
                        >
                            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' />
                            </svg>
                            {t.nav.switchLang || 'English'}
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}