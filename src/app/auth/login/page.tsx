'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    alert('로그인 시도')
  }

  const handleKakaoLogin = () => {
    alert('카카오 로그인')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">로그인</h1>
        <p className="page-header-description">계정 정보를 입력해 주세요.</p>
      </div>

      <div className="card-box space-y-5">
        {/* 이메일 */}
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

        {/* 비밀번호 */}
        <div className="space-y-1">
          <label className="form-label">비밀번호</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        {/* 로그인 버튼 */}
        <button onClick={handleLogin} className="btn-base btn-indigo">
          로그인
        </button>

        {/* 소셜 로그인 구분선 */}
        <div className="text-center text-sm text-gray-400">또는</div>

        {/* 카카오 로그인 버튼 */}
        <button onClick={handleKakaoLogin} className="btn-base btn-amber">
          <span className="inline-block">카카오로 로그인</span>
        </button>

        {/* 보조 링크 */}
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 pt-2 space-x-4">
          <a href="/auth/signup" className="hover:underline">
            회원가입
          </a>
          <a href="/auth/forgot-password" className="hover:underline">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  )
}
