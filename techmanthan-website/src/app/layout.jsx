import "../styles/globals.scss";

export const metadata = {
  title: 'Company Website',
  description: 'Welcome to our official site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}