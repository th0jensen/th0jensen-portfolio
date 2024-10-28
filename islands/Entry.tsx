import type { Experience } from '~/lib/data/types.ts'
import { Card, CardContent } from '~/components/ui/card.tsx'
import {
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    TimelineTime,
} from '~/components/ui/timeline.tsx'
import { useState } from 'preact/hooks'

const Entry = (
    { entry }: {
        entry: Experience
    },
) => {
    const [expanded, setExpanded] = useState<boolean>(entry.expanded)

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

export default Entry
