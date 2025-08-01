'use client'

import { useState } from 'react'

export default function ResetRequestPage() {
  const [email, setEmail] = useState('')

  const handleRequest = async () => {
    alert('재설정 메일 발송')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">비밀번호 찾기</h1>
        <p className="page-header-description">
          계정 이메일로 재설정 링크를 보내드립니다.
        </p>
      </div>

      <div className="card-box space-y-5">
        <div className="space-y-1">
          <label className="form-label">이메일</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <button onClick={handleRequest} className="btn-base btn-indigo">
          재설정 메일 발송
        </button>

        <div className="text-sm text-center text-gray-600 dark:text-gray-400 pt-2">
          <a href="/auth/login" className="hover:underline">
            로그인으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}
