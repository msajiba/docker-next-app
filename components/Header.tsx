import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            My App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/server-side"
                className="hover:text-blue-200 transition"
              >
                Server Side
              </Link>
            </li>
            <li>
              <Link
                href="/client-side"
                className="hover:text-blue-200 transition"
              >
                Client Side
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
