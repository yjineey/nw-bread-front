'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPostCreatePage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    alert('게시글이 등록되었습니다.')
    router.push('/admin/posts')
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">게시글 등록</h1>
        <p className="page-header-description">
          새 게시글을 작성할 수 있습니다.
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-6">
        <div className="input-group">
          <label className="input-label">카테고리</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="input-select"
          >
            <option value="">선택하세요</option>
            <option value="공지사항">공지사항</option>
            <option value="주일예배">주일예배</option>
            <option value="QT">QT</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label">제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="input-text"
          />
        </div>

        <div className="input-group">
          <label className="input-label">내용</label>
          <textarea
            rows={8}
            value={content}
            onChange={e => setContent(e.target.value)}
            className="input-textarea"
          />
        </div>

        <div className="flex justify-end">
          <button onClick={handleSubmit} className="btn-base btn-indigo">
            저장하기
          </button>
        </div>
      </div>
    </div>
  )
}
