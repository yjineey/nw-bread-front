'use client'

import '@/styles/menu.css'
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
    <div className="page-wrapper max-w-screen-md mx-auto spacer">
      {/* 사용자 메뉴 */}
      <section className="section-card">
        <h2 className="section-title">사용자 메뉴</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {userMenu.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="menu-card">
              <Icon className="menu-icon" />
              <span className="menu-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 관리자 메뉴 */}
      <section className="section-card">
        <h2 className="section-title">관리자 메뉴</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {adminMenu.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="menu-card">
              <Icon className="menu-icon" />
              <span className="menu-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
