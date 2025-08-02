'use client'

import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const handleSignup = async () => {
    alert('회원가입 시도')
  }

  const handleKakaoSignup = () => {
    alert('카카오로 회원가입')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">회원가입</h1>
        <p className="page-header-description">계정을 새로 생성합니다.</p>
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

        {/* 닉네임 */}
        <div className="space-y-1">
          <label className="form-label">닉네임</label>
          <input
            type="text"
            className="form-input"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
        </div>

        {/* 회원가입 버튼 */}
        <button onClick={handleSignup} className="btn-base btn-indigo">
          회원가입
        </button>

        {/* 소셜 구분선 */}
        <div className="text-center text-sm text-gray-400">또는</div>

        {/* 카카오 회원가입 */}
        <button onClick={handleKakaoSignup} className="btn-base btn-amber">
          카카오로 회원가입
        </button>

        {/* 로그인 링크 */}
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 pt-2">
          <a href="/auth/login" className="hover:underline">
            이미 계정이 있으신가요?
          </a>
        </div>
      </div>
    </div>
  )
}
