import './globals.css';

export const metadata = {
  title: 'Athletic Clothing & Activewear Apparel for Performance - Vuori',
  description: 'Vuori storefront mockup rebuilt with Next.js and optimized images.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
