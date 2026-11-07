import PhoneBanner from "@/components/home/PhoneBanner"
import { aboutFeatures, aboutStats } from "@/constants/about"

const AboutPageTemplate = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-zinc-600 sm:text-[28px]">
          درباره <span className="text-primary">تورینو</span>
        </h1>
        <p className="leading-8 text-text sm:text-lg sm:leading-9">
          تورینو با هدف ساده‌تر کردن سفر برای همه شکل گرفت. ما باور داریم سفر باید لذت‌بخش باشد، نه دغدغه‌ای
          پر از هماهنگی و نگرانی. به همین دلیل تورهای داخلی و خارجی را با برنامه‌ریزی دقیق، قیمت منصفانه و
          همراهی راهنمایان باتجربه برگزار می‌کنیم تا شما فقط به تجربه کردن فکر کنید.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {aboutStats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-xl border border-zinc-300 p-6"
          >
            <span className="text-2xl font-bold text-primary sm:text-3xl">{value}</span>
            <span className="text-sm text-zinc-600 sm:text-base">{label}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-text sm:text-2xl">
          چرا <span className="text-primary">تورینو</span>؟
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutFeatures.map(({ title, description, Icon }) => (
            <div key={title} className="flex flex-col gap-3 rounded-xl bg-primary/10 p-6">
              <Icon className="size-9 text-primary" />
              <h3 className="text-lg font-bold text-secondary">{title}</h3>
              <p className="text-sm leading-7 text-zinc-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <PhoneBanner />
    </div>
  )
}

export default AboutPageTemplate
