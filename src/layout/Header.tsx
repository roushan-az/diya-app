export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <img src="/images/logo.png" alt="Diya Int." className="logo" />

        <input
          className="search"
          type="text"
          placeholder="Search for..."
        />

        <button className="account">Account</button>
        <button className="cart">Rs. 0.00 (0)</button>
      </div>

      <nav className="nav">
        <a>Shop Now</a>
        <a>Makhana</a>
        <a>Diya International</a>
        <a>Knowledge Centre</a>
        <a>About Us</a>
        <a>Contact Us</a>
      </nav>
    </header>
  );
}
