import { http, HttpResponse } from 'msw'

import { GetDayRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDayRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 2000 },
    { date: '01/02/2025', receipt: 3000 },
    { date: '01/03/2025', receipt: 4000 },
    { date: '01/04/2025', receipt: 5000 },
    { date: '01/05/2025', receipt: 6000 },
    { date: '01/06/2025', receipt: 7000 },
    { date: '01/07/2025', receipt: 8000 },
  ])
})
