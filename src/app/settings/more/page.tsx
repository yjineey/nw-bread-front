'use client'

import Link from 'next/link'
import {
  User,
  Lock,
  Bell,
  Trash2,
  BookOpen,
  Heart,
  Sun,
  ShieldCheck,
  Users,
  Settings,
  Newspaper,
  FileText,
  List,
  LayoutDashboard,
} from 'lucide-react'

const accountMenu = [
  { label: '내 정보', href: '/auth/mypage', icon: User },
  { label: '비밀번호 변경', href: '/auth/password', icon: Lock },
  { label: '알림 설정', href: '/settings/alerts', icon: Bell },
  { label: '계정 탈퇴', href: '/settings/delete', icon: Trash2 },
]

const userMenu = [
  { label: '오늘의 말씀', href: '/bible/prayer', icon: Sun },
  { label: '오늘의 QT', href: '/bible/qt', icon: Heart },
  { label: '성경통독', href: '/bible/read', icon: BookOpen },
  { label: '보혈선포기도문', href: '/bible/blood', icon: ShieldCheck },
  { label: '가정예배', href: '/admin/worship', icon: Newspaper },
  { label: '광고', href: '/admin/notice', icon: Newspaper },
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
    <div className="page-wrapper max-w-screen-md mx-auto spacer">
      <section className="card-box">
        <h2 className="card-title">내 계정 </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
