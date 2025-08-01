import Link from 'next/link'
import { imgPath } from '@/lib/imgPath'
import { BookOpenText, Heart, HomeIcon, UserIcon, Menu } from 'lucide-react'

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
    href: '/user/read',
    icon: BookOpenText,
  },
  {
    label: '큐티',
    href: '/user/qt',
    icon: Heart,
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
    href: '/settings/more',
    icon: Menu,
  },
]
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="hidden md:flex item-center justify-center p-3 gap-4">
        <img
          src={imgPath(`/logos/nw_logo.png`)}
          alt="nw-footer-logo"
          className="w-72 h-16 invert-0 dark:invert"
        />
        <div className="space-y-1 text-left">
          <p className="font-semibold">뉴웨이교회</p>
          {/* <p>주소 | 서울특별시 강서구 화곡로 64길 67</p> */}
          {/* <p>전화 | 070-4047-0478</p> */}
          {/* <p>이메일 | newwaychurchkr@gmail.com</p> */}
          <div className="flex gap-4">
            {SNSItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 hover-link"
                target="_blank"
              >
                <img
                  src={imgPath(Icon)}
                  alt={label}
                  className="w-4 h-4 dark:invert"
                />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <p>ⓒ {year} NEWWAY CHURCH. All rights reserved.</p>
        </div>
      </div>
      <div className="fixed md:hidden h-16 bottom-0 left-0 right-0 p-4 border-t bg-neutral-900 text-gray-200">
        <div className="flex">
          {MobileItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <Icon className="w-5 h-5 text-white" />
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
