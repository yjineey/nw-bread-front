import { imgPath } from '@/lib/imgPath'

export default function Page() {
  return (
    <div className="h-16 flex items-center justify-between p-2 border-b">
      <div className="font-bold flex items-center gap-2 ">
        <img
          src={imgPath(`/logos/nw_favicon-152.png`)}
          alt="nw-header-logo"
          className="w-8 h-auto mx-2"
        />
        <span>NEWWAY BREAD</span>
      </div>
      <span className="hidden sm:flex">
        🔔 2025 여름수련회 8월 29일(금) ~ 31일(일)
      </span>
    </div>
  )
}
