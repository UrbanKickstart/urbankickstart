import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import AboutPhoto from "./components/AboutPhoto";
import Media from "./components/Media";
import PhotoGrid from "./components/PhotoGrid";
import HeroSlideshow from "./components/HeroSlideshow";
import events from "./data/events";
import experiences from "./data/experiences";
import {
  MEETUP_URL,
  CONTACT_EMAIL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "./data/site";

function upcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}

export default function Home() {
  const upcoming = upcomingEvents();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroSlideshow />
        <div className="wrap hero-content">
          <h1>
            Get to know <span className="font-display">the real</span>{" "}
            Amsterdam.
          </h1>
          <p className="hero-topics">
            History · Trends · Neighborhoods · Culture · Subcultures · Yearly &
            Occasional Events · Places · Courses · Memberships
          </p>
          <div className="hero-actions">
            <a className="btn btn-ghost" href="#how">
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Audience hook — checklist */}
      <section className="section hook">
        <div className="wrap narrow center">
          <h2 className="hook-title">
            New in Amsterdam as an international professional or partner?
          </h2>
          <ul className="checklist">
            <li className="check done">
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="var(--accent)" />
                <path
                  d="M7 12.5l3.2 3.2L17 9"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="label">Job — started</span>
            </li>
            <li className="check done">
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="var(--accent)" />
                <path
                  d="M7 12.5l3.2 3.2L17 9"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="label">A place to live — sorted</span>
            </li>
            <li className="check open">
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="10.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
              </svg>
              <span className="label">Social &amp; cultural kickstart — not yet</span>
            </li>
          </ul>
          <p className="hook-text">
            That last box is exactly what{" "}
            <span className="hl">Urban Kickstart</span> is here for.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section section-alt">
        <div className="wrap">
          <h2>How it works</h2>
          <ol className="steps">
            <li className="step">
              <span className="step-num">1</span>
              <h3>Sign up on Meetup</h3>
              <p>Pick an upcoming mini meetup and reserve your spot in a few clicks.</p>
            </li>
            <li className="step">
              <span className="step-num">2</span>
              <h3>Meet in the city</h3>
              <p>
                I meet with just 1–3 people at a coffee place or bar. We sit
                down at a table and I bring my laptop with all the relevant
                info. It's a relaxed but genuinely informative session —
                personal, and fully tailored to your interests and what you're
                looking for.
              </p>
            </li>
            <li className="step">
              <span className="step-num">3</span>
              <h3>Pay what you feel</h3>
              <p>Afterwards, contribute whatever the session was worth to you. No fixed price.</p>
            </li>
          </ol>
          <div className="center">
            <a className="btn" href={MEETUP_URL} target="_blank" rel="noreferrer">
              Join a mini meetup
            </a>
          </div>
        </div>
      </section>

      {/* Handwritten quote interlude */}
      <section className="interlude">
        <div className="wrap narrow">
          <p className="font-handwritten interlude-quote">
            “Would recommend to anyone who feels a bit lost in Amsterdam — or
            who wants to connect on a deeper level than just having drinks.”
          </p>
          <p className="interlude-attr">— Arthur</p>
        </div>
      </section>

      {/* What we cover */}
      <section id="cover" className="section">
        <div className="wrap">
          <h2>What we cover</h2>
          <p className="section-intro">
            An intimate session with just <strong>1–3 people</strong>, running
            for <strong>1 hour 45 minutes</strong> — long enough to cover the
            essentials and dive into what's relevant to you.
          </p>
          <div className="cover-grid">
            <div className="cover-card">
              <h3>The essentials</h3>
              <p className="cover-sub">A quick, honest grounding in the city:</p>
              <ul className="ticks">
                <li>History</li>
                <li>Trends</li>
                <li>Neighborhoods</li>
                <li>Culture</li>
                <li>Subcultures</li>
              </ul>
            </div>
            <div className="cover-card">
              <h3>Tailored to you</h3>
              <p className="cover-sub">
                Then I tailor the rest to your life and interests:
              </p>
              <ul className="ticks">
                <li>Yearly &amp; occasional events</li>
                <li>Places</li>
                <li>Courses</li>
                <li>Memberships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Emma — mindmap */}
      <section id="about" className="section section-alt">
        <div className="wrap center">
          <h2>Hi, I'm Emma</h2>
          <div className="mindmap">
            <svg
              className="mm-lines"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="50" y1="50" x2="18" y2="18" />
              <line x1="50" y1="50" x2="82" y2="18" />
              <line x1="50" y1="50" x2="9" y2="50" />
              <line x1="50" y1="50" x2="91" y2="50" />
              <line x1="50" y1="50" x2="22" y2="84" />
              <line x1="50" y1="50" x2="78" y2="84" />
            </svg>
            <div className="mm-center">
              <div className="mm-photo">
                <AboutPhoto />
              </div>
              <span className="mm-name">Emma</span>
            </div>
            <div className="mm-node n1">Born &amp; raised local</div>
            <div className="mm-node n2">International mindset</div>
            <div className="mm-node n3">Double Master's</div>
            <div className="mm-node n4">Strategy + people</div>
            <div className="mm-node n5">Culture &amp; city trends</div>
            <div className="mm-node n6">Here to connect people</div>
          </div>
          <p className="mm-caption">
            I run Urban Kickstart on a{" "}
            <strong className="hl">pay-what-you-feel</strong> basis — because
            connecting with your city shouldn't depend on your budget.
          </p>
        </div>
      </section>

      {/* Meetups + agenda */}
      <section id="meetups" className="section">
        <div className="wrap">
          <h2>Upcoming mini meetups</h2>
          <p className="section-intro">
            Sessions happen on an occasional basis. The full, always-current
            list lives on Meetup — that's the place to sign up.
          </p>

          {upcoming.length > 0 ? (
            <ul className="agenda">
              {upcoming.map((e, i) => (
                <li key={i} className="agenda-item">
                  <div className="agenda-date">
                    <span className="agenda-day">{formatDate(e.date)}</span>
                    {e.time && <span className="agenda-time">{e.time}</span>}
                  </div>
                  <div className="agenda-body">
                    <strong>{e.title}</strong>
                    {e.location && <span className="agenda-loc">{e.location}</span>}
                  </div>
                  {e.url && (
                    <a
                      className="agenda-link"
                      href={e.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sign up →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="agenda-empty">
              Nothing on the calendar right this moment. Follow the Meetup group
              below to be the first to know when the next one drops.
            </p>
          )}

          <div className="center">
            <a className="btn" href={MEETUP_URL} target="_blank" rel="noreferrer">
              See all meetups & sign up
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="wrap">
          <h2>What people say</h2>
          <Testimonials />
          <PhotoGrid items={experiences} title="Moments from the meetups" />
        </div>
      </section>

      {/* Media */}
      <Media />

      {/* For companies */}
      <section className="section section-alt">
        <div className="wrap narrow center">
          <h2>Hiring international talent?</h2>
          <p>
            In the future I'd love to work with a company that welcomes people
            from all over the world. If you'd like your new colleagues to settle
            in faster and connect with Amsterdam, let's talk about what a fair
            collaboration could look like.
          </p>
          <a className="btn btn-ghost" href="#contact">
            Start a conversation
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="wrap narrow">
          <h2>Get in touch</h2>
          <p className="section-intro">
            A question, an idea, or just want to say hi? Drop me a message.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <span className="logo">Urban Kickstart</span>
            <p className="footer-note">
              I help international professionals and their partners connect with
              Amsterdam.
            </p>
          </div>
          <div className="footer-links">
            <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={MEETUP_URL} target="_blank" rel="noreferrer">
              Meetup
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
