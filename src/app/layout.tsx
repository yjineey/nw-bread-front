import '@/styles/globals.css'
import Section from '@/components/Section'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  openGraph: {
    type: 'website',
    siteName: '뉴웨이교회',
    title: 'NEWWAY BREAD',
    description: '뉴웨이교회 성경 어플입니다',
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
      <body>
        <body>
          <div className="max-w-screen-lg mx-auto h-screen flex flex-col overflow-hidden">
            <div className="sticky top-0 z-30 h-16 px-4 flex items-center justify-between border-b">
              <Section />
            </div>

            <div className="h-16 px-4 z-30 flex items-center justify-between border-b">
              <Header />
            </div>

            <main className="flex-1 overflow-y-auto md:pb-0">{children}</main>

            <footer className="h-16 md:h-auto  flex items-center justify-center border-t z-30">
              <Footer />
            </footer>
          </div>
        </body>
      </body>
    </html>
  )
}
