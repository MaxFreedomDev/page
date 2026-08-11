export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <a
          className="instagram-logo"
          href="https://instagram.com/page21.club"
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram @page21.club"
        >
          <svg aria-hidden="true" viewBox="0 0 64 64">
            <rect
              x="12"
              y="12"
              width="40"
              height="40"
              rx="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
            />
            <circle
              cx="32"
              cy="32"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
            />
            <circle cx="45" cy="19" r="2.5" fill="currentColor" />
          </svg>
        </a>

        <a className="wordmark" href="#top" aria-label="page 21 — наверх">
          page 21
        </a>

        <div className="hero-content">
          <p className="eyebrow">Книжный клуб без рамок и дедлайнов</p>

          <h1 id="hero-title">
            Страница <span>21</span>
            <br />
            После которой
            <br />
            начинается
            <br />
            всё самое
            <br />
            <em>интересное</em>
          </h1>

          <div className="story-copy">
            <p className="story-accent">
              Перешагните барьер первых страниц
              <br />
              вместе с нами
            </p>
          </div>

          <a className="secondary-action" href="#join">
            <span>Узнать, как всё устроено</span>
          </a>

          <a className="primary-action" href="#join">
            Присоединиться
            <br />к клубу
          </a>
        </div>
      </section>
      <div id="join" aria-hidden="true" />
    </main>
  );
}
