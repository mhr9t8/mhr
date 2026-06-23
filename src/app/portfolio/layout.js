export const metadata = { title: "Portfolio" };

export default function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-6xl mx-auto">
      <main>{children}</main>
    </div>
  );
}
