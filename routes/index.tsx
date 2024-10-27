import Hero from '~/components/hero/page.tsx'
import Work from '~/components/work/page.tsx'
import Experience from '~/components/experience/page.tsx'
import Projects from '~/components/projects/page.tsx'
import { portfolioData as data } from '~/data.ts'

export default function Home() {
    return (
        <div class='flex flex-col items-center justify-center overflow-x-hidden'>
            <Hero data={data} />
            <Work data={data} />
            <Experience />
            <Projects />
        </div>
    )
}
