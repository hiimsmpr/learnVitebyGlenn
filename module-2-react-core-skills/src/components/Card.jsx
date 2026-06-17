export default function Card({ title, children }) {
  return (
    <section className="card">
      {/* Reusable card wraps different content with a consistent layout. */}
      <h2>{title}</h2>
      {children}
    </section>
  )
}
