export interface Data {
    about:
        & {
            [key in 'firstName' | 'lastName' | 'birthday']: string
        }
        & {
            [key in 'humanLanguages' | 'computerLanguages']: string[]
        }
    tech: {
        [key: string]: string[]
    }
    experience: Experience[]
    projects: Project[]
}

export interface Experience {
    title: string
    date: string
    description: string
}

export interface Project {
    name: string
    status?: string
    imageURL: string
    technologies: string[]
    description: string
    source: {
        type: string
        link: string
    }
}

export const portfolioData: Data = {
    about: {
        firstName: 'Thomas',
        lastName: 'Jensen',
        birthday: '10-12-2003',
        humanLanguages: ['English', 'Norwegian', 'German', 'Hebrew'],
        computerLanguages: ['Typescript', 'Go', 'Swift', 'Rust'],
    },
    tech: {
        languages: [
            'Typescript',
            'Javascript',
            'Go',
            'Swift',
            'HTML',
            'CSS',
            'Rust',
        ],
        technologies: [
            'React.js',
            'TailwindCSS',
            'Express',
            'Node.js',
            'PostgreSQL',
            'Linux',
        ],
    },
    experience: [
        {
            title: 'Joined Applesophy',
            date: 'Dec 2021',
            description:
                'Wrote articles primarily about Apple, alongside reviews of different tech gadgets.',
        },
        {
            title: 'Learning SwiftUI',
            date: 'June 2022',
            description:
                'Started working on the Appleosophy iOS app, an immense undertaking; especially when considering that I knew nothing about either SwiftUI, Swift or Objective-C.',
        },
        {
            title: 'Appleosophy hits Testflight',
            date: 'Sep 2022',
            description:
                'The Appleosophy app was ready for beta testers after 3 months of learning and developing in SwiftUI.',
        },
        {
            title: 'Appleosophy 1.0 released',
            date: 'Dec 2022',
            description:
                'My first iOS app is launched on the App Store after 3 months of internal and external beta testing.',
        },
        {
            title: 'Joined Boolean UK',
            date: 'Apr 2024',
            description:
                'Started the intensive 6-month Full Stack Software Developer course at Boolean UK.',
        },
        {
            title: 'Started working on Tradio',
            date: 'May 2024',
            description:
                'Started  Tradio, a personalised trading platform developed together with Shreyash Gupta.',
        },
        {
            title: 'Boolean UK Alumni',
            date: 'Oct 2024',
            description:
                'Graduated from the Full Stack Software Developer course at Boolean UK',
        },
    ],
    projects: [
        {
            name: 'Tradio',
            status: 'Under Contruction',
            imageURL: '/images/tradio.png',
            technologies: ['TypeScript', 'SwiftUI', 'Deno', 'Postgres'],
            description:
                'A personalised trading platform built for the future with AI and security in mind.',
            source: {
                type: 'github',
                link: 'https://github.com/th0jensen/gitdonewithit',
            },
        },
        {
            name: 'Appleosophy',
            imageURL: '/images/appleosophy.png',
            technologies: ['Swift', 'Objective-C', 'SwiftUI', 'WordPress'],
            description:
                'The official iOS app for Applesophy, which I built and shipped as the sole developer in 6 months. I used the pre-existing WordPress REST API as a backend.',
            source: {
                type: 'appstore',
                link: 'https://apps.apple.com/us/app/appleosophy/id1635844078',
            },
        },
        {
            name: 'Flavorelle',
            imageURL: '/images/flavorelle.png',
            technologies: ['Next.js', 'TypeScript', 'tRPC', 'Zod'],
            description:
                'A self-hostable recipe manager app, made with simplicity and fun in mind!',
            source: {
                type: 'github',
                link: 'https://github.com/th0jensen/flavorelle',
            },
        },
    ],
}
