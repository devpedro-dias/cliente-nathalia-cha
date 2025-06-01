import { cn } from '@/_lib/utils'
import { Highlight } from './hero-highlight'
import { CSSProperties } from 'react'

export const DotBackground = () => {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-background z-0">
            <div
                className={cn(
                    'absolute inset-0 z-0',
                    '[background-size:20px_20px]',
                    '[background-image:radial-gradient(#66ccff_1px,transparent_2px)]',
                    'dark:[background-image:radial-gradient(#0066FF_1px,transparent_2px)] opacity-50'
                )}
            />

            <div className="pointer-events-none absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] [mask-repeat:no-repeat] [mask-size:100%]" />

            <div className="max-w-[80vw] lg:max-w-[60vw] z-20 text-center">
                <h1
                    className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug fade-in-up"
                    style={{ '--delay': '.5s' } as CSSProperties}
                >
                    Descubra o{' '}
                    <Highlight className="text-white">Chá Secreto</Highlight>{' '}
                    que está transformando o corpo de quem quer{' '}
                    <Highlight className="text-white">emagrecer</Highlight> de
                    forma 100% natural
                </h1>
            </div>
        </div>
    )
}
