import { CardBody, CardContainer, CardItem } from '@/_components/ui/3d-card'
import { TESTIMONIALS_CARDS } from '@/_data'

const TestimonialsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center px-4">
            {TESTIMONIALS_CARDS.map(({ id, content, name }) => (
                <CardContainer key={id}>
                    <CardBody className="w-[300px] h-[260px] bg-white/90 dark:bg-zinc-900 rounded-xl shadow-xl p-6 border border-zinc-200 dark:border-zinc-800">
                        <CardItem
                            translateZ={20}
                            className="flex flex-col justify-between h-full text-left"
                        >
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                                “{content}”
                            </p>
                            <span className="mt-4 text-right font-semibold text-green-700 dark:text-blue-400">
                                - {name}
                            </span>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    )
}

export default TestimonialsCards
