import { AuthProvider, Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vanity",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
