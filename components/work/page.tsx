import { Card, CardContent } from '~/components/ui/card.tsx'
import Layout from '~/components/ComponentLayout.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { Construction } from 'lucide-preact'
import type { Data } from '~/data.ts'

interface Project {
    id: number
    name: string
    description: string
    imageUrl: string
    technologies: string[]
    status?: string
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Project Alpha',
        description:
            'A cutting-edge web application built with React and Node.js.',
        imageUrl: '/placeholder.svg?height=250&width=250',
        technologies: ['React', 'Node.js', 'MongoDB'],
        status: 'Under Construction',
    },
    {
        id: 2,
        name: 'Project Beta',
        description: 'An innovative mobile app developed using React Native.',
        imageUrl: '/placeholder.svg?height=250&width=250',
        technologies: ['React Native', 'Firebase'],
    },
    {
        id: 3,
        name: 'Project Gamma',
        description:
            'A robust backend system powered by Django and PostgreSQL.',
        imageUrl: '/placeholder.svg?height=250&width=250',
        technologies: ['Django', 'PostgreSQL', 'Docker'],
    },
]

export default function WorkPage({ data }: { data: Data }) {
    return (
        <Layout id='work'>
            <div className='container mx-auto px-4 py-8 md:px-8 lg:px-16'>
                <h2 className='text-2xl font-bold mb-6 md:mb-8'>My Work</h2>
                <div className='grid gap-6 md:gap-8'>
                    {data.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

const ProjectCard = ({ project }: { project: Project }) => (
    <Card className='overflow-hidden'>
        <CardContent className='p-0'>
            <div className='flex flex-col sm:flex-row gap-4 p-4'>
                <div className='w-full sm:w-auto sm:flex-shrink-0'>
                    <div className='relative aspect-square w-full sm:w-[250px] overflow-hidden rounded-lg'>
                        <img
                            src={project.imageUrl}
                            alt={project.name}
                            width={250}
                            height={250}
                            class='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                        />
                        {project.status && (
                            <div className='absolute bottom-0 left-0 right-0 h-1/4 bg-secondary flex items-center justify-center'>
                                <Badge
                                    variant='secondary'
                                    className='text-xs flex items-center gap-1'
                                >
                                    <Construction className='w-3 h-3' />
                                    {project.status}
                                </Badge>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex-grow flex flex-col align-top'>
                    <h3 className='text-lg font-semibold mb-2'>
                        {project.name}
                    </h3>
                    <p className='text-sm text-muted-foreground mb-4'>
                        {project.description}
                    </p>
                    <div className='flex justify-start flex-wrap gap-2'>
                        {project.technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant='outline'
                                className='text-xs'
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
)
