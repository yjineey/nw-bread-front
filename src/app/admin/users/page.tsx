'use client'

import { useState, useEffect } from 'react'

type User = {
  id: number
  name: string
  email: string
  role: 'user' | 'admin'
}

export default function AdminUserPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    setUsers([
      { id: 1, name: '홍길동', email: 'hong@example.com', role: 'user' },
      { id: 2, name: '관리자', email: 'admin@example.com', role: 'admin' },
    ])
  }, [])

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">사용자 관리</h1>
        <p className="page-header-description">
          등록된 회원 정보를 확인하고 관리할 수 있습니다.
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 dark:bg-neutral-700 text-left">
            <tr>
              <th className="px-4 py-3">이름</th>
              <th className="px-4 py-3">이메일</th>
              <th className="px-4 py-3">역할</th>
              <th className="px-4 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr
                key={user.id}
                className="border-b border-gray-100 dark:border-neutral-700"
              >
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3">
                  <button className="px-2 py-1 rounded-full text-xs font-medium bg-rose-500 text-white hover:bg-rose-600 transition">
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
