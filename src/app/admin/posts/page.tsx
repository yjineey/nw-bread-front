'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

type Post = {
  id: number
  title: string
  category: string
  author: string
  createdAt: string
  status: '공개' | '비공개'
}

export default function AdminPostListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const totalPages = 3

  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    setPosts([
      {
        id: 1,
        category: '공지사항',
        title: '주일예배 안내',
        author: '관리자',
        createdAt: '2024-07-01',
        status: '공개',
      },
      {
        id: 2,
        category: '주일예배',
        title: '예배 장소 변경',
        author: '홍길동',
        createdAt: '2024-06-20',
        status: '비공개',
      },
    ])
  }, [page])

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">게시글 관리</h1>
        <p className="page-header-description">
          게시글을 확인하고 수정·삭제할 수 있습니다.
        </p>
      </div>

      {/* 상단 등록 버튼 */}
      <div className="page-actions">
        <Link
          href="/admin/posts/new"
          className="px-3 py-1 text-sm font-medium rounded bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          + 새 게시글
        </Link>
      </div>

      {/* 검색 & 필터 */}
      <div className="mb-4 flex flex-col sm:flex-row items-stretch sm:items-end gap-2 sm:gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            키워드
          </label>
          <input
            type="text"
            placeholder="제목 또는 작성자"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 
            dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100"
          />
        </div>

        <div className="w-full sm:w-48">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            상태
          </label>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 
            dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100"
          >
            <option value="">전체</option>
            <option value="공개">공개</option>
            <option value="비공개">비공개</option>
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label className="block text-sm font-medium text-transparent mb-1">
            검색
          </label>
          <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
            검색
          </button>
        </div>
      </div>

      {/* 게시글 테이블 */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 dark:bg-neutral-700 text-left">
            <tr>
              <th className="px-4 py-3">제목</th>
              <th className="px-4 py-3">작성자</th>
              <th className="px-4 py-3">작성일</th>
              <th className="px-4 py-3">상태</th>
              <th className="px-4 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr
                key={post.id}
                className="border-b border-gray-100 dark:border-neutral-700"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-100">
                    {post.category}
                  </span>
                  {post.title}
                </td>
                <td className="px-4 py-3">{post.author}</td>
                <td className="px-4 py-3">{post.createdAt}</td>
                <td className="px-4 py-3">{post.status}</td>
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

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2 text-sm">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-3 py-1 rounded border bg-white dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600 disabled:opacity-50"
        >
          이전
        </button>
        <span className="px-3 py-1">
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="px-3 py-1 rounded border bg-white dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600 disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  )
}
