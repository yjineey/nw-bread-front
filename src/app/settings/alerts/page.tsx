'use client'

import { useState } from 'react'

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState({
    email: true,
    push: false,
    weeklyDigest: true,
    eventUpdates: false,
    serviceNotice: true,
  })

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    alert('알림 설정이 저장되었습니다.')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">알림 설정</h1>
        <p className="page-header-description">
          수신할 알림 항목을 선택하세요.
        </p>
      </div>

      <div className="card-box space-y-5">
        {/* 항목 리스트 */}
        <SettingItem
          label="이메일 알림"
          checked={settings.email}
          onToggle={() => toggle('email')}
        />
        <SettingItem
          label="푸시 알림"
          checked={settings.push}
          onToggle={() => toggle('push')}
        />
        <SettingItem
          label="주간 소식지"
          checked={settings.weeklyDigest}
          onToggle={() => toggle('weeklyDigest')}
        />
        <SettingItem
          label="이벤트 및 업데이트"
          checked={settings.eventUpdates}
          onToggle={() => toggle('eventUpdates')}
        />
        <SettingItem
          label="서비스 공지사항"
          checked={settings.serviceNotice}
          onToggle={() => toggle('serviceNotice')}
        />

        <button onClick={handleSave} className="btn-base btn-indigo">
          저장하기
        </button>
      </div>
    </div>
  )
}

function SettingItem({
  label,
  checked,
  onToggle,
}: {
  label: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="form-label">{label}</span>
      <button
        onClick={onToggle}
        className={`w-11 h-6 rounded-full transition-colors relative ${
          checked ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-neutral-600'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </button>
    </div>
  )
}
