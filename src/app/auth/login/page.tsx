'use client'
import Link from 'next/link'
import { imgPath } from '@/lib/imgPath'
import Image from 'next/image'

export default function Page() {
  const KAKAO_CLIENT_ID = '카카오REST_API키' // ⬅️ 여기에 본인 키 넣으세요
  const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao/callback' // 또는 배포 URI

  const handleKakaoLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = kakaoURL
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
      {/* PC/태블릿용 큰 버튼 */}
      <button onClick={handleKakaoLogin} className="hidden sm:block">
        <Image
          src={imgPath(`/logos/kakao_login_lg.png`)}
          alt="카카오 로그인"
          width={100}
          height={100}
        />
      </button>

      {/* 모바일용 작은 버튼 */}
      <button onClick={handleKakaoLogin} className="block sm:hidden">
        <Image
          src={imgPath(`/logos/kakao_login_sm.png`)}
          alt="카카오 로그인"
          width={100}
          height={100}
        />
      </button>

      {/* 회원가입 링크 */}
      <Link
        href="/auth/signup"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white underline"
      >
        회원가입
      </Link>
    </div>
  )
}
