import '@/styles/globals.css'
import ThemeToggle from '@/components/ThemeToggle'

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
        <header className="p-4 border-b flex justify-between">
          <span className="font-bold">BREAD 프로젝트</span>
          <ThemeToggle />
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 border-t-2 text-sm text-center">
          푸터 영역
        </footer>
      </body>
    </html>
  )
}
