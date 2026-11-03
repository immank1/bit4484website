"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { project } from "@/data/project";

export default function Navbar() {
  const pathname = usePathname();
  const [docsOpen, setDocsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDocsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDocsOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDocsOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about-us" || pathname === "/about";
  const isDocsActive = pathname.startsWith("/documents");

  const docLinks = [
    {
      label: "Meeting Minutes",
      href: "/documents/meeting-minutes",
      badge: "Minutes",
      category: "Logs",
    },
    {
      label: "Project Charter",
      href: "/documents/project-charter",
      badge: "Charter",
      category: "Project Docs",
    },
    {
      label: "Project Scope Statement",
      href: "/documents/scope-statement",
      badge: "Scope",
      category: "Deliverables",
    },
    {
      label: "Project Schedule",
      href: "/documents/project-schedule",
      badge: "Schedule",
      category: "Deliverables",
    },
    {
      label: "Performance Report",
      href: "/documents/performance-report",
      badge: "Status",
      category: "Deliverables",
    },
    {
      label: "Risk Analysis",
      href: "/documents/risk-analysis",
      badge: "Risk",
      category: "Deliverables",
    },
    {
      label: "Communication Management Plan",
      href: "/documents/communication-management-plan",
      badge: "Plan",
      category: "Project Docs",
    },
    {
      label: "Summary of Communications",
      href: "/documents/summary-of-communications",
      badge: "Comms",
      category: "Project Docs",
    },
    {
      label: "Risk Analysis Presentation",
      href: "/documents/risk-analysis-presentation",
      badge: "PPTX",
      category: "Deliverables",
    },
    {
      label: "Stakeholders Register",
      href: "/documents/stakeholders",
      badge: "Register",
      category: "Project Docs",
    },
    {
      label: "Team Contract",
      href: "/documents/team-contract",
      badge: "Contract",
      category: "Project Docs",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-rule/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Title */}
        <Link
          href="/"
          className="group flex flex-col transition hover:opacity-90 focus-visible:outline-none"
        >
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
            {project.name}
          </span>
          <span className="font-sans text-[11px] tracking-wide text-muted">
            {project.team} &bull; {project.course}
          </span>
        </Link>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden items-center gap-1 font-sans text-sm md:flex" aria-label="Main Navigation">
          {/* Overview Tab */}
          <Link
            href="/"
            className={`rounded-md px-3.5 py-2 transition font-medium ${
              isHomeActive
                ? "bg-accent/10 text-accent font-semibold"
                : "text-muted hover:bg-neutral-100 hover:text-foreground"
            }`}
          >
            Overview
          </Link>

          {/* About Us Tab */}
          <Link
            href="/about-us"
            className={`rounded-md px-3.5 py-2 transition font-medium ${
              isAboutActive
                ? "bg-accent/10 text-accent font-semibold"
                : "text-muted hover:bg-neutral-100 hover:text-foreground"
            }`}
          >
            About Us
          </Link>

          {/* Documents Tab with Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDocsOpen(true)}
          >
            <Link
              href="/documents"
              onClick={() => setDocsOpen(false)}
              aria-expanded={docsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 rounded-md px-3.5 py-2 transition font-medium cursor-pointer ${
                isDocsActive
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-muted hover:bg-neutral-100 hover:text-foreground"
              }`}
            >
              <span>Documents</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  docsOpen ? "rotate-180 text-accent" : "text-muted"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {docsOpen && (
              <div
                onMouseLeave={() => setDocsOpen(false)}
                className="absolute right-0 mt-1.5 w-80 origin-top-right rounded-lg border border-rule bg-background p-1.5 shadow-lg shadow-neutral-900/5 focus:outline-none transition-all animate-in fade-in zoom-in-95 duration-100 max-h-[min(82vh,560px)] overflow-y-auto"
                role="menu"
              >
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-rule/50 mb-1">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted/80">
                    Documents Hub
                  </span>
                  <Link
                    href="/documents"
                    role="menuitem"
                    onClick={() => setDocsOpen(false)}
                    className="text-[11px] font-medium text-accent hover:underline"
                  >
                    All Documents Page &rarr;
                  </Link>
                </div>
                <div className="space-y-0.5">
                  {docLinks.map((item) => {
                    const isItemActive = pathname === item.href;
                    const isMeetingMinutes = item.href === "/documents/meeting-minutes";
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setDocsOpen(false)}
                        className={`flex items-center justify-between rounded-md px-3 py-2 text-xs transition ${
                          isMeetingMinutes
                            ? isItemActive
                              ? "bg-accent/15 font-semibold text-accent"
                              : "bg-accent/5 font-medium text-accent hover:bg-accent/10"
                            : isItemActive
                            ? "bg-accent/10 font-semibold text-accent"
                            : "text-foreground hover:bg-neutral-100 hover:text-accent"
                        }`}
                      >
                        <span className="truncate pr-2 flex items-center gap-1.5">
                          {isMeetingMinutes && (
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                          )}
                          {item.label}
                        </span>
                        <span
                          className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-mono font-medium ${
                            isMeetingMinutes
                              ? "bg-accent/20 text-accent font-semibold"
                              : isItemActive
                              ? "bg-accent text-white"
                              : "bg-neutral-100 text-muted"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-rule text-muted hover:text-foreground md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-rule bg-background px-6 py-4 md:hidden font-sans text-sm space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block rounded-md px-3 py-2 ${
              isHomeActive ? "bg-accent/10 font-semibold text-accent" : "text-foreground"
            }`}
          >
            Overview
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block rounded-md px-3 py-2 ${
              isAboutActive ? "bg-accent/10 font-semibold text-accent" : "text-foreground"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/documents"
            onClick={() => setMobileMenuOpen(false)}
            className={`block rounded-md px-3 py-2 ${
              isDocsActive ? "bg-accent/10 font-semibold text-accent" : "text-foreground"
            }`}
          >
            Documents Hub
          </Link>

          <div className="pt-2">
            <div className="flex items-center justify-between px-3 text-xs font-semibold uppercase tracking-wider text-muted">
              <span>Quick Document Access</span>
              <span className="text-[10px] text-accent font-medium">11 Files</span>
            </div>
            <div className="mt-1 space-y-0.5 pl-2 max-h-72 overflow-y-auto">
              {docLinks.map((item) => {
                const isMeetingMinutes = item.href === "/documents/meeting-minutes";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-xs ${
                      pathname === item.href
                        ? "bg-accent/10 font-semibold text-accent"
                        : isMeetingMinutes
                        ? "text-accent font-medium bg-accent/5"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-mono text-muted">
                      {item.badge}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
