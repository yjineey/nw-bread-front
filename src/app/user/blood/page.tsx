'use client'

import { ReactElement, useState } from 'react'
import Monday from '@/app/user/blood/Monday'
import Tuesday from '@/app/user/blood/Tuesday'
import Wednesday from '@/app/user/blood/Wednesday'
import Thursday from '@/app/user/blood/Thursday'
import Friday from '@/app/user/blood/Friday'
import Saturday from '@/app/user/blood/Saturday'
import Sunday from '@/app/user/blood/Sunday'

const dayComponents: Record<string, ReactElement> = {
  월요일: <Monday />,
  화요일: <Tuesday />,
  수요일: <Wednesday />,
  목요일: <Thursday />,
  금요일: <Friday />,
  '서론과 결론': <Saturday />,
  모임용: <Sunday />,
}

export default function PrayerPage() {
  const [selectedDay, setSelectedDay] = useState('월요일')

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-header-title">보혈 선포 기도문</h1>
      </div>

      <div className="card-box min-h-[500px] px-6 space-y-4">
        {/* 요일 선택 */}
        <div className="space-y-1">
          <select
            className="form-input w-40"
            value={selectedDay}
            onChange={e => setSelectedDay(e.target.value)}
          >
            {Object.keys(dayComponents).map(day => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        {/* 요일별 기도문 */}
        {dayComponents[selectedDay]}{' '}
      </div>
    </div>
  )
}
