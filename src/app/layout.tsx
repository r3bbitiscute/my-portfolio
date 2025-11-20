import "../theme/GlobalStyle.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*This script runs before the page is displayed, 
        so the correct theme is applied instantly (avoiding a "flash" of the wrong theme).
        
        1. Try to load the saved theme from localStorage ('dark' or 'light').
        2. If nothing is saved, check the system setting using 
        window.matchMedia('(prefers-color-scheme: dark)').matches.
        - true  => system prefers dark mode
        - false => system prefers light mode
        3. Decide which theme to use: either the saved one, or the system preference.
        4. Apply it by setting <html data-theme="...">,
        which makes our CSS variables switch to the correct colors.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          padding: "20px 200px 20px 200px",
        }}>
        <header>
          <MenuBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
