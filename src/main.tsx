import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'

// App imports
import '@/src/index.css'
import App from './App.tsx'
import Header from '@components/base/Header.tsx'
import { ThemeProvider } from '@context/ThemeContext.tsx'
import Footer from '@components/base/Footer.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 60 * 12
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>
            <App />
          </main>
          <Footer />
          <Toaster />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
