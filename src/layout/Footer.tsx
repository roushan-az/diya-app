import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <img src="/images/diya-logo.png" alt="DesiDazzle" />
          <p>
            Authentic taste of Mithila, delivered with care.
          </p>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>Shop All</li>
            <li>Makhana</li>
            <li>Flours</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Returns & Cancellation</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social</h4>
          <div className="social-icons">
            <span>f</span>
            <span>📷</span>
            <span>▶</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Diya International · Powered by Tour Planner
      </div>

    </footer>
  );
}
