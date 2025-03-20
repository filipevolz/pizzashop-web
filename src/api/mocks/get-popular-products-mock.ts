import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Product A', amount: 100 },
    { product: 'Product B', amount: 80 },
    { product: 'Product C', amount: 60 },
    { product: 'Product D', amount: 40 },
    { product: 'Product E', amount: 20 },
  ])
})
