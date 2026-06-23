import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      <Image
        width={150}
        height={150}
        alt="Loading..."
        src="/img/preloader.gif"
      />
      <p className="mt-4 text-2xl font-medium bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        L O A D I N G . . .
      </p>
    </div>
  );
}
