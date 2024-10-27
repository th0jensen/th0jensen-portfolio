import { Card, CardContent } from '~/components/ui/card.tsx'
import { Button } from '~/components/ui/button.tsx'
import { ArrowRight } from 'lucide-preact'
import * as React from 'react'
import type { Data } from '~/data.ts'

const InfoCard: React.FC = ({ data, age }: { data: Data; age: number }) => {
    return (
        <Card className='lg:w-1/2 bg-background/80 backdrop-blur-sm dark:bg-background/60'>
            <CardContent className='p-6 md:p-8'>
                <h1 className='mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                    {data.about.firstName} {data.about.lastName}
                </h1>
                <p className='mb-6 text-xl text-muted-foreground md:text-2xl'>
                    {age} year old Software Developer
                </p>
                <p className='mb-8 text-lg md:text-xl'>
                    {'Passionate about backend, services, and optimisation.'}
                </p>
                <Button
                    onClick={() => {
                        globalThis.location.replace('/#work')
                    }}
                >
                    View My Work
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
            </CardContent>
        </Card>
    )
}

export default InfoCard
