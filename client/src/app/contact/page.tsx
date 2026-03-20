import { companyDetails } from "@/data/company-details";

const mapSearchUrl = `https://www.google.com/maps?q=${companyDetails.coordinates.latitude},${companyDetails.coordinates.longitude}`;
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
              <strong>Address:</strong>{" "}
              <a className="contact-link" href={mapSearchUrl} target="_blank" rel="noreferrer">
                {companyDetails.address}
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
            <p className="muted text-on-surface-variant">Specialist in Cashew and Walnut Machinery</p>
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
