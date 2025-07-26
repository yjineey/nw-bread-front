import Link from 'next/link'
import {
  BookOpenText,
  NotebookPen,
  LibraryBig,
  Cross,
  Droplets,
  UserPlus,
  LogIn,
  UserCircle,
} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export const MenuItems = [
  {
    label: '오늘의 말씀',
    href: '/bible/prayer',
    icon: BookOpenText,
  },
  {
    label: '오늘의 QT',
    href: '/bible/qt',
    icon: NotebookPen,
  },
  {
    label: '성경통독',
    href: '/bible/read',
    icon: Cross,
  },
  {
    label: '보혈선포기도문',
    href: '/bible/blood',
    icon: Droplets,
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
  {
    label: '마이페이지',
    href: '/auth/profile',
    icon: UserCircle,
  },
]
export default function HeaderMain() {
  return (
    <div className="h-16 flex items-center justify-between px-4 border-b">
      <div className="flex gap-4 text-sm font-medium mr-4">
        {MenuItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-2 hover-link"
          >
            <Icon className="sm:hidden w-4 h-4" />
            <span className="hidden sm:inline">{label}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        {AuthItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-2 hover-link"
          >
            <Icon className="sm:hidden w-4 h-4" />
            <span className="hidden sm:inline">{label}</span>
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </div>
  )
}
