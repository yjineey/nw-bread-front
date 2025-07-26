'use client'

import Link from 'next/link'
import {
  BookOpen,
  Heart,
  Sun,
  ShieldCheck,
  Users,
  Settings,
  Newspaper,
  FileText,
} from 'lucide-react'

const userMenu = [
  { label: '오늘의 말씀', href: '/bible/prayer', icon: Sun },
  { label: '오늘의 QT', href: '/bible/qt', icon: Heart },
  { label: '성경통독', href: '/bible/read', icon: BookOpen },
  { label: '보혈선포기도문', href: '/bible/blood', icon: ShieldCheck },
  { label: '가정예배', href: '/more/worship', icon: Newspaper },
  { label: '광고', href: '/more/notice', icon: Newspaper },
]

const adminMenu = [
  { label: '게시글 관리', href: '/admin/posts', icon: FileText },
  { label: '유저 관리', href: '/admin/users', icon: Users },
  { label: '설정', href: '/admin/settings', icon: Settings },
]

export default function MenuPage() {
  return (
    <main className="page-wrapper max-w-screen-md mx-auto spacer">
      {/* 사용자 메뉴 */}
      <section className="rounded-xl p-4 mb-2 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-200">
          사용자 메뉴
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {userMenu.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Icon className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-200" />
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 관리자 메뉴 */}
      <section className="rounded-xl p-4 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-200">
          관리자 메뉴
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {adminMenu.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Icon className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-200" />
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
