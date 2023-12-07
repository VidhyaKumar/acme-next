import Image from "next/image";

export default function RootLoading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Image
        src="/images/pokeball.svg"
        width={128}
        height={128}
        alt="Loading..."
        className="animate-bounce"
      />
    </div>
  );
}
