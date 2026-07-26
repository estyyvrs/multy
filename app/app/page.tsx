export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#080808', color:'white', padding:'40px 20px'}}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <h1 style={{fontSize:'32px', fontWeight:900, letterSpacing:'-1px'}}>MULTY</h1>
        <h2 style={{fontSize:'56px', fontWeight:900, marginTop:'40px', lineHeight:0.9}}>Premium<br/>Rentals in<br/><span style={{color:'#555'}}>Muscat</span></h2>
        <div style={{marginTop:'30px', background:'#141414', border:'1px solid #222', borderRadius:'20px', padding:'20px', maxWidth:'360px'}}>
          <div style={{height:'160px', background:'#1e1e1e', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'40px'}}>🏢</div>
          <div style={{marginTop:'16px', fontWeight:700}}>The Modeva C-412 — $2000/year</div>
          <div style={{color:'#888', fontSize:'13px', marginTop:'4px'}}>90m² • 3BR • Al Mouj</div>
          <div style={{marginTop:'16px', background:'white', color:'black', textAlign:'center', padding:'12px', borderRadius:'10px', fontWeight:700}}>Contact on WhatsApp</div>
        </div>
        <div style={{marginTop:'20px', color:'#22c55e'}}>✅ Fixed build - TypeScript included</div>
      </div>
    </div>
  )
}
