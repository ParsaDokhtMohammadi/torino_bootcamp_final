import DashboardNav from "@/components/dashboard/DashboardNav"

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <main className="flex-1 px-4 pt-6 pb-16 md:pt-9 md:pb-58">
      <div className="mx-auto flex w-full max-w-300 flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <DashboardNav />
        <section className="min-w-0 flex-1">{children}</section>
      </div>
    </main>
  )
}
