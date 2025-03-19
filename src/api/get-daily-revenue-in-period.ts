import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDayRevenueInPeriodResponse = {
  data: string
  receipt: number
}[]
export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDayRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: { from, to },
    },
  )

  return response.data
}
