import { formatPrice } from "@/utils/tours"
import { toShortId } from "@/utils/digits"
import { formatTransactionDate, getTransactionTypeLabel } from "@/utils/transactions"
import type { Transaction } from "@/types/transaction"

type TransactionsPageTemplateProps = {
  transactions: Transaction[]
}

const TransactionsPageTemplate = ({ transactions }: TransactionsPageTemplateProps) => {
  if (transactions.length === 0) {
    return <p className="py-16 text-center text-lg text-text">هنوز تراکنشی ثبت نشده است</p>
  }

  return (
    <div className="overflow-hidden rounded-[10px] border border-zinc-300">
      <table className="w-full text-start text-text">
        <thead className="bg-zinc-100 text-xs text-zinc-600 md:text-base md:text-text">
          <tr>
            <th scope="col" className="px-3 py-4 text-start font-normal md:px-4">تاریخ و ساعت</th>
            <th scope="col" className="px-3 py-4 text-start font-normal md:px-4">
              مبلغ<span className="text-[10px] md:text-base">(تومان)</span>
            </th>
            <th scope="col" className="px-3 py-4 text-start font-normal not-md:hidden md:px-4">نوع تراکنش</th>
            <th scope="col" className="px-3 py-4 text-start font-normal md:px-4">شماره سفارش</th>
          </tr>
        </thead>
        <tbody className="text-xs md:text-sm">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-3 py-4 md:px-4 md:py-3">{formatTransactionDate(transaction.createdAt)}</td>
              <td className="px-3 py-4 text-sm md:px-4 md:py-3">{formatPrice(transaction.amount)}</td>
              <td className="px-3 py-4 not-md:hidden md:px-4 md:py-3">{getTransactionTypeLabel(transaction.type)}</td>
              <td className="px-3 py-4 text-sm md:px-4 md:py-3">
                <span className="not-md:hidden">سفارش </span>
                {toShortId(transaction.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsPageTemplate
