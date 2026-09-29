import Link from "next/link";
export default function Header(){
  return <header className="nav">
    <Link href="/" className="brand"><span className="mark">DM</span><span>Distressed M&A</span></Link>
    <nav className="navlinks">
      <Link href="/deals">Deals</Link><Link href="/sectors">Sectors</Link><Link href="/distress-types">Distress Types</Link><Link href="/buyers">Buyers</Link><Link href="/sell-your-business">Sell Your Business</Link><Link href="/insights">Insights</Link>
    </nav>
    <div className="actions"><button className="btn">Log In</button><button className="btn dark">Request Access</button></div>
  </header>
}