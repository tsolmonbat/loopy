import './globals.css'; 
export const metadata = {
  title: 'ACME Store',
  description: 'The best products in the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        {children}
      </body>
    </html>
  );
}