import SearchBar from "@/components/search/SearchBar"
import { getPlaces } from "@/utils/places"
import type { Tour } from "@/types/tour"

type HomePageTemplateProps = {
    tours: Tour[]
}

const HomePageTemplate = ({ tours }: HomePageTemplateProps) => {
    const { origins, destinations } = getPlaces(tours)

    return (
        <section className="mx-auto flex w-full max-w-218 flex-col items-center gap-6 sm:gap-8">
            <h1 className="text-base font-bold text-zinc-600 sm:text-[28px]">
                <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
            </h1>
            <SearchBar origins={origins} destinations={destinations} />
        </section>
    )
}

export default HomePageTemplate
