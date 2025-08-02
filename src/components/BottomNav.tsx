'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpenText, Heart, HomeIcon, UserIcon, Menu } from 'lucide-react'

const MobileItems = [
  { label: '성경', href: '/user/read', icon: BookOpenText },
  { label: '큐티', href: '/user/qt', icon: Heart },
  { label: '홈', href: '/', icon: HomeIcon },
  { label: '내정보', href: '/auth/profile', icon: UserIcon },
  { label: '더보기', href: '/settings/more', icon: Menu },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="flex">
      {MobileItems.map(({ label, href, icon: Icon }) => {
        const isActive =
          href === '/' ? pathname === '/' : pathname.startsWith(href)

        return (
          <Link
            key={label}
            href={href}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <Icon
              className={`w-5 h-5 ${
                isActive ? 'text-indigo-400' : 'text-white'
              }`}
            />
            <span
              className={`text-xs ${
                isActive ? 'text-indigo-400 font-semibold' : 'text-gray-200'
              }`}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
