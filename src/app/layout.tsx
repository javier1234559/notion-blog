
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from 'next'
import { Rubik, Space_Grotesk, Space_Mono } from 'next/font/google'
import '../styles/globals.scss';
import Footer from "@/components/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-space_grotesk',
})
const space_mono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-space_mono',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-rubik',
})


export const metadata: Metadata = {
  metadataBase: new URL("http://weebuns.social"),
  title: {
    default: "Weebuns Blog",
    template: `%s | Weebuns Blog`
  },
  keywords: ["weebuns ", "weebuns social", "blog", "học tiếng anh", "học lập trình", "thói quen tốt", "good habbit"],
  description: 'Nơi bọn mình cùng học hỏi, chia sẻ kiến thức, và phát triển bản thân qua khoa học, tiếng Anh, lập trình và thói quen tích cực',
  icons: {
    icon: '/image/cat-foot.svg',
  },
  alternates: {
    canonical: `/blog/about`,
    languages: {

    }
  },
  openGraph: {
    title: 'Weebuns Blog',
    description: 'Nơi bọn mình cùng học hỏi, chia sẻ kiến thức, và phát triển bản thân qua khoa học, tiếng Anh, lập trình và thói quen tích cực',
    url: 'http://weebuns.social',
    siteName: 'Notion Blog',
    images: [
      {
        url: 'http://weebuns.social/image/og-cloudy.png',
        width: 800,
        height: 600,
        alt: 'Open gragh of website Weebuns Blog',
      },
      {
        url: 'http://weebuns.social/image/og-cloudy.png',
        width: 1800,
        height: 1600,
        alt: 'Open gragh of website Weebuns Blog',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'RuuE60_YmSMhFMX0G9g3aiNaJxPcpNSy4bw6bh0MjW0',
    other: {
      me: ['nhat1234559@gmail.com'],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="vi">
      {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000'/> */}
      <body className={`${space_grotesk.variable} ${space_mono.variable} ${rubik.variable}`}>
        <div className="flex w-full flex-col min-h-screen selection:bg-[#2cb67d] selection:text-[#fff]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
