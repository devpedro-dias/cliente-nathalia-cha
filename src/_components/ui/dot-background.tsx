import { cn } from '@/_lib/utils'
import { Highlight } from './hero-highlight'

export const DotBackground = () => {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-background z-50">
            <div
                className={cn(
                    'absolute inset-0',
                    '[background-size:20px_20px]',
                    '[background-image:radial-gradient(#e6e6e6_1px,transparent_1px)]',
                    'dark:[background-image:radial-gradient(#0066FF_1px,transparent_2px)] opacity-50'
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] "></div>
            {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                Backgrounds
            </p> */}
            <div className="max-w-[80vw] lg:max-w-[60vw] z-50">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug text-center">
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
