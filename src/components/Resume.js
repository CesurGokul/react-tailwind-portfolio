import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ResumeImg from '../assets/resume.jpg';
import EnglishResumePDF from '../assets/Gokul_Resume_English.pdf';
import JapaneseResumePDF from '../assets/ゴクル.履歴書.pdf';

export default function Resume() {
    const [showModal, setShowModal] = useState(false);
    const { t } = useLanguage();

    const handleDownload = (pdfFile, fileName) => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => setShowModal(false), 300);
    };

    return (
        <section id='resume' className='py-20 bg-slate-50'>
            <div className='container mx-auto px-6 max-w-6xl'>
                <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center'>
                    <div className='relative group flex justify-center'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500'></div>
                        <img className='relative w-[300px] rounded-xl shadow-lg border border-gray-100 object-cover' src={ResumeImg} alt="Resume" />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{t.resume.title}</h2>
                        <p className='text-gray-600 text-lg mb-8 leading-relaxed'>{t.resume.subtitle}</p>

                        <button onClick={() => setShowModal(true)} className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 w-fit'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                            </svg>
                            {t.resume.download}
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300' onClick={() => setShowModal(false)}>
                    <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all scale-100' onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShowModal(false)} className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>

                        <div className='text-center mb-8'>
                            <div className='w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>{t.resume.selectLanguage}</h3>
                            <p className='text-gray-500 text-sm'>{t.resume.selectVersion}</p>
                        </div>

                        <div className='space-y-3'>
                            <button onClick={() => handleDownload(EnglishResumePDF, 'Gokul English resume.pdf')} className='w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-2xl'>🇬🇧</span>
                                    <div className='text-left'>
                                        <div className='font-semibold text-gray-900 group-hover:text-indigo-700'>{t.resume.englishResume}</div>
                                        <div className='text-xs text-gray-500'>{t.resume.pdfDocument}</div>
                                    </div>
                                </div>
                                <svg className='w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                                </svg>
                            </button>

                            <button onClick={() => handleDownload(JapaneseResumePDF, 'ゴクル.履歴書.pdf')} className='w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-2xl'>🇯🇵</span>
                                    <div className='text-left'>
                                        <div className='font-semibold text-gray-900 group-hover:text-purple-700'>{t.resume.japaneseResume}</div>
                                        <div className='text-xs text-gray-500'>{t.resume.pdfDocumentJa}</div>
                                    </div>
                                </div>
                                <svg className='w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                                </svg>
                            </button>
                        </div>

                        <button onClick={() => setShowModal(false)} className='mt-6 w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200 border border-gray-200'>
                            {t.resume.cancel}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}