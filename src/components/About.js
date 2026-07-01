import { useLanguage } from '../context/LanguageContext';
import AboutImg from '../assets/about.png';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id='about' className='py-20 bg-slate-50'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        {t.about.titlePart1} <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>{t.about.titlePart2}</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full'></div>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                        <div className='relative'>
                            <img src={AboutImg} alt='About' className='w-full rounded-2xl shadow-2xl transform transition duration-500 hover:scale-[1.02]' />
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold text-gray-900'>
                            {/* {t.about.titlePart1} {t.about.titlePart2} */}
                        </h3>
                        
                        <div className='prose prose-lg text-gray-600'>
                            <p className='leading-relaxed'>
                                {t.about.description}
                            </p>
                            <p className='leading-relaxed mt-4'>
                                {t.about.details}
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-2 pt-4'>
                            {['React', 'Node.js', 'Java', 'MySQL', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                                <span key={skill} className='px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200 shadow-sm'>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className='grid grid-cols-2 gap-6 pt-6 border-t border-gray-200'>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-indigo-600'>3+</div>
                                <div className='text-sm text-gray-500 mt-1'>{t.about.yearsExperience}</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-purple-600'>13+</div>
                                <div className='text-sm text-gray-500 mt-1'>{t.about.projectsCompleted}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}