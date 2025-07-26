'use client'

export default function Page() {
  const KAKAO_CLIENT_ID = '카카오REST_API키' // ⬅️ 여기에 본인 키 넣으세요
  const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao/callback' // 또는 배포 URI

  const handleKakaoLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = kakaoURL
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-2xl font-bold">뉴웨이교회</h1>
      <p>카카오 로그인으로 시작하기</p>
      <button
        onClick={handleKakaoLogin}
        className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow"
      >
        카카오로 로그인
      </button>
    </div>
  )
}
