import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { project } from "@/data/project";
import Navbar from "@/components/Navbar";

const serif = Source_Serif_4({
  variable: "--font-serif-text",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${project.name} | ${project.course}`,
  description: project.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="mx-auto w-full max-w-4xl flex-1 px-6 sm:px-8">
          <main className="py-10 sm:py-16">{children}</main>
        </div>
        <footer className="border-t border-rule py-8 font-sans text-xs text-muted">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:px-8 sm:text-left">
            <p>
              {project.name} &bull; {project.team}, {project.course}, Virginia Tech,{" "}
              {project.term}.
            </p>
            <p className="text-muted/80">
              Community Partner: <span className="text-foreground font-medium">{project.partner}</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
