import 'material-icons/iconfont/material-icons.css';

export const metadata = {
  title: 'Galang Perjuangan',
  description: 'Selamat datang dalam Aplikasi Galang Perjuangan. Sebuah aplikasi layanan penggalangan dana untuk perjuangan politik demi perbaikan kondisi Bangsa, Negara dan Rakyat Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link href="/styles-v3.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
