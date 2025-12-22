import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ravindra | Full Stack Developer",
  description: "Full stack developer portfolio",
  openGraph: {
    title: "Ravindra | Full Stack Developer",
    description: "Projects, skills and experience",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
