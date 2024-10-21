import _Name from '../components/Name.tsx'
import { portfolioData as data } from '../data.ts'

export default function AboutMe() {
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
        <div class='bg-base-200 p-16 rounded-xl w-[32rem]'>
            <div class='flex flex-row flex-wrap justify-center align-center w-96'>
                <p>
                    I am {data.about.firstName} {data.about.lastName}, a{' '}
                    {calculateAge()}{' '}
                    year old Software Developer, passionate about backend,
                    services, and optimisation.
                </p>
            </div>
        </div>
    )
}
