import { SanityLive } from "@/sanity/lib/live";

import "../globals.css";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="bg-white min-h-screen">
          {children}
          <SanityLive />
        </section>
      </body>
    </html>
  );
}
