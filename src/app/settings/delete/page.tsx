'use client'

import { useRouter } from 'next/navigation'

export default function DeleteAccountPage() {
  const router = useRouter()

  const handleDelete = () => {
    const confirmed = confirm(
      '정말로 회원 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
    )
    if (confirmed) {
      alert('탈퇴 처리 완료')
      router.push('/')
    }
  }

  return (
    <div className="page-wrapper max-w-md mx-auto">
      <div className="page-header">
        <h1 className="page-header-title ">회원 탈퇴</h1>
        <p className="page-header-description text-red-400">
          회원 탈퇴 시 모든 정보가 삭제되며 복구되지 않습니다.
        </p>
      </div>

      <div className="card-box space-y-5">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          정말로 탈퇴를 원하시면 아래 버튼을 눌러주세요. 탈퇴 시 모든 개인
          정보와 활동 내역이 삭제되며, 복구할 수 없습니다.
        </p>

        <button onClick={handleDelete} className="btn-base btn-rose">
          탈퇴하기
        </button>
      </div>
    </div>
  )
}
