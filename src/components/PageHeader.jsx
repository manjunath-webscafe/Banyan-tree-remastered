export default function PageHeader({ title, subtitle, description }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-content">
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
          <h1 className="page-title">{title}</h1>
          {description && <p className="page-description">{description}</p>}
        </div>
      </div>
    </section>
  );
}
