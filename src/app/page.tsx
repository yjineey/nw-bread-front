export default function Page() {
  return (
    <div className="page-wrapper space-y-4">
      <h1 className="text-2xl font-bold">메인 페이지</h1>
      {[...Array(20)].map((_, i) => (
        <p
          key={i}
          className="p-2 bg-gray-300 dark:bg-gray-600  rounded shadow text-sm"
        >
          #{i + 1} 테스트 - 스크롤 확인용 입니다.
        </p>
      ))}
    </div>
  )
}
