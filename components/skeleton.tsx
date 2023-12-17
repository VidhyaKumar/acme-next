import { cn } from "@/lib/utils"

export function Skeleton() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`

  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            className="flex flex-col items-center border-4 border-slate-800 p-8 rounded-lg justify-center aspect-[10/12]"
            key={i}
          >
            <div
              className={cn(
                "relative w-full h-[120px] bg-slate-900 rounded-lg",
                shimmer
              )}
            />
            <div className="h-6 w-full rounded-lg bg-slate-900 mt-3" />
          </div>
        ))}
      </div>
    </div>
  )
}
