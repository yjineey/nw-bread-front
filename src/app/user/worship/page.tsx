'use client'

import { useEffect, useState } from 'react'

interface Announcement {
  id: number
  title: string
  content: string
  date: string
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    setAnnouncements([
      {
        id: 1,
        title: '8월 둘째 주 가정예비',
        content: `1. 이번 주 수요 기도회는 오후 7시에 진행됩니다.\n2. 청년부 수련회 신청은 이번 주까지입니다.`,
        date: '2025-08-11',
      },
      {
        id: 2,
        title: '8월 첫째 주 가정예배',
        content: `1. 예배는 오전 11시 본당에서 시작합니다.\n2. 주일학교는 10시 30분에 별관 2층에서 모입니다.`,
        date: '2025-08-04',
      },
    ])
  }, [])

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">가정예배지</h1>
        <p className="page-header-description">매주 주보 광고를 확인하세요.</p>
      </div>

      <div className="card-box space-y-4">
        {announcements.map(item => (
          <div
            key={item.id}
            className="space-y-1 border-b pb-4 last:border-none last:pb-0"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-400">
              {item.content}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
