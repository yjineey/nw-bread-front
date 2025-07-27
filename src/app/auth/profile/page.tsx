'use client'

import { useState, useEffect } from 'react'
import '@/styles/mypage.css'

type User = {
  name: string
  email: string
}

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null)
  const [nickname, setNickname] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    fetch('/api/user/me')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setNickname(data.nickname || '')
        setPhone(data.phoneNumber || '')
      })
  }, [])

  const handleSubmit = async () => {
    await fetch('/api/user/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname, phoneNumber: phone }),
    })
    alert('정보가 수정되었습니다.')
  }

  return (
    <div className="mypage-container">
      <div className="mypage-wrapper">
        <h1 className="mypage-title">마이페이지</h1>

        <div className="space-y-5">
          {/* 이메일 */}
          <div>
            <label className="mypage-label">이메일</label>
            <input
              type="email"
              value={user?.email ?? ''}
              readOnly
              className="mypage-input mypage-input-disabled"
            />
          </div>

          {/* 닉네임 */}
          <div>
            <label className="mypage-label">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              className="mypage-input"
            />
          </div>

          {/* 전화번호 */}
          <div>
            <label className="mypage-label">전화번호</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="mypage-input"
            />
          </div>

          {/* 저장 버튼 */}
          <button onClick={handleSubmit} className="mypage-button">
            저장하기
          </button>
        </div>
      </div>
    </div>
  )
}
