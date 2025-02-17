import "../globals.css";

export default function WalletLayout({ children }) {
  return (
    <section>
      {children}
      <div className="text-center text-white pt-10 pb-6">
        <p>© 2025 Dappnode. All Rights Reserved.</p>
      </div>
    </section>
  );
}
