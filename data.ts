export type Data = {
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
    education: School[]
    experience: Work[]
    projects: Project[]
}

export type School = {
    time: {
        [key in 'from' | 'to']: string
    }
    school: string
    course: string
    classes: string[]
}

export type Work = {
    title: string
    time: {
        [key in 'from' | 'to']: string
    }
    employer: string
    location: string
    description: string
}

export type Project = {
    name: string
    status?: string
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
    education: [
        {
            time: {
                from: 'Apr 2024',
                to: 'Oct 2024',
            },
            school: 'Boolean UK',
            course: 'Software Development',
            classes: [
                'Javascript',
                'HTML',
                'React',
                'Node.js',
                'PostgreSQL',
                'Express',
            ],
        },
        {
            time: {
                from: 'Aug 2020',
                to: 'Jan 2022',
            },
            school: 'Arendal High School',
            course: 'International Baccaleureate',
            classes: [
                'Physics HL',
                'Mathematics AA SL',
                'Chemistry HL',
                'Global Politics SL',
                'Norwegian HL',
                'English SL',
            ],
        },
    ],
    experience: [
        {
            title: 'Frontend Developer',
            time: {
                from: 'Jun 2022',
                to: 'Oct 2023',
            },
            employer: 'Redfruit Media LLC',
            location: 'Austin, TX - Remote',
            description:
                'Primarily worked on developing the appleosophy app for iOS and iPad, released in December 2022',
        },
    ],
    projects: [
        {
            name: 'Tradio',
            status: 'Under Contruction',
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
            technologies: ['Swift', 'Objective-C', 'SwiftUI'],
            description:
                'The official iOS app for Applesophy, I built and shipped this app by myself in 6 months.',
            source: {
                type: 'appstore',
                link: 'https://apps.apple.com/us/app/appleosophy/id1635844078',
            },
        },
        {
            name: 'Flavorelle',
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
