export default function Page() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">관리자 대시보드</h1>
        <p className="page-header-description">
          사이트 운영 현황 및 관리 기능을 확인하세요.
        </p>
      </div>

      <div className="page-stats-grid">
        <div className="card-box">
          <p className="stat-card-label">회원 수</p>
          <p className="stat-card-value">1,234명</p>
        </div>
        <div className="card-box">
          <p className="stat-card-label">오늘 방문자</p>
          <p className="stat-card-value">456명</p>
        </div>
        <div className="card-box">
          <p className="stat-card-label">등록된 게시글</p>
          <p className="stat-card-value">78개</p>
        </div>
        <div className="card-box">
          <p className="stat-card-label">신고/문의</p>
          <p className="stat-card-value">3건</p>
        </div>
      </div>

      <div className="card-box">
        <h2 className="card-title">최근 활동</h2>
        <ul className="activity-list">
          <li>📌 [공지사항] 새 업데이트 등록 (5분 전)</li>
          <li>👤 새 회원 가입: user123 (1시간 전)</li>
          <li>📝 게시글 등록: “주일예배 영상 안내”</li>
        </ul>
      </div>
    </div>
  )
}
