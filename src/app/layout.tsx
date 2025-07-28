import '@/styles/globals.css'
import Section from '@/components/Section'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Newway Bread', // 브라우저 탭에 표시될 제목
  description: 'Newway Church Bible App',
  openGraph: {
    // sns공유시 표시될 정보
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(_) {}
              })();
            `,
          }}
        />
      </head>

      {/* ⚠️ 이 페이지는 레이아웃 전용 스타일이며, 전역 CSS는 작성하지 않습니다. */}
      <body>
        <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col">
          {/* Section (모바일 고정, PC 스크롤 시 사라짐) */}
          <div
            className="h-16 px-4 flex items-center justify-between border-b 
                sticky top-0 z-30 bg-white dark:bg-neutral-900 
                md:relative md:z-20"
          >
            <Section />
          </div>

          {/* Header (PC 고정, 모바일에서는 스크롤 시 사라짐) */}
          <div
            className="h-16 px-4 flex items-center justify-between border-b 
                sticky top-0 z-20 bg-white dark:bg-neutral-900 
                md:sticky md:top-0 md:z-30 
                [@media(max-width:767px)]:static"
          >
            <Header />
          </div>

          <main className="flex-1 overflow-y-auto md:pb-0 pb-16">
            {children}
          </main>

          {/* Footer (모바일 고정 h-16, PC는 자동 높이, 일반 배치) */}
          <footer
            className="border-t z-30 
                     fixed bottom-0 w-full h-16 
                     md:static md:h-auto md:w-auto"
          >
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
