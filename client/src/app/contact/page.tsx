import { companyDetails } from "@/data/company-details";

const mapSearchUrl = `https://www.google.com/maps?q=${companyDetails.coordinates.factory.latitude},${companyDetails.coordinates.factory.longitude}`;
const phoneHref = `tel:${companyDetails.phone.replace(/\s+/g, "")}`;
const emailHref = `mailto:${companyDetails.email}`;

export default function ContactPage() {
  return (
    <section className="section bg-background text-foreground">
      <div className="shell">
        <h1 className="section-title text-on-surface">Contact</h1>
        <p className="muted text-on-surface-variant">
          Reach us for machinery inquiries, pricing, and project discussions.
        </p>

        <div className="contact-grid">
          <article className="panel border-outline-variant bg-surface-container">
            <h2 className="text-primary">Office Details</h2>
            <p className="contact-item">
              <strong>Office Address:</strong> {companyDetails.officeAddress}
            </p>
            <p className="contact-item">
              <strong>Factory Address:</strong>
              {" "}
              <a className="contact-link" href={mapSearchUrl} target="_blank" rel="noreferrer">
                {companyDetails.factoryAddress}
              </a>
            </p>
            <p className="contact-item">
              <strong>Phone:</strong>{" "}
              <a className="contact-link" href={phoneHref}>
                {companyDetails.phone}
              </a>
            </p>
            <p className="contact-item">
              <strong>Email:</strong>{" "}
              <a className="contact-link" href={emailHref}>
                {companyDetails.email}
              </a>
            </p>
          </article>

          <article className="panel border-outline-variant bg-surface-container">
            <h2 className="text-primary">Business Information</h2>
            <p className="muted text-on-surface-variant">{companyDetails.tagline}</p>
            <p>
              To request quotations, share your expected processing capacity and product type
              (cashew or walnut).
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
