import { useSignal } from '@preact/signals'
import _Bio from '~/islands/Bio.tsx'
import Hero from '~/components/hero/page.tsx'
import Work from '~/components/work/page.tsx'
import Experience from '~/components/experience/page.tsx'
import Projects from '~/components/projects/page.tsx'

export default function Home() {
    const _count = useSignal(3)
    return (
        <div class='flex flex-col items-center justify-center overflow-x-hidden'>
            <Hero />
            <Work />
            <Experience />
            <Projects />
        </div>
    )
}
