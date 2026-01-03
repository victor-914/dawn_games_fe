import ThemeRegistry from './ThemeRegistry'
import Footer from './components/layout/footer'
import Navbar from './components/layout/navbar'

export const metadata = { title: 'DawnGames', description: 'Next Gen Gaming' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}