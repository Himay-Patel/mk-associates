import Link from "next/link";

import { customers } from "@/data/customers";
import { companyDetails } from "@/data/company-details";
import { products } from "@/data/products";

export default function Home() {
  const cashewCount = products.filter((product) => product.type === "cashew").length;
  const walnutCount = products.filter((product) => product.type === "walnut").length;

  return (
    <>
      <section className="hero bg-surface text-foreground">
        <div className="shell hero-grid">
          <div>
            <h1 className="text-on-surface">{companyDetails.name}</h1>
            <p className="muted text-on-surface-variant">{companyDetails.tagline}</p>
            <p className="text-on-surface">{companyDetails.description}</p>

            <div className="cta-row">
              <Link className="btn primary bg-primary text-on-primary" href="/products">
                Explore Products
              </Link>
              <Link
                className="btn ghost border-outline-variant bg-surface-container-low text-on-surface"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <aside className="panel border-outline-variant bg-surface-container text-on-surface">
            <h2 className="section-title text-on-surface">Quick Contact</h2>
            <p className="muted text-on-surface-variant">Phone: {companyDetails.phone}</p>
            <p className="muted text-on-surface-variant">Email: {companyDetails.email}</p>
            <p className="muted text-on-surface-variant">Address: {companyDetails.address}</p>
          </aside>
        </div>
      </section>

      <section className="section bg-background text-foreground">
        <div className="shell stats">
          <article className="panel border-outline-variant bg-surface-container">
            <strong className="text-primary">{products.length}</strong>
            <span className="muted text-on-surface-variant">Industrial Product Lines</span>
          </article>
          <article className="panel border-outline-variant bg-surface-container">
            <strong className="text-primary">{cashewCount}</strong>
            <span className="muted text-on-surface-variant">Cashew Machine Models</span>
          </article>
          <article className="panel border-outline-variant bg-surface-container">
            <strong className="text-primary">{walnutCount}</strong>
            <span className="muted text-on-surface-variant">Walnut Machine Models</span>
          </article>
          <article className="panel border-outline-variant bg-surface-container">
            <strong className="text-primary">{customers.length}+</strong>
            <span className="muted text-on-surface-variant">Trusted Customers</span>
          </article>
        </div>
      </section>

      <section className="section bg-background text-foreground">
        <div className="shell panel border-outline-variant bg-surface-container-low">
          <h2 className="section-title text-on-surface">Category Coverage</h2>
          <p className="muted text-on-surface-variant">
            Our portfolio is organized around two processing categories to support different
            production scales and quality targets.
          </p>
          <div className="stats">
            <article className="panel border-outline-variant bg-surface">
              <h3 className="text-on-surface">Cashew Machinery</h3>
              <p className="muted text-on-surface-variant">
                {cashewCount} model(s) designed for high shelling throughput.
              </p>
            </article>
            <article className="panel border-outline-variant bg-surface">
              <h3 className="text-on-surface">Walnut Machinery</h3>
              <p className="muted text-on-surface-variant">
                {walnutCount} model(s) focused on high whole-kernel output.
              </p>
            </article>
            <article className="panel border-outline-variant bg-surface">
              <h3 className="text-on-surface">After-Sales Support</h3>
              <p className="muted text-on-surface-variant">
                Installation support and customer-first technical assistance.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
