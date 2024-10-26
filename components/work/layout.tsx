import type { ComponentChildren } from 'preact'

export interface LayoutProps {
    children: ComponentChildren
}

export default function WorkLayout({ children }: LayoutProps) {
    return (
        <div
            id='work'
            class='min-h-screen w-screen p-4 justify-center items-center flex bg-base-300'
        >
            {children}
        </div>
    )
}
