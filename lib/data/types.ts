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
    expanded: boolean
    description: string
}

export interface Project {
    name: string
    status?: string
    imageURL: string
    technologies: Record<string, string>
    description: string
    source?: {
        type: string
        link: string
    }
}
