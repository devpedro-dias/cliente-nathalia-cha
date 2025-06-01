import { Button } from '@/_components/ui/button'
import { DotBackground } from '@/_components/ui/dot-background'
import { Highlight } from '@/_components/ui/hero-highlight'
import { Coffee, CornerRightDown } from 'lucide-react'
import Link from 'next/link'

const HomePage = () => {
    return (
        <main className="flex flex-col gap-10">
            <section>
                <DotBackground />
            </section>
            <section className="flex flex-col gap-6 items-center justify-center text-center max-w-[80vw] lg:max-w-[60vw] mx-auto">
                <h2 className="flex justify-center items-center font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug text-center gap-2">
                    <div>
                        <Highlight className="text-white">Comece</Highlight> por
                        aqui
                    </div>
                    <CornerRightDown />
                </h2>

                <p className="font-medium text-md text-zinc-600">
                    Entenda mais sobre como funciona essa receita, e o que te
                    escondem sobre o emagrecimento rápido.
                </p>

                <div className="h-[600px] w-[300px] bg-zinc-200 flex items-center justify-center">
                    vídeo
                </div>

                <Button size="lg" asChild>
                    <Link href="#">
                        <Coffee />
                        Comece agora
                    </Link>
                </Button>
            </section>

            <section className="max-w-[80vw] lg:max-w-[60vw] mx-auto">
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center">
                    Para quem serve?
                </h2>
            </section>
        </main>
    )
}

export default HomePage
