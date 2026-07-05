import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import AboutPhoto from "./components/AboutPhoto";
import Media from "./components/Media";
import PhotoGrid from "./components/PhotoGrid";
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
      {/* Header */}
      <header className="site-header">
        <div className="wrap header-inner">
          <span className="logo">Urban Kickstart</span>
          <nav>
            <a href="#about">About</a>
            <a href="#meetups">Meetups</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-small" href={MEETUP_URL} target="_blank" rel="noreferrer">
              Join on Meetup
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <h1>Get to know the real Amsterdam.</h1>
          <p className="lead">
            Small meetups for international professionals and their partners
            settling into Amsterdam — connect with the city, and with each
            other, guided by me, a born-and-raised local.
          </p>
          <div className="hero-actions">
            <a className="btn" href={MEETUP_URL} target="_blank" rel="noreferrer">
              Join a mini meetup
            </a>
            <a className="btn btn-ghost" href="#how">
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Meet Emma */}
      <section id="about" className="section">
        <div className="wrap about-grid">
          <div className="about-photo">
            <AboutPhoto />
          </div>
          <div className="about-text">
            <h2>Hi, I'm Emma</h2>
            <p>
              Born and raised in Amsterdam, with an international mindset and a
              double Master's. For as long as I can remember, friends have come
              to me for the best of the city — where to go, what's on, who to
              meet.
            </p>
            <p>
              Over time I started doing this for international professionals and
              their partners too: the people who need it most when they arrive
              somewhere new — capable and accomplished, but still finding their
              footing. I know that feeling myself.
            </p>
            <p>
              I believe everyone deserves to genuinely connect with the place
              they live, and that it shouldn't depend on your budget. So for now
              I run Urban Kickstart on a{" "}
              <strong className="hl">pay-what-you-feel</strong> basis: you join a
              mini meetup, we explore the city together, and afterwards you
              contribute whatever it was worth to you.
            </p>
          </div>
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
                Join me and a few fellow internationals at a café — for the
                neighbourhoods, the culture, and the spots worth knowing.
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

      {/* What we cover */}
      <section id="cover" className="section">
        <div className="wrap">
          <h2>What we cover</h2>
          <p className="section-intro">
            Each mini meetup runs for <strong>1 hour 45 minutes</strong> — long
            enough to cover the essentials and dive into what's relevant to you.
          </p>
          <div className="cover-grid">
            <div className="cover-card">
              <h3>The essentials</h3>
              <p className="cover-sub">A quick, honest grounding in the city:</p>
              <ul className="ticks">
                <li>Amsterdam's history</li>
                <li>Current trends</li>
                <li>Culture</li>
                <li>Subcultures</li>
                <li>The neighbourhoods</li>
              </ul>
            </div>
            <div className="cover-card">
              <h3>Tailored to you</h3>
              <p className="cover-sub">
                Then I tailor the rest to your life and interests:
              </p>
              <ul className="ticks">
                <li>Annual &amp; one-off events</li>
                <li>Courses &amp; workshops</li>
                <li>Places worth your time</li>
                <li>Subscriptions &amp; memberships worth having</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meetups + agenda */}
      <section id="meetups" className="section section-alt">
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

      {/* Impressions of Amsterdam */}
      <Gallery />

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
