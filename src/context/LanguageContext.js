import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            resume: 'Resume',
            projects: 'Projects',
            contact: 'Contact',
            portfolio: 'Portfolio', // Only used in Header
            switchLang: '日本語'
        },
                hero: {
            greeting: "Hi, I'm",
            name: 'Gokul',
            title: 'Full Stack Developer',
            description: 'I build exceptional digital experiences that make a difference with bilingual support.',
            seeProjects: 'See Projects'
        },
        about: {
            titlePart1: 'About',
            titlePart2: 'Me',
            description: 'With over 3 years of experience in Bilingual Support Project and full-stack development, I specialize in React, Node.js, Java, and MySQL. I am committed to writing clean, maintainable code and creating exceptional user experiences, leveraging my bilingual capabilities in English and Japanese (JLPT N2).',
            yearsExperience: 'Years Experience',
            projectsCompleted: 'Projects Completed'
        },
        resume: {
            title: 'Resume',
            subtitle: 'Download my resume to learn more about my experience and skills.',
            selectLanguage: 'Select Resume Language',
            selectVersion: 'Select a version to download',
            englishResume: 'English Resume',
            japaneseResume: 'Japanese Resume',
            pdfDocument: 'PDF Document',
            pdfDocumentJa: 'PDF Document (履歴書)',
            download: 'Download',
            cancel: 'Cancel'
        },
        projects: {
            titlePart1: 'Featured',
            titlePart2: 'Projects',
            description: 'Here are some of the recent projects I have worked on, ranging from full-stack applications to responsive front-end designs.',
            viewProject: 'View Project',
            list: [
                {
                    title: 'Student Management System',
                    description: 'A full-stack Student Management System website designed to streamline administrative tasks and student records.',
                    technologies: ['React', 'Node.js', 'MongoDB']
                },
                {
                    title: 'Weather React App',
                    description: 'A sleek and responsive web application providing instant, real-time weather reports and forecasts.',
                    technologies: ['React', 'Bootstrap', 'API']
                },
                {
                    title: 'Personal Portfolio',
                    description: 'A modern, responsive personal portfolio website showcasing my skills, projects, and professional journey.',
                    technologies: ['React.js', 'Tailwind CSS', 'EmailJS']
                }
            ]
        },
        contact: {
            titlePart1: "Get In",
            titlePart2: "Touch",
            description: "Have a question or want to work together? Feel free to reach out!",
            nameLabel: "Your Name",
            namePlaceholder: "John Doe",
            emailLabel: "Your Email",
            emailPlaceholder: "john@example.com",
            messageLabel: "Message",
            messagePlaceholder: "Tell me about your project...",
            sendButton: "Send Message",
            sending: "Sending...",
            successMessage: "Thank you for your message! I will get back to you soon.",
            errorMessage: "Sorry, something went wrong. Please try again.",
            emailTitle: "Email",
            emailAddress: "cesurgokul69@gmail.com",
            locationTitle: "Location",
            locationAddress: "Osaka, Japan",
            availabilityTitle: "Availability",
            availabilityHours: "Mon - Fri: 9AM - 6PM"
        },
        footer: {
            description: "Bridging cultures through code. A bilingual full-stack developer crafting seamless digital experiences in English and Japanese.",
            quickLinks: "Quick Links",
            location: "Osaka, Japan",
            rights: "All rights reserved."
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            about: '私について',
            resume: '履歴書',
            projects: 'プロジェクト',
            contact: 'お問い合わせ',
            portfolio: 'ポートフォリオ', // Only used in Header
            switchLang: 'English'
        },
                hero: {
            greeting: 'こんにちは、私は',
            name: 'ゴクル',
            title: 'フルスタック開発者',
            description: 'バイリンガルサポートを活かし、確かな違いを生む優れたデジタル体験を構築します。',
            seeProjects: 'プロジェクトを見る'
        },
        about: {
            titlePart1: '私',
            titlePart2: 'について',
            description: 'バイリンガルサポートプロジェクトおよびフルスタック開発において3年以上の経験を持ち、React、Node.js、Java、MySQLを専門としています。クリーンで保守性の高いコードの作成と卓越したユーザー体験の創造に尽力しており、英語と日本語（JLPT N2）のバイリンガル能力を最大限に活かしています。',
            yearsExperience: '年の経験',
            projectsCompleted: '完了したプロジェクト'
        },
        resume: {
            title: '履歴書',
            subtitle: '私の経験とスキルについて詳しくは、履歴書をダウンロードしてください。',
            selectLanguage: '履歴書の言語を選択',
            selectVersion: 'ダウンロードするバージョンを選択してください',
            englishResume: '英語履歴書',
            japaneseResume: '日本語履歴書',
            pdfDocument: 'PDFドキュメント',
            pdfDocumentJa: 'PDFドキュメント (履歴書)',
            download: 'ダウンロード',
            cancel: 'キャンセル'
        },
        projects: {
            titlePart1: '主な',
            titlePart2: 'プロジェクト',
            description: 'フルスタックアプリケーションからレスポンシブなフロントエンドデザインまで、最近取り組んだプロジェクトの一部をご紹介します。',
            viewProject: 'プロジェクトを見る',
            list: [
                {
                    title: '学生管理システム',
                    description: '管理タスクと学生の記録を効率化するために設計されたフルスタックの学生管理システムWebサイト。',
                    technologies: ['React', 'Node.js', 'MongoDB']
                },
                {
                    title: '天気予報アプリ',
                    description: '瞬時のリアルタイムの天気予報とレポートを提供する、スタイリッシュでレスポンシブなWebアプリケーション。',
                    technologies: ['React', 'Bootstrap', 'API']
                },
                {
                    title: 'パーソナルポートフォリオ',
                    description: '私のスキル、プロジェクト、キャリアの歩みを紹介する、モダンでレスポンシブなパーソナルポートフォリオサイト。',
                    technologies: ['React.js', 'Tailwind CSS', 'EmailJS']
                }
            ]
        },
        contact: {
            titlePart1: "お気軽に",
            titlePart2: "お問い合わせ",
            description: "ご相談やご質問など、お気軽にお問い合わせください。",
            nameLabel: "お名前",
            namePlaceholder: "山田 太郎",
            emailLabel: "メールアドレス",
            emailPlaceholder: "taro.yamada@example.com",
            messageLabel: "メッセージ",
            messagePlaceholder: "プロジェクトの内容をお聞かせください...",
            sendButton: "送信する",
            sending: "送信中...",
            successMessage: "メッセージありがとうございます！すぐにご返信いたします。",
            errorMessage: "申し訳ございません。エラーが発生しました。もう一度お試しください。",
            emailTitle: "メール",
            emailAddress: "cesurgokul69@gmail.com",
            locationTitle: "所在地",
            locationAddress: "大阪、日本",
            availabilityTitle: "対応時間",
            availabilityHours: "月 - 金: 午前9時 - 午後6時"
        },
        footer: {
            description: "コードで文化を架け橋する。英語と日本語のバイリンガルフルスタック開発者として、シームレスで洗練されたデジタル体験を創造します。",
            quickLinks: "クイックリンク",
            location: "大阪、日本",
            rights: "全著作権所有"
        }
    }
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ja' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};