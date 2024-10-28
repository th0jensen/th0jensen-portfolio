import type { ComponentChildren } from 'preact'

export interface LayoutProps {
    children: ComponentChildren
    id: string
}

export default function ComponentLayout({ children, id }: LayoutProps) {
    return (
        <div
            id={id}
            class='min-h-screen w-screen py-16 overflow-x-hidden'
        >
            {children}
        </div>
    )
}
