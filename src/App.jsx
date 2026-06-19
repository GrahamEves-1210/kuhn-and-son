import { useState } from 'react'
import './App.css'

const SERVICES = [
  'Electrical',
  'Plumbing',
  'Carpentry',
  'Flooring',
  'Rot Repairs',
  'Painting',
  'Landscaping',
  'General Maintenance',
]

function TapeMeasure() {
  const ticks = []
  const total = 80, spacing = 20, w = total * spacing, h = 40
  for (let i = 0; i <= total; i++) {
    const x = i * spacing
    const big = i % 5 === 0
    const th  = big ? 24 : (i % 5 === 2 || i % 5 === 3) ? 14 : 8
    ticks.push(<line key={`t${i}`} x1={x} y1={h} x2={x} y2={h - th} stroke="#222" strokeWidth={big ? 2 : 1} />)
    if (big && i > 0) ticks.push(
      <text key={`n${i}`} x={x - 6} y={h - 27} fontSize="10"
        fontFamily="'Courier New', monospace" fontWeight="bold" fill="#333">{i / 5}</text>
    )
  }
  return (
    <div className="tape" aria-hidden="true">
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice">
        <rect width={w} height={2} fill="#222" />
        {ticks}
      </svg>
    </div>
  )
}

function Home() {
  return (
    <div className="home-layout">
      <div className="home-text">
        <p className="home-lead">
          Family-owned handyman services for your home or business.
          Serving the South Metro Atlanta Crescent for over six years.
        </p>
        <p>
          Donald Kuhn handles everything from electrical and plumbing
          to carpentry, painting, rot repairs, and general maintenance.
          Licensed, fully insured, and based right here in Peachtree City.
        </p>
        <p className="home-cta">
          Call us today: <a href="tel:7708770089">(770) 877-0089</a>
        </p>
        <p className="home-cta-sub">
          <a href="mailto:kuhnd@bellsouth.net">kuhnd@bellsouth.net</a>
        </p>
      </div>
      <div className="home-photo">
        <img src="/IMG_4546.JPG" alt="Donald Kuhn working on a home exterior" />
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className="inner">
      <h2>Our Services</h2>
      <p>We handle a wide range of residential and commercial repairs and improvements.</p>
      <ul className="services-list">
        {SERVICES.map(s => <li key={s}>{s}</li>)}
      </ul>
      <p className="note">Let us help reduce your <em>honey-do list.</em></p>
    </div>
  )
}

function About() {
  return (
    <div className="inner">
      <h2>About Us</h2>
      <p>
        Donald Kuhn, owner and operator of Kuhn &amp; Son Home Improvements LLC,
        has been serving the South Metro Atlanta Crescent &mdash; based in Peachtree City &mdash;
        for over six years. We have completed more than 1,000 individual jobs for
        residential and commercial customers throughout the area.
      </p>
      <p>
        Donald holds an FAA Certified A&amp;P Technician credential. The same
        attention to detail required in aviation maintenance goes into every job we take on.
      </p>
      <p>
        Licensed, fully insured, and ready to help. Whether it is a quick repair or
        a bigger project, we will treat your home like our own.
      </p>
    </div>
  )
}

function Contact() {
  return (
    <div className="inner contact">
      <h2>Contact Us</h2>
      <p>Give us a call or send us an email &mdash; we would love to hear from you.</p>
      <p className="big-phone"><a href="tel:7708770089">(770) 877-0089</a></p>
      <p><a href="mailto:kuhnd@bellsouth.net">kuhnd@bellsouth.net</a></p>
      <hr />
      <p className="contact-detail">Kuhn &amp; Son Home Improvements, LLC</p>
      <p className="contact-detail">Peachtree City, GA &nbsp;&middot;&nbsp; Licensed &amp; Fully Insured</p>
    </div>
  )
}

const PAGES = { home: Home, services: Services, about: About, contact: Contact }

export default function App() {
  const [page, setPage] = useState('home')
  const Page = PAGES[page]

  function go(p) {
    setPage(p)
    window.scrollTo(0, 0)
  }

  return (
    <div className="page">
      <div className="header">
        <h1>Kuhn &amp; Son Home Improvements, LLC</h1>
        <p className="tagline">Honesty &nbsp;&middot;&nbsp; Reliability &nbsp;&middot;&nbsp; Integrity</p>
        <p className="header-info">
          Licensed &amp; Fully Insured &nbsp;|&nbsp; Peachtree City, GA
        </p>
      </div>

      <nav className="nav">
        {[['home','Home'],['services','Services'],['about','About Us'],['contact','Contact']].map(([key, label]) => (
          <a key={key} href="#" className={page === key ? 'active' : ''}
            onClick={e => { e.preventDefault(); go(key) }}>{label}</a>
        ))}
      </nav>

      <TapeMeasure />

      <div className="content">
        <Page />
      </div>

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Kuhn &amp; Son Home Improvements, LLC &nbsp;&middot;&nbsp; Licensed &amp; Fully Insured</p>
        <p>Serving the South Metro Atlanta Crescent &nbsp;&middot;&nbsp; Peachtree City, GA</p>
      </div>
    </div>
  )
}
