// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 justify-center md:justify-end">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
