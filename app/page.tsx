import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh] text-center relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video2.mp4" type="video/mp4" />
        {/* You can add other formats like WebM or Ogg for compatibility */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white">CARTIER</h1>
        <p className="text-lg text-gray-200 mb-6">
          {/* You can add some description text here */}
        </p>
        <Link href="/blogSection">
          <button className="px-10 py-5 text-lg font-medium text-white bg-black rounded-lg hover:bg-indigo-500 transition">
            Enter
          </button>
        </Link>
      </div>
    </main>
  );
}
