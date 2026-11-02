import type { Tour } from "@/types/tour"

type HomePageTemplateProps = {
  tours: Tour[]
}

const HomePageTemplate = ({ tours }: HomePageTemplateProps) => {
  return (
    <ul>
      {tours.map((tour) => (
        <li key={tour.id}>{tour.title}</li>
      ))}
    </ul>
  )
}

export default HomePageTemplate
