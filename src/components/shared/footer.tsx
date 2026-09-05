import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8 mt-12">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-gray-900">Skill Saarthi</h3>
          <p className="mt-2 text-xs text-gray-600">
            Government Skilling & Employment Outcome Management Platform
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 text-sm mb-3">Information</h4>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-600">
        <p>© 2026 Skill Saarthi. All rights reserved.</p>
      </div>
    </footer>
  )
}
