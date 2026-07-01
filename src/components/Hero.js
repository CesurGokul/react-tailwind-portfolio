import { useLanguage } from '../context/LanguageContext';
import profileImage from '../assets/photo.png';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section 
            id='home' 
            className='group min-h-screen flex items-center bg-white relative overflow-hidden pt-20 transition-colors duration-700 ease-in-out group-hover:bg-[#d4d0f8]'
        >
            {/* Background Elements */}
            <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-50/30 rounded-full blur-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-700'></div>
            
            <div className='container mx-auto px-6 lg:px-12 py-12 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    
                    {/* Left Column - Text Content */}
                    <div className='space-y-8 order-2 lg:order-1'>
                        <div className='flex items-center gap-4'>
                            <div className='h-px w-12 bg-gray-400'></div>
                            <span className='text-gray-500 font-medium tracking-wider uppercase text-sm'>
                                {t.hero.greeting || 'Hello'}
                            </span>
                        </div>

                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600'>
                                {t.hero.name || 'Gokul'}
                            </span>
                        </h1>

                        <h3 className='text-2xl md:text-3xl font-medium text-gray-700 mb-6'>
                            {t.hero.title || 'Full Stack Developer'}
                        </h3>

                        <p className='text-gray-600 text-lg max-w-xl leading-relaxed'>
                            {t.hero.description || 'Building exceptional digital experiences with modern technologies.'}
                        </p>

                        {/* ✅ FIX: Added safe fallback href */}
                        <div className='flex flex-wrap gap-4 pt-4'>
                            <a 
                                href={t.hero.seeProjects ? '#projects' : '#projects'}
                                className='inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transform hover:-translate-y-0.5 transition-all duration-300'
                            >
                                {t.hero.seeProjects || 'See Projects'}
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
                        <div className='relative'>
                            <div className='absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-30 blur-2xl group-hover:scale-95 transition-transform duration-700'></div>
                            <div className='absolute -inset-2 bg-gradient-to-r from-red-200 to-pink-200 rounded-full opacity-20 blur-xl group-hover:scale-95 transition-transform duration-700'></div>
                            
                            <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl'>
                                <img 
                                    src={profileImage} 
                                    alt='Profile' 
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}