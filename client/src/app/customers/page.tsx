import { customers } from "@/data/customers";

export default function CustomersPage() {
  const cashewCustomers = customers.filter((customer) => customer.product.includes("Cashew"));
  const walnutCustomers = customers.filter((customer) => customer.product.includes("Walnut"));

  return (
    <section className="section bg-background text-foreground">
      <div className="shell">
        <h1 className="section-title text-on-surface">Our Customers</h1>
        <p className="muted text-on-surface-variant">
          Businesses across regions trust our machinery for reliable day-to-day processing.
        </p>

        <div className="customers-grid">
          <article className="panel border-outline-variant bg-surface-container">
            <h2 className="mb-4 text-center text-xl font-semibold text-primary">
              <span className="inline-block rounded-full border border-outline-variant bg-surface px-5 py-2">
                Cashew Partners
              </span>
            </h2>
            <ul className="customers-list">
              {cashewCustomers.map((customer, index) => (
                <li key={customer.id}>
                  <span className="customer-rank">{String(index + 1).padStart(2, "0")}</span>
                  <span className="customer-name">{customer.company}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel border-outline-variant bg-surface-container">
            <h2 className="mb-4 text-center text-xl font-semibold text-primary">
              <span className="inline-block rounded-full border border-outline-variant bg-surface px-5 py-2">
                Walnut Partners
              </span>
            </h2>
            <ul className="customers-list">
              {walnutCustomers.map((customer, index) => (
                <li key={customer.id}>
                  <span className="customer-rank">{String(index + 1).padStart(2, "0")}</span>
                  <span className="customer-name">{customer.company}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
