import { useSignal } from '@preact/signals'
import _Bio from '~/islands/Bio.tsx'
import Hero from '~/components/Hero.tsx'

export default function Home() {
    const _count = useSignal(3)
    return (
        <div class='flex flex-col items-center justify-center overflow-x-hidden'>
            <Hero />
        </div>
    )
}
