import Image from "next/image"

export function Loader() {
  return (
    <div className="flex items-center justify-center h-full my-auto">
      <Image
        className="animate-bounce"
        alt="Loading..."
        src="/images/pokeball.svg"
        width={128}
        height={128}
      />
    </div>
  )
}
