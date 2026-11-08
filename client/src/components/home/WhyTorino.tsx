import ImageSlider from "@/components/home/ImageSlider"

const WhyTorino = () => {
  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-center md:gap-16">
      <div className="flex flex-col gap-6 md:flex-1">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-text sm:text-4xl">
          <span className="flex size-9 items-center justify-center rounded-full bg-linear-to-b from-primary to-secondary text-xl text-white sm:size-14 sm:text-3xl">
            ؟
          </span>
          <span>
            چرا <span className="text-primary">تورینو</span> ؟
          </span>
        </h2>
        <div className="hidden flex-col gap-4 md:flex">
          <h3 className="text-xl font-bold text-text">تور طبیعت گردی و تاریخی</h3>
          <p className="text-lg leading-10 text-text text-justify">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم
            گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار
            تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
          </p>
        </div>
      </div>
      <div className="md:flex-1">
        <ImageSlider />
      </div>
    </section>
  )
}

export default WhyTorino
