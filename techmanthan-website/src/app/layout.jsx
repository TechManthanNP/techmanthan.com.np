import "../styles/globals.scss";

export const metadata = {
  title: "Tech Manthan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}