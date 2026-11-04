import type { Metadata } from "next"
import TransactionsPageTemplate from "@/templates/TransactionsPageTemplate"
import { getTransactions } from "@/services/user"

export const metadata: Metadata = {
  title: "تراکنش ها",
}

export default async function TransactionsPage() {
  const transactions = await getTransactions()

  return <TransactionsPageTemplate transactions={transactions} />
}
