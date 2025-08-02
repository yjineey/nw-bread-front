'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpenText,
  Heart,
  BookOpenCheck,
  ShieldCheck,
  UserPlus,
  LogIn,
} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export const MenuItems = [
  {
    label: '성경통독',
    href: '/user/read',
    icon: BookOpenText,
  },
  {
    label: '오늘의 QT',
    href: '/user/qt',
    icon: Heart,
  },
  {
    label: '오늘의 말씀',
    href: '/user/prayer',
    icon: BookOpenCheck,
  },
  {
    label: '보혈선포기도문',
    href: '/user/blood',
    icon: ShieldCheck,
  },
]
export const AuthItems = [
  {
    label: '회원가입',
    href: '/auth/signup',
    icon: UserPlus,
  },
  {
    label: '로그인',
    href: '/auth/login',
    icon: LogIn,
  },
]

export default function HeaderMain() {
  const pathname = usePathname()

  return (
    <>
      <div className="flex gap-4 text-sm font-medium mr-4">
        {MenuItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 ${
                isActive
                  ? 'text-indigo-700 dark:text-indigo-400 font-semibold'
                  : 'hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
              }`}
            >
              <Icon className="sm:hidden w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          )
        })}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {AuthItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 ${
                isActive
                  ? 'text-indigo-700 dark:text-indigo-400 font-semibold'
                  : 'hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
              }`}
            >
              <Icon className="sm:hidden w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          )
        })}
        <ThemeToggle />
      </div>
    </>
  )
}
