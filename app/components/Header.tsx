import logo from "../assets/heroSection/logo-c.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <img src={logo} alt="Chaabi Logo" className="w-100" />
      <nav className="space-x-8 text-black">
        <a href="/" className="hover:text-blue-900">Features</a>
        <a href="/" className="hover:text-blue-900">Testimonials</a>
        <a href="/" className="text-blue-700 hover:text-blue-900">Start Free Trial</a>
      </nav>
    </header>
  );
}
