import TourExplorer from "@/components/tours/TourExplorer"
import type { Tour } from "@/types/tour"

type HomePageTemplateProps = {
    tours: Tour[]
}

const HomePageTemplate = ({ tours }: HomePageTemplateProps) => {
    return (
        <TourExplorer tours={tours}>
            <h1 className="text-base font-bold text-zinc-600 sm:text-[28px]">
                <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
            </h1>
        </TourExplorer>
    )
}

export default HomePageTemplate
