import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/themes/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
