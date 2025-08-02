'use client'

import { useState } from 'react'

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState('Newway Church')
  const [showNotices, setShowNotices] = useState(true)
  const [adminAlert, setAdminAlert] = useState(false)

  const handleSave = () => {
    alert('관리자 설정이 저장되었습니다.')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">관리자 설정</h1>
        <p className="page-header-description">
          사이트 운영 정책 및 관리자 전용 옵션을 설정합니다.
        </p>
      </div>

      <div className="card-box space-y-5">
        {/* 사이트 이름 설정 */}
        <div className="space-y-1">
          <label className="form-label">사이트 이름</label>
          <input
            type="text"
            value={siteName}
            onChange={e => setSiteName(e.target.value)}
            className="form-input"
          />
        </div>

        {/* 공지사항 기본 고정 여부 */}
        <div className="flex items-center justify-between">
          <span className="form-label">공지사항 상단 고정</span>
          <button
            onClick={() => setShowNotices(!showNotices)}
            className={`w-11 h-6 rounded-full relative transition-colors ${
              showNotices ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-neutral-600'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                showNotices ? 'translate-x-5' : ''
              }`}
            />
          </button>
        </div>

        {/* 운영자 알림 여부 */}
        <div className="flex items-center justify-between">
          <span className="form-label">운영자 알림 수신</span>
          <button
            onClick={() => setAdminAlert(!adminAlert)}
            className={`w-11 h-6 rounded-full relative transition-colors ${
              adminAlert ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-neutral-600'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                adminAlert ? 'translate-x-5' : ''
              }`}
            />
          </button>
        </div>

        <button onClick={handleSave} className="btn-base btn-indigo">
          저장하기
        </button>
      </div>
    </div>
  )
}
