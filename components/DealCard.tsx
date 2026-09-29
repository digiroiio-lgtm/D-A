import Link from "next/link";import type {Deal} from "../lib/deals";
export default function DealCard({deal}:{deal:Deal}){return <article className="card">
  <div className="cardImg" style={{backgroundImage:`url('${deal.image}')`}}><span className="badge">Confidential</span><span className="dealId">{deal.id}</span></div>
  <div className="cardBody"><h3 className="cardTitle">{deal.project}</h3><div className="muted">{deal.industry} &nbsp; | &nbsp; {deal.region}</div>
  <div className="metrics"><div><strong>{deal.revenue}</strong>Revenue</div><div><strong>{deal.ebitda}</strong>EBITDA</div><div><strong>{deal.dealType}</strong>Deal Type</div><div><strong>{deal.distress}</strong>Distress Type</div></div>
  <div style={{marginTop:16}}><Link className="btn dark" href={`/deals/${deal.slug}`}>View Opportunity →</Link></div></div>
</article>}