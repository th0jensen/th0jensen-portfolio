import * as React from 'react'
import { cn } from '~/lib/utils.ts'

const Timeline = React.forwardRef<
    HTMLOListElement,
    React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={cn('flex flex-col relative left-24', className)}
        {...props}
    />
))
Timeline.displayName = 'Timeline'

const TimelineItem = React.forwardRef<
    HTMLLIElement,
    React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn('relative flex flex-col p-6 pt-0 [&>*]:mb-3', className)}
        {...props}
    />
))
TimelineItem.displayName = 'TimelineItem'

const TimelineTime = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            'absolute -translate-x-24 text-sm font-semibold leading-none text-secondary-foreground',
            className,
        )}
        {...props}
    />
))
TimelineTime.displayName = 'TimelineTime'

const TimelineConnector = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'z-0 absolute top-[5px] left-[30px] -translate-x-1/2 translate-y-2 h-full w-[5px] bg-muted',
            className,
        )}
        {...props}
    />
))
TimelineConnector.displayName = 'TimelineConnector'

const TimelineHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center gap-4', className)}
        {...props}
    />
))
TimelineHeader.displayName = 'TimelineHeader'

const TimelineTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            'font-semibold leading-none tracking-tight text-secondary-foreground',
            className,
        )}
        {...props}
    >
        {children}
    </h3>
))
TimelineTitle.displayName = 'CardTitle'

const TimelineIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        style='box-shadow: hsl(var(--ring)) 0px 0px 7px 1px;'
        className={cn(
            'z-10 flex flex-col size-3 border bg-accent shadow-sm rounded-full',
            className,
        )}
        {...props}
    />
))
TimelineIcon.displayName = 'TimelineIcon'

const TimelineDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-muted-foreground max-w-sm', className)}
        {...props}
    />
))
TimelineDescription.displayName = 'TimelineDescription'

const TimelineContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex flex-col items-start p-6 pt-0 rounded-lg border bg-card text-card-foreground shadow-sm',
            className,
        )}
        {...props}
    />
))
TimelineContent.displayName = 'TimelineContent'

export {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    TimelineTime,
    TimelineTitle,
}
