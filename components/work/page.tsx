import { Card, CardContent } from '~/components/ui/card.tsx'
import Layout from '~/components/ComponentLayout.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Construction } from 'lucide-preact'
import type { Project } from '~/data.ts'

export default function WorkPage({ projects }: { projects: Project[] }) {
    return (
        <Layout id='work'>
            <div className='container mx-auto px-4 py-8 md:px-8 lg:px-16 justify-center items-center flex flex-col'>
                <h2 className='text-2xl font-bold mb-6 md:mb-8'>My Work</h2>
                <div className='flex flex-wrap gap-6 md:gap-8 max-w-[750px]'>
                    {projects.map((project, index) => (
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
                    <div className='relative aspect-square w-full sm:w-[250px] overflow-hidden rounded-lg flex justify-center items-center'>
                        <Button className={'absolute relative z-10'}>
                            <img src={''} />
                        </Button>
                        <img
                            src={project.imageURL}
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
                <div className='flex-grow flex flex-col justify-center'>
                    <h3 className='text-lg font-bold mb-2'>
                        {project.name}
                    </h3>
                    <p className='text-sm text-muted-foreground mb-8'>
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
