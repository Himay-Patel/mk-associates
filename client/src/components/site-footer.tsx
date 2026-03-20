import Link from "next/link";

import { companyDetails } from "@/data/company-details";

const mapSearchUrl = `https://www.google.com/maps?q=${companyDetails.coordinates.latitude},${companyDetails.coordinates.longitude}`;
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
            <Link href="/products">Products</Link>
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
            <a
              className="contact-link"
              href={mapSearchUrl}
              target="_blank"
              rel="noreferrer"
            >
              {companyDetails.address}
            </a>
          </p>
        </div>
      </div>
      <div className="shell footer-copy">
        <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
