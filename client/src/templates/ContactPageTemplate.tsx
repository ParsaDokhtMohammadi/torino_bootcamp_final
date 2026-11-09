import { HiOutlineClock, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2"
import PhoneBanner from "@/components/home/PhoneBanner"

const ContactPageTemplate = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text/80 sm:text-[28px]">
          تماس با <span className="text-primary">تورینو</span>
        </h1>
        <p className="leading-8 text-text sm:text-lg sm:leading-9">
          سوالی درباره تورها دارید یا برای رزرو به راهنمایی نیاز دارید؟ تیم پشتیبانی تورینو آماده پاسخگویی به شماست.
          از هر یک از راه‌های زیر می‌توانید با ما در ارتباط باشید.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a href="tel:0218574" className="flex flex-col gap-3 rounded-xl bg-primary/10 p-6 transition hover:bg-primary/15">
          <HiOutlinePhone className="size-9 text-primary" />
          <h2 className="text-lg font-bold text-secondary">تلفن پشتیبانی</h2>
          <p dir="ltr" className="text-end text-text/70">۰۲۱-۸۵۷۴</p>
        </a>

        <a href="mailto:info@torino.ir" className="flex flex-col gap-3 rounded-xl bg-primary/10 p-6 transition hover:bg-primary/15">
          <HiOutlineEnvelope className="size-9 text-primary" />
          <h2 className="text-lg font-bold text-secondary">ایمیل</h2>
          <p className="text-text/70">info@torino.ir</p>
        </a>

        <div className="flex flex-col gap-3 rounded-xl bg-primary/10 p-6">
          <HiOutlineMapPin className="size-9 text-primary" />
          <h2 className="text-lg font-bold text-secondary">آدرس دفتر مرکزی</h2>
          <p className="leading-7 text-text/70">تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲</p>
        </div>

        <div className="flex flex-col gap-3 rounded-xl bg-primary/10 p-6">
          <HiOutlineClock className="size-9 text-primary" />
          <h2 className="text-lg font-bold text-secondary">ساعات پاسخگویی</h2>
          <p className="leading-7 text-text/70">شنبه تا پنجشنبه، ساعت ۹ تا ۱۸</p>
        </div>
      </section>

      <PhoneBanner />
    </div>
  )
}

export default ContactPageTemplate
