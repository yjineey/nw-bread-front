import '@/styles/globals.css'
import SNSHead from '@/components/SNSHead'
import HeaderSub from '@/components/HeaderSub'
import HeaderMain from '@/components/HeaderMain'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <SNSHead />
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
        <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col">
          <header className="relative z-30">
            <HeaderSub />
            <HeaderMain />
          </header>
          <main className="relative z-0 flex-1 p-2 border-b mb-12 md:mb-0">
            {children}
          </main>
          <footer className="justify-center z-30 py-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
