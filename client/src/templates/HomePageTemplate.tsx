import banner from "@/assets/images/banner.png"
import Image from "next/image"
const HomePageTemplate = () => {
  return (
    <div>
      <Image src={banner} alt="banner"></Image>
    </div>
  )
}

export default HomePageTemplate
