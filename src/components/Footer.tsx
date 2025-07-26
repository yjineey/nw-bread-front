import Link from 'next/link'
import {
  BookOpenText,
  NotebookPen,
  HomeIcon,
  UserIcon,
  Menu,
} from 'lucide-react'

export const SNSItems = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@newwaychurchkr',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/newwaychurchkr/',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/newwaychurchkr',
    icon: '/icons/facebook.svg',
  },
]
export const MobileItems = [
  {
    label: '성경',
    href: '/bible/read',
    icon: BookOpenText,
  },
  {
    label: '큐티',
    href: '/bible/qt',
    icon: NotebookPen,
  },
  {
    label: '홈',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: '내정보',
    href: '/auth/profile',
    icon: UserIcon,
  },
  {
    label: '더보기',
    href: '/more',
    icon: Menu,
  },
]
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="hidden md:flex item-center justify-center p-2">
        <img
          src="/logos/nw_sm_logo.png"
          alt="NEWWAY 로고"
          className="w-48 h-auto invert dark:invert-0"
        />
        <div className="space-y-1 text-left">
          <p className="font-semibold">뉴웨이교회</p>
          <p>주소 | 서울특별시 강서구 화곡로 64길 67</p>
          <p>전화 | 070-4047-0478</p>
          <p>이메일 | newwaychurchkr@gmail.com</p>
          <div className="flex gap-4">
            {SNSItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 hover-link"
                target="_blank"
              >
                <img src={Icon} alt={label} className="w-4 h-4 dark:invert" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <p>ⓒ {year} NEWWAY CHURCH. All rights reserved.</p>
        </div>
      </div>
      <div className="fixed md:hidden bottom-0 left-0 right-0 h-12">
        <div className="flex">
          {MobileItems.map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex-1 flex items-center justify-center"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
