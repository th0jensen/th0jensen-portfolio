import Layout from '~/components/ComponentLayout.tsx'
import { type Experience } from '~/data.ts'
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
            <div class='w-screen min-h-screen flex justify-center items-center'>
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
                <Card>
                    <CardContent className='p-0'>
                        <div className='flex flex-col justify-center p-4 max-w-72'>
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
