
export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#080808', color:'white', padding:'40px 20px'}}>
      <div style={{maxWidth:'1200px', margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'60px'}}>
          <h1 style={{fontSize:'28px', fontWeight:900, letterSpacing:'-1px'}}>MULTY</h1>
          <span style={{border:'1px solid #333', padding:'8px 16px', borderRadius:'20px', fontSize:'12px'}}>Muscat, Oman</span>
        </div>

        <h2 style={{fontSize:'56px', fontWeight:900, lineHeight:'0.9', marginBottom:'40px'}}>Premium<br/>Rentals in<br/><span style={{color:'#666'}}>Muscat</span></h2>

        <div style={{background:'#141414', border:'1px solid #222', borderRadius:'24px', padding:'24px', maxWidth:'400px'}}>
          <div style={{height:'200px', background:'#1e1e1e', borderRadius:'16px', marginBottom:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'48px'}}>🏢</div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontSize:'18px', fontWeight:700}}>The Modeva C-412</div>
              <div style={{color:'#888', fontSize:'13px', marginTop:'4px'}}>90m² • 3BR • 6F • Al Mouj</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:'20px', fontWeight:800}}>$2000</div>
              <div style={{fontSize:'10px', color:'#888'}}>YEARLY</div>
            </div>
          </div>
          <a href="https://wa.me/96890000000" style={{display:'block', background:'white', color:'black', textAlign:'center', padding:'14px', borderRadius:'12px', marginTop:'16px', fontWeight:700}}>Contact on WhatsApp</a>
        </div>

        <div style={{marginTop:'40px', color:'#22c55e', fontSize:'14px'}}>✅ Build fixed — no Tailwind, 100% working</div>
      </div>
    </div>
  )
}
