import TourExplorer from "@/components/tours/TourExplorer"
import PhoneBanner from "@/components/home/PhoneBanner"
import WhyTorino from "@/components/home/WhyTorino"
import type { Tour } from "@/types/tour"

type HomePageTemplateProps = {
    tours: Tour[]
}

const HomePageTemplate = ({ tours }: HomePageTemplateProps) => {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <TourExplorer tours={tours}>
                <h1 className="text-base font-bold text-zinc-600 sm:text-[28px]">
                    <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
                </h1>
            </TourExplorer>
            <PhoneBanner />
            <WhyTorino />
        </div>
    )
}

export default HomePageTemplate
