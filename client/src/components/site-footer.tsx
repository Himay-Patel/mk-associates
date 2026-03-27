import Link from "next/link";

import { companyDetails } from "@/data/company-details";

const phoneHref = `tel:${companyDetails.phone.replace(/\s+/g, "")}`;
const emailHref = `mailto:${companyDetails.email}`;

export function SiteFooter() {
  return (
    <footer className="site-footer border-outline-variant bg-surface-container-low text-on-surface">
      <div className="shell footer-grid">
        <div>
          <h3>{companyDetails.name}</h3>
          <p className="text-on-surface-variant">{companyDetails.tagline}</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            <span className="footer-link-label" aria-label="Products">Products</span>
            <div className="footer-sub-links" aria-label="Product categories">
              <Link href="/products?category=cashew">Cashew</Link>
              <Link href="/products?category=walnut">Walnut</Link>
            </div>
            <Link href="/customers">Customers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="contact-item">
            <a className="contact-link" href={phoneHref}>
              {companyDetails.phone}
            </a>
          </p>
          <p className="contact-item">
            <a className="contact-link" href={emailHref}>
              {companyDetails.email}
            </a>
          </p>
          <p className="contact-item">
            {companyDetails.officeAddress}
          </p>
        </div>
      </div>
      <div className="shell footer-copy">
        <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
