'use client'

import Link from 'next/link'
import {
  User,
  Lock,
  Bell,
  Trash2,
  BookOpenCheck,
  Heart,
  ShieldCheck,
  Users,
  Settings,
  Newspaper,
  FileText,
  List,
  LayoutDashboard,
  BookOpenText,
  Church,
} from 'lucide-react'

const accountMenu = [
  { label: '내 정보', href: '/auth/profile', icon: User },
  { label: '비밀번호 변경', href: '/auth/change-password', icon: Lock },
  { label: '알림 설정', href: '/settings/alerts', icon: Bell },
  { label: '계정 탈퇴', href: '/settings/delete', icon: Trash2 },
]

const userMenu = [
  { label: '성경통독', href: '/user/read', icon: BookOpenText },
  { label: '오늘의 QT', href: '/user/qt', icon: Heart },
  { label: '오늘의 말씀', href: '/user/prayer', icon: BookOpenCheck },
  { label: '보혈기도문', href: '/user/blood', icon: ShieldCheck },
  { label: '가정예배지', href: '/user/worship', icon: Newspaper },
  { label: '교회 광고', href: '/user/announcements', icon: Church },
]

const adminMenu = [
  { label: '대시보드', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: '게시글 작성', href: '/admin/posts/new', icon: FileText },
  { label: '게시글 관리', href: '/admin/posts', icon: List },
  { label: '사용자 관리', href: '/admin/users', icon: Users },
  { label: '설정', href: '/admin/setting', icon: Settings },
]

export default function MenuPage() {
  return (
    <div className="page-wrapper">
      <section className="card-box">
        <h2 className="card-title">내 계정 </h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {accountMenu.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 사용자 메뉴 */}
      <section className="card-box">
        <h2 className="card-title">사용자 메뉴</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {userMenu.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 관리자 메뉴 */}
      <section className="card-box">
        <h2 className="card-title">관리자 메뉴</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {adminMenu.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className="card-action">
              <Icon className="card-icon" />
              <span className="card-label">{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
