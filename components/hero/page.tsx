import Layout from '~/components/hero/layout.tsx'
import { portfolioData as data } from '~/data.ts'

export default function Hero() {
    const calculateAge = (): string => {
        const [month, day, year] = data.about.birthday.split('-').map(Number)
        const birthDate = new Date(year, month - 1, day)
        const today = new Date()

        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        const dayDiff = today.getDate() - birthDate.getDate()

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--
        }

        return age.toString()
    }

    return (
        <Layout>
            <div class='flex flex-col h-screen w-screen justify-center items-center'>
                <img
                    src='/headshot.jpg'
                    class='relative right-24 top-12 h-96 rounded-2xl'
                />
                <div class='relative left-24 z-10 bg-base-200 px-16 py-12 rounded-2xl md:w-[32rem]'>
                    <div class='flex flex-row flex-wrap justify-center align-center w-96'>
                        <p>
                            I am {data.about.firstName} {data.about.lastName}, a
                            {' '}
                            {calculateAge()}{' '}
                            year old Software Developer, passionate about
                            backend, services, and optimisation.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
