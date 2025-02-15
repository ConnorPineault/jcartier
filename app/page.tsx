import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-6">Cartier</h1>
      <p className="text-lg text-gray-600 mb-6">
        See Inside
      </p>
      <Link href="/blogSection">
        <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
          Enter
        </button>
      </Link>
    </main>
  );
}
