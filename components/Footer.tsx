export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-300 transition">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-gray-300 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
