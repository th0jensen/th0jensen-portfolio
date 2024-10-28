import type { Data } from '~/data.ts'
import InfoCard from '~/islands/InfoCard.tsx'
import Layout from '~/components/ComponentLayout.tsx'

function calculateAge(birthday: string): number {
    const [month, day, year] = birthday.split('-').map(Number)
    const birthDate = new Date(year, month - 1, day)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--
    }

    return age
}

export default function Hero({ about }: { about: Data['about'] }) {
    const age = calculateAge(about.birthday)

    return (
        <Layout id='hero'>
            <section className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-primary/10 to-secondary/20 dark:from-background dark:via-primary/5 dark:to-secondary/10'>
                <div className='absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]' />
                <div className='container relative mx-auto px-4 py-12 md:py-24 lg:py-32'>
                    <div className='flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between'>
                        <div className='mb-8 lg:mb-0 lg:w-1/2'>
                            <img
                                src='/headshot.jpg'
                                alt={`${about.firstName} ${about.lastName}`}
                                className='rounded-2xl shadow-xl ring-2 w-72 md:w-96 ring-primary/20 dark:ring-primary/10'
                            />
                        </div>
                        <InfoCard about={about} age={age} />
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent'>
                </div>
            </section>
        </Layout>
    )
}
