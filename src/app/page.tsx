import CardsSection from '@/_components/cards-section'
import TestimonialsCards from '@/_components/testimonials-cards'

import { Button } from '@/_components/ui/button'
import { DotBackground } from '@/_components/ui/dot-background'
import { Highlight } from '@/_components/ui/hero-highlight'

import { CoffeeIcon, CornerRightDown, MessageCircle } from 'lucide-react'

import Link from 'next/link'
import { CSSProperties } from 'react'

const HomePage = () => {
    return (
        <main className="flex flex-col gap-10">
            <section>
                <DotBackground />
            </section>

            <section className="flex flex-col gap-6 items-center justify-center text-center max-w-[80vw] lg:max-w-[60vw] mx-auto">
                <h2
                    className="flex justify-center items-center font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug text-center gap-2 fade-in-up"
                    style={{ '--delay': '.8s' } as CSSProperties}
                >
                    <div>
                        <Highlight className="text-white">Comece</Highlight> por
                        aqui
                    </div>
                    <CornerRightDown />
                </h2>

                <p
                    className="font-medium text-md text-zinc-600 fade-in-up"
                    style={{ '--delay': '1s' } as CSSProperties}
                >
                    Entenda mais sobre como funciona essa receita, e o que te
                    escondem sobre o emagrecimento rápido.
                </p>

                <div className="h-[600px] w-[300px] bg-zinc-200 flex items-center justify-center">
                    vídeo
                </div>

                <Button size="lg" asChild>
                    <Link href="#">
                        <CoffeeIcon />
                        Comece agora
                    </Link>
                </Button>
            </section>

            <section className="flex flex-col gap-10 bg-gradient-to-r from-blue-400 to-indigo-600 py-10">
                <div className="text-white">
                    <h2
                        className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center fade-in-up"
                        style={{ '--delay': '.8s' } as CSSProperties}
                    >
                        Para quem serve?
                    </h2>
                </div>

                <div className="max-w-[80vw] lg:max-w-[60vw] mx-auto">
                    <CardsSection />
                </div>

                <div className="flex items-center justify-center">
                    <Button size="lg" asChild variant="secondary">
                        <Link href="#">
                            <CoffeeIcon />
                            Clique aqui para conhecer
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="flex flex-col gap-6 items-center justify-center text-center">
                <h2
                    className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center fade-in-up"
                    style={{ '--delay': '.8s' } as CSSProperties}
                >
                    Depoimentos
                </h2>

                <p
                    className="text-md text-zinc-600 fade-in-up"
                    style={{ '--delay': '1s' } as CSSProperties}
                >
                    Alguns dos depoimentos dos nossos alunos que se juntaram a
                    nossa comunidade
                </p>

                <TestimonialsCards />
            </section>

            <section className="flex flex-col gap-6 items-center justify-center text-center py-10">
                <h2
                    className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center fade-in-up"
                    style={{ '--delay': '.8s' } as CSSProperties}
                >
                    Alguma dúvida?
                </h2>

                <p
                    className="text-base text-zinc-600 fade-in-up"
                    style={{ '--delay': '1s' } as CSSProperties}
                >
                    Entre em contato conosco por nosso canal de suporte,
                    responderemos em até 48 horas.
                </p>

                <Button size="lg" asChild>
                    <Link href="#">
                        <MessageCircle />
                        Fale conosco
                    </Link>
                </Button>
            </section>
        </main>
    )
}

export default HomePage
