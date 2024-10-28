import Layout from '~/components/ComponentLayout.tsx'
import type { Experience } from '~/lib/data/types.ts'
import { Timeline } from '~/components/ui/timeline.tsx'
import Entry from '~/islands/Entry.tsx'

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
                        <Entry key={index} entry={entry} />
                    ))}
                </Timeline>
            </div>
        </Layout>
    )
}
