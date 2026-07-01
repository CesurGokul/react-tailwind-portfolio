import { useLanguage } from '../context/LanguageContext';
import smsproject from '../assets/smsproject.png';
import weatherapp from '../assets/weatherapp.png';
import websiteBlog from '../assets/website-blog.jpg';

export default function Projects() {
    const { t } = useLanguage();

    // Images and links are kept here since they don't change by language
    const projectImages = [smsproject, weatherapp, websiteBlog];
    const projectLinks = [
        'https://github.com/CesurGokul/Student-Management-System',
        'https://github.com/CesurGokul/weather-react-app',
        '#'
    ];

    return (
        <section id='projects' className='py-20 bg-slate-50'>
            <div className='container mx-auto px-6 max-w-7xl'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                        {t.projects.titlePart1} <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>{t.projects.titlePart2}</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full'></div>
                    <p className='text-gray-600 mt-6 max-w-2xl mx-auto text-lg'>
                        {t.projects.description}
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {t.projects.list.map((project, index) => (
                        <div key={index} className='group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden flex flex-col'>
                            <div className='relative overflow-hidden bg-gray-100'>
                                <img src={projectImages[index]} alt={project.title} className='w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500' />
                            </div>

                            <div className='p-6 flex flex-col flex-grow'>
                                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-600 mb-4 flex-grow text-sm leading-relaxed'>
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className='bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-semibold border border-indigo-100'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a href={projectLinks[index]} target="_blank" rel="noopener noreferrer" className='inline-flex items-center justify-between w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 transition-all duration-200'>
                                    {t.projects.viewProject}
                                    <svg className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}