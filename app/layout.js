import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ralph Dela Cruz',
  description: 'My humble portfolio/personal website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Top Fixed Bar */}
        <div className={styles.topFixedBar}></div>

        {/* LAYOUT for PAGE */}
        <div className={styles.pageLayout}>

          {/* LAYOUT for Sidebar */}
          <div className={styles.sidebarLayout}>
            <Sidebar />
          </div>

          {/* LAYOUT for Main Content */}
          <div className={styles.mainContentLayout}>
            {children}
          </div>
        </div>

        {/* Bottom Fixed Bar */}
        <div className={styles.bottomFixedBar}></div>
      </body>
    </html>
  )
}
