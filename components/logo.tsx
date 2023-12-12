import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/pokemon.svg"
        width={180}
        height={60}
        alt="Pokemon"
        className="object-contain object-center"
        priority
      />
    </Link>
  )
}
