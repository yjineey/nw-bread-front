'use client'

import { useState } from 'react'
import MondayPrayer from './Monday'
import TuesdayPrayer from './Tuesday'
import WednesdayPrayer from './Wednesday'
import ThursdayPrayer from './Thursday'
import FridayPrayer from './Friday'
import SaturdayPrayer from './Saturday'
import SundayPrayer from './Sunday'

const dayComponents = {
  월요일: <MondayPrayer />,
  화요일: <TuesdayPrayer />,
  수요일: <WednesdayPrayer />,
  목요일: <ThursdayPrayer />,
  금요일: <FridayPrayer />,
  '서론과 결론': <SaturdayPrayer />,
  모임용: <SundayPrayer />,
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
        {(dayComponents as any)[selectedDay]}{' '}
      </div>
    </div>
  )
}
