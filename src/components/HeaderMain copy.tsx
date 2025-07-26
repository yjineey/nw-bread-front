import Link from 'next/link'
import { BookOpenText, NotebookPen, LibraryBig, Droplets } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Page() {
  return (
    <div className="relative flex items-center justify-between h-16 p-2 border-b">
      <nav className="flex gap-4 text-sm font-medium">
        <Link
          href="/bible/read"
          className="hover:text-blue-700 hover:font-semibold dark:hover:text-yellow-300 transition-colors"
        >
          <BookOpenText className="w-4 h-4" />
          <span className="hidden sm:inline ">오늘의 말씀</span>
        </Link>
        <Link
          href="/bible/qt"
          className="hover:text-blue-700 hover:font-semibold dark:hover:text-yellow-300 transition-colors"
        >
          <NotebookPen className="w-4 h-4" />
          <span className="hidden sm:inline ">오늘의 QT</span>
        </Link>
        <Link
          href="/bible/prayer"
          className="hover:text-blue-700 hover:font-semibold dark:hover:text-yellow-300 transition-colors"
        >
          <LibraryBig className="w-4 h-4" />
          <span className="hidden sm:inline ">성경통독</span>
        </Link>
        <Link
          href="/bible/blood"
          className="hover:text-blue-700 hover:font-semibold dark:hover:text-yellow-300 transition-colors"
        >
          <Droplets className="w-4 h-4" />
          <span className="hidden sm:inline ">보혈선포기도문</span>
        </Link>
      </nav>
      <div className="font-bold">NEWWAY CHURCH</div>
      <ThemeToggle />
    </div>
  )
}
