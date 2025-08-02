'use client'

import { useState } from 'react'

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('새 비밀번호가 일치하지 않습니다.')
      return
    }

    alert('비밀번호가 변경되었습니다.')
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title">비밀번호 변경</h1>
        <p className="page-header-description">
          현재 비밀번호를 입력하고 새 비밀번호로 변경하세요.
        </p>
      </div>

      <div className="card-box space-y-5">
        <div className="input-group">
          <label className="form-label">현재 비밀번호</label>
          <input
            type="password"
            className="form-input"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            placeholder="현재 비밀번호"
          />
        </div>

        <div className="input-group">
          <label className="form-label">새 비밀번호</label>
          <input
            type="password"
            className="form-input"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="새 비밀번호"
          />
        </div>

        <div className="input-group">
          <label className="form-label">새 비밀번호 확인</label>
          <input
            type="password"
            className="form-input"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="다시 입력"
          />
        </div>

        <button onClick={handleChange} className="btn-base btn-indigo">
          비밀번호 변경
        </button>
      </div>
    </div>
  )
}
