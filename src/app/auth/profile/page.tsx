'use client'

import { useState } from 'react'
// import { useEffect, useState } from 'react'

type User = {
  email: string
  nickname?: string
  phoneNumber?: string
}

export default function Profile() {
  const [user] = useState<User | null>(null)
  // const [user, setUser] = useState<User | null>(null)
  const [nickname, setNickname] = useState('')
  const [phone, setPhone] = useState('')

  // useEffect(() => {
  //   fetch('/api/user/me')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data)
  //       setNickname(data.nickname || '')
  //       setPhone(data.phoneNumber || '')
  //     })
  // }, [])

  const handleSubmit = async () => {
    // await fetch('/api/user/update', {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nickname, phoneNumber: phone }),
    // })
    alert('정보가 수정되었습니다.')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">내 정보</h1>
        <p className="page-header-description">
          회원 정보를 확인하고 수정할 수 있습니다.
        </p>
      </div>

      <div className="card-box space-y-5">
        {/* 이메일 */}
        <div className="space-y-1">
          <label className="form-label">이메일</label>
          <input
            type="email"
            value={user?.email ?? ''}
            readOnly
            className="form-input form-input-disabled"
          />
        </div>

        {/* 닉네임 */}
        <div className="space-y-1">
          <label className="form-label">닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            className="form-input"
          />
        </div>

        {/* 전화번호 */}
        <div className="space-y-1">
          <label className="form-label">전화번호</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="form-input"
          />
        </div>

        {/* 저장 버튼 */}
        <button onClick={handleSubmit} className="btn-base btn-indigo">
          저장하기
        </button>
      </div>
    </div>
  )
}
