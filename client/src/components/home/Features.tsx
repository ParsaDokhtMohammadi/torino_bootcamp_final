import Image from "next/image"
import heart from "@/assets/images/heart.svg"
import price from "@/assets/images/price.svg"
import support from "@/assets/images/support.svg"

const Features = () => {
  return (
    <section className="flex flex-col gap-8 border-t border-text/15 pt-10 sm:flex-row sm:justify-between sm:gap-6">
      <div className="flex items-center gap-4">
        <Image src={price} alt="" className="size-18 shrink-0 sm:size-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-text sm:text-2xl">بصرفه ترین قیمت</h3>
          <p className="text-sm leading-6 text-text/80">بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image src={support} alt="" className="size-18 shrink-0 sm:size-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-text sm:text-2xl">پشتیبانی</h3>
          <p className="text-sm leading-6 text-text/80">پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر شما.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image src={heart} alt="" className="size-18 shrink-0 sm:size-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-text sm:text-2xl">رضایت کاربران</h3>
          <p className="text-sm leading-6 text-text/80">رضایت بیش از ۱۰هزار کاربر از تور های ما.</p>
        </div>
      </div>
    </section>
  )
}

export default Features
