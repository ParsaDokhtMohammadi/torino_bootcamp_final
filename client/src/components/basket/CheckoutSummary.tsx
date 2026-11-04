import { formatPrice, getTourDuration } from "@/utils/tours"
import type { Tour } from "@/types/tour"

type CheckoutSummaryProps = {
  tour: Tour
}

const CheckoutSummary = ({ tour }: CheckoutSummaryProps) => {
  return (
    <aside className="flex flex-col rounded-[10px] bg-white p-3 lg:w-75">
      <div className="flex items-center justify-between border-b border-dashed border-zinc-500 pb-6">
        <h2 className="text-2xl font-bold text-text">{tour.title}</h2>
        <p className="text-sm text-zinc-500">{getTourDuration(tour)}</p>
      </div>

      <div className="flex items-center justify-between py-6">
        <p className="text-base text-text">قیمت نهایی</p>
        <p className="text-sm text-zinc-600">
          <span className="text-[28px] text-complementry">{formatPrice(tour.price)}</span> تومان
        </p>
      </div>

      <button
        type="submit"
        className="h-14 w-full rounded-[5px] bg-primary text-2xl text-white transition hover:bg-primary/90"
      >
        ثبت و خرید نهایی
      </button>
    </aside>
  )
}

export default CheckoutSummary
