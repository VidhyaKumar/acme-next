"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

interface PaginationProps {
  page: number
  hasPrevPage: boolean | null
  hasNextPage: boolean | null
}

export function Pagination({
  page,
  hasPrevPage,
  hasNextPage,
}: PaginationProps) {
  const router = useRouter()
  const prevPage = page === 1 ? 1 : page - 1
  const nextPage = page + 1

  return (
    <div className="flex flex-row gap-x-4 mx-auto">
      <Button
        variant="secondary"
        className="min-w-[105px]"
        size="lg"
        onClick={() => router.push(prevPage === 1 ? "/" : `/?page=${prevPage}`)}
        disabled={!hasPrevPage}
      >
        Previous
      </Button>
      <Button
        size="lg"
        className="min-w-[105px]"
        onClick={() => router.push(`/?page=${nextPage}`)}
        disabled={!hasNextPage}
      >
        Next
      </Button>
    </div>
  )
}
