import { CardItem } from '@/_components/ui/3d-card'
import { CARDS_CONTENTS } from '@/_data'
import { CardBody, CardContainer } from '@/_components/ui/3d-card'
import {
    CalendarHeart,
    Heart,
    Clock,
    Leaf,
    RefreshCw,
    TrendingUp,
} from 'lucide-react'

const ICONS = {
    CalendarHeart: CalendarHeart,
    Heart: Heart,
    RefreshCw: RefreshCw,
    TrendingUp: TrendingUp,
    Clock: Clock,
    Leaf: Leaf,
}

const CardsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 justify-center gap-6">
            {CARDS_CONTENTS.map(({ id, icon, title, description }) => {
                const LucideIcon = ICONS[icon as keyof typeof ICONS]

                return (
                    <CardContainer key={id}>
                        <CardBody className="w-full max-w-[300px] h-[300px] bg-transparent rounded-xl shadow-xl p-6 border border-zinc-200">
                            <CardItem
                                translateZ={30}
                                className="flex flex-col items-start gap-4 h-full"
                            >
                                <div className="text-white dark:text-blue-400">
                                    <LucideIcon size={32} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-200">
                                    {description}
                                </p>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                )
            })}
        </div>
    )
}

export default CardsSection
