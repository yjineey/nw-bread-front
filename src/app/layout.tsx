import '@/styles/globals.css'
import Section from '@/components/Section'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

export const metadata = {
  title: 'Newway Bread',
  description: 'Newway Church Bible App',
  openGraph: {
    type: 'website',
    siteName: 'Newway Church',
    title: 'Newway Bread',
    description: 'Newway Church Bible App',
    url: 'https://yjineey.github.io/nw-bread-front/',
    images: [
      {
        url: 'https://cdn.imweb.me/upload/S2023020869d0205dba053/94d155e4d81c7.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <head />
      <body>
        <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col">
          {/* Section (⚠️ 반드시 배경색 유지 - sticky 요소 겹침 방지) */}
          <div
            className="h-16 px-4 flex items-center justify-between border-b 
             border-gray-200 dark:border-neutral-800 
             lg:sticky lg:top-0 lg:z-20 
             bg-gray-50 dark:bg-neutral-900"
          >
            <Section />
          </div>

          {/* Header */}
          <div
            className="h-16 px-4 flex items-center justify-between border-b 
             border-gray-200 dark:border-neutral-800 
             sticky top-0 z-30 lg:top-16 lg:z-20
             bg-gray-50 dark:bg-neutral-900"
          >
            <Header />
          </div>

          {/* Main Content */}
          <main className="flex-1 flex flex-col mb-16 lg:mb-0">
            <div className="flex-1">{children}</div>

            {/* Footer 주변 여백은 여기서 명시 */}
            <div className="px-4 py-4 border-t border-gray-200 dark:border-neutral-800 ">
              <Footer />
            </div>
          </main>

          {/* 모바일 네비게이션 */}
          <div className="fixed z-20 bottom-0 left-0 right-0 h-16 p-4 border-t border-gray-200 dark:border-neutral-800  bg-neutral-900 text-gray-200 lg:hidden">
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  )
}
