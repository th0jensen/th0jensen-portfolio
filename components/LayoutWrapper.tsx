import type { ComponentChildren } from 'preact'

interface WrapperProps {
    children: ComponentChildren
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div class='min-h-screen w-screen p-4 justify-center items-center flex'>
            {children}
        </div>
    )
}
