"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { companyDetails } from "@/data/company-details";

type SubmenuItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: SubmenuItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    hasSubmenu: true,
    submenuItems: [
      { label: "Cashew", href: "/products?category=cashew" },
      { label: "Walnut", href: "/products?category=walnut" },
    ],
  },
  { label: "Customers", href: "/customers" },
  { label: "Contact", href: "/contact" },
];

function NavLink({
  href,
  label,
  isActive,
  activeVariant = "primary",
  onNavigate,
}: {
  href: string;
  label: string;
  isActive: boolean;
  activeVariant?: "primary" | "secondary";
  onNavigate?: () => void;
}) {
  const activeClasses =
    activeVariant === "secondary"
      ? "bg-secondary-container text-on-secondary-container"
      : "bg-primary-container text-on-primary-container";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={`text-on-surface hover:bg-surface-container ${
        isActive ? activeClasses : ""
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const productsGroupRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProductsMenuOpen(false);
  };

  const isPathActive = (hrefPath: string) => {
    if (hrefPath === "/") {
      return pathname === "/";
    }

    return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
  };

  const isHrefActive = (href: string) => {
    const [hrefPath, queryString] = href.split("?");

    if (!isPathActive(hrefPath)) {
      return false;
    }

    if (!queryString) {
      return true;
    }

    const targetParams = new URLSearchParams(queryString);

    for (const [key, value] of targetParams.entries()) {
      if (searchParams.get(key) !== value) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    if (!productsMenuOpen) {
      return;
    }

    const onClickOutside = (event: MouseEvent) => {
      if (productsGroupRef.current && !productsGroupRef.current.contains(event.target as Node)) {
        setProductsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [productsMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen && !productsMenuOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, [mobileMenuOpen, productsMenuOpen]);

  return (
    <header className="site-header border-outline-variant bg-surface/90 text-on-surface">
      <div className="shell nav-wrap">
        <Link
          href="/"
          className="brand text-on-surface"
          aria-label={`${companyDetails.name} home`}
          onClick={closeMenus}
        >
          <span className="brand-mark relative overflow-hidden">
            {companyDetails.logo ? (
              <Image
                src={companyDetails.logo}
                alt={`${companyDetails.name} logo`}
                fill
                sizes="52px"
                className="object-contain"
                priority
              />
            ) : (
              <span className="grid h-full w-full place-items-center rounded-[0.6rem] bg-primary text-on-primary">
                MK
              </span>
            )}
          </span>
          <span>
            <strong>{companyDetails.name}</strong>
            <small className="text-on-surface-variant">{companyDetails.tagline}</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle text-on-surface"
          aria-label="Toggle navigation menu"
          aria-controls="main-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <nav
          id="main-navigation"
          className={mobileMenuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = item.hasSubmenu
              ? item.submenuItems?.some((submenuItem) => isHrefActive(submenuItem.href)) ||
                isPathActive(item.href)
              : isHrefActive(item.href);

            if (item.hasSubmenu && item.submenuItems) {
              return (
                <div key={item.href} ref={productsGroupRef} className="nav-group">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={productsMenuOpen}
                    onClick={() => setProductsMenuOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 text-on-surface hover:bg-surface-container ${
                      isActive ? "active bg-primary-container text-on-primary-container" : ""
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`submenu ${productsMenuOpen ? "is-open" : ""}`}
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.submenuItems.map((submenuItem) => {
                      const isSubActive = isHrefActive(submenuItem.href);

                      return (
                        <NavLink
                          key={submenuItem.href}
                          href={submenuItem.href}
                          label={submenuItem.label}
                          isActive={isSubActive}
                          activeVariant="secondary"
                          onNavigate={closeMenus}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive}
                onNavigate={closeMenus}
              />
            );
          })}
        </nav>
      </div>
    </header>
  );
}
