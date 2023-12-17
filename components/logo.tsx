import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <Image
        className="object-contain object-center"
        alt="Pokemon"
        src="/images/pokemon.svg"
        width={180}
        height={60}
        priority
      />
    </Link>
  )
}
