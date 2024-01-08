import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Image
        className="object-contain object-center mb-2"
        alt="Poke Ball"
        src="/images/pokeball.svg"
        width={75}
        height={75}
        priority
      />
      <p className="text-xl text-slate-500 mb-8">Pokemon not found</p>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  )
}
