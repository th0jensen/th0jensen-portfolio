import Layout from '~/components/ComponentLayout.tsx'
import type { Experience } from '~/lib/data/types.ts'
import { Card, CardContent } from '~/components/ui/card.tsx'
import {
    Timeline,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    TimelineTime,
} from '~/components/ui/timeline.tsx'

export default function ExperiencePage(
    { experience }: { experience: Experience[] },
) {
    const sortedExperience = [...experience].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA.getTime() - dateB.getTime()
    })

    return (
        <Layout id='experience'>
            <div className='container mx-auto px-4 py-8 md:px-8 lg:px-16 justify-center items-center flex flex-col'>
                <h2 className='text-2xl font-bold mb-6 md:mb-8'>
                    My Experience
                </h2>
                <Timeline>
                    {sortedExperience.map((entry, index) => (
                        <Entry
                            key={index}
                            entry={entry}
                            // toggleExpand={toggleExpand}
                            // expanded={expandedEntries[entry.date]}
                        />
                    ))}
                </Timeline>
            </div>
        </Layout>
    )
}

const Entry = (
    { entry }: {
        entry: Experience
    },
) => {
    return (
        <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
                <TimelineTime>{entry.date}</TimelineTime>
                <TimelineIcon />
                <Card className='w-[calc(100%-6rem)] sm:w-fit'>
                    <CardContent className='p-0'>
                        <div className='inline-block flex flex-col justify-center p-4 max-w-72'>
                            <h3 className='text-lg font-bold'>
                                {entry.title}
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                {entry.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </TimelineHeader>
        </TimelineItem>
    )
}
