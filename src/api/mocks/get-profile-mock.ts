import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMonk = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 123-456-7890',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
