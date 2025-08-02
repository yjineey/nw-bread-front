'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { imgPath } from '@/lib/imgPath'

const SNSItems = [
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

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <>
      <div className="max-w-5xl mx-auto space-y-4">
        {/* 드롭다운 */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full text-sm font-semibold hover:opacity-80"
          >
            <span>뉴웨이교회</span>
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {isOpen && (
            <div className="mt-2 text-sm space-y-1 pl-1">
              <p>주소: 서울특별시 강서구 화곡로 64길 67</p>
              <p>전화: 070-4047-0478</p>
              <p>이메일: newwaychurchkr@gmail.com</p>
              <p>
                홈페이지:{' '}
                <a
                  href="https://newwaychurch.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline break-all"
                >
                  https://newwaychurch.or.kr
                </a>
              </p>
            </div>
          )}
        </div>

        {/* 안내 문구 */}
        <div className="text-xs space-y-1">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            본 앱은 뉴웨이교회 성도들의 통독과 묵상을 돕기 위한 서비스입니다.
            모든 콘텐츠는 비상업적 용도로만 사용되며, 무단 복제를 금합니다.
          </p>
          <p>ⓒ {year} NEWWAY CHURCH. All rights reserved.</p>
        </div>

        {/* SNS 아이콘 */}
        <div className="flex gap-4 ">
          {SNSItems.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="hover:opacity-80"
            >
              <img
                src={imgPath(icon)}
                alt={label}
                className="w-5 h-5 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
