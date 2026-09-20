import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { project } from "@/data/project";

const serif = Source_Serif_4({
  variable: "--font-serif-text",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${project.name}, ${project.term}`,
  description: project.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-2xl px-6 sm:px-8">
          <main className="flex-1">{children}</main>
          <footer className="border-t border-rule py-8 font-sans text-xs text-muted">
            <p>
              {project.name}. {project.team}, {project.course}, Virginia Tech,{" "}
              {project.term}.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
