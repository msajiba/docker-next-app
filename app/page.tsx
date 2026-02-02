import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Image
          className="mx-auto dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js App</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          This app demonstrates server-side and client-side data fetching with
          Next.js
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/server-side">
          <div className="bg-white border-2 border-blue-500 rounded-lg p-8 hover:shadow-xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">
              🖥️ Server-Side Fetching
            </h2>
            <p className="text-gray-700">
              See how Next.js Server Components fetch data on the server before
              sending HTML to the browser.
            </p>
            <p className="mt-4 text-blue-500 font-medium">View Posts →</p>
          </div>
        </Link>

        <Link href="/client-side">
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 hover:shadow-xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-green-600">
              💻 Client-Side Fetching
            </h2>
            <p className="text-gray-700">
              See how React hooks fetch data in the browser after the page
              loads.
            </p>
            <p className="mt-4 text-green-500 font-medium">View Users →</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600">
          Data is fetched from{" "}
          <a
            href="https://jsonplaceholder.typicode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            JSONPlaceholder API
          </a>
        </p>
      </div>
    </div>
  );
}
