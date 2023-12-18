"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { createUrl } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement
    const newParams = new URLSearchParams(searchParams.toString())

    if (search.value) {
      newParams.set("q", search.value)
    } else {
      newParams.delete("q")
    }

    router.push(createUrl("/search", newParams))
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        key={searchParams.get("q")}
        type="text"
        name="search"
        placeholder="Search for pokemons..."
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        defaultValue={searchParams.get("q") || ""}
      />
    </form>
  )
}
