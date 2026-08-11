import type { CSSProperties } from "react";
import Image from "next/image";
import { BookCarousel } from "./BookCarousel";
import { assetPath } from "./assetPath";

const Arrow = ({ down = false }: { down?: boolean }) => (
  <span aria-hidden="true">{down ? "↓" : "↗"}</span>
);

const BrandMark = ({ light = false }: { light?: boolean }) => {
  const logoPath = assetPath("/page-logo-transparent.png");

  return (
    <span
      aria-hidden="true"
      className={`brand-mark${light ? " brand-mark-light" : ""}`}
      style={{ "--brand-mask": `url("${logoPath}")` } as CSSProperties}
    >
      <Image alt="" height={516} src={logoPath} width={1102} />
    </span>
  );
};

const principles = [
  {
    number: "01",
    title: "Не успел дочитать? okay.",
    text: "Нам интересны твои мысли, а не галочка в списке прочитанного.",
  },
  {
    number: "02",
    title: "Книга — повод посплетничать",
    text: "Мы читаем, чтобы легально обсудить персонажей и лучше понять самих себя.",
  },
  {
    number: "03",
    title: "Можно просто послушать",
    text: "Не хочется говорить или включать камеру после тяжёлого дня? Включай аудио и слушай других как уютный подкаст.",
  },
];

const format = [
  {
    index: "01",
    title: "1 месяц — 1 книга",
    text: "Читаем в комфортном для вас темпе.",
  },
  {
    index: "02",
    title: "Закрытое комьюнити",
    text: "Полезная информация, интерактивы и общение проходят в Telegram-канале и прикреплённом чате.",
  },
  {
    index: "03",
    title: "Свободный формат",
    text: "Вы сами выбираете степень вовлечённости: активно обсуждайте сюжет или просто читайте в тишине.",
  },
  {
    index: "04",
    title: "Финальный созвон",
    text: "В конце месяца собираемся на голосовой эфир в Telegram. Участие — по желанию.",
  },
  {
    index: "05",
    title: "Быстрый старт",
    text: "После оплаты ссылка-приглашение в клуб придёт на вашу электронную почту.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PAGE — наверх">
          <BrandMark />
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О клубе</a>
          <a href="#format">Как устроено</a>
          <a href="#book">Книга месяца</a>
          <a href="#moments">Атмосфера</a>
          <a href="#plans">Участие</a>
        </nav>
        <a className="header-button" href="#plans">
          Присоединиться <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-frame">
          <div className="hero-copy">
            <p className="kicker">Книжный клуб без рамок и дедлайнов</p>
            <h1 id="hero-title">
              Замедлитесь
              <br />
              <i>с книгой.</i>
              <br />
              Наполняйтесь
              <br />
              <i>с нами.</i>
            </h1>
            <p className="hero-text">
              Читаем, обсуждаем и находим в книгах чуть больше, чем сюжет.
              Без гонки, обязательных камер и правильных ответов.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#plans">
                Присоединиться к клубу <Arrow />
              </a>
              <a className="text-link" href="#about">
                Узнать, как всё устроено <Arrow down />
              </a>
            </div>
            <p className="community-count">
              <strong>128</strong> читателей уже с нами
            </p>
            <div className="hero-tags" aria-label="Коротко о клубе">
              <span>1 книга / месяц</span>
              <span>онлайн</span>
              <span>без дедлайнов</span>
            </div>
          </div>

          <div className="hero-space" aria-hidden="true">
            <figure className="hero-photo hero-photo-reading">
              <Image
                alt=""
                height={1800}
                loading="eager"
                src={assetPath("/moment-reading.jpg")}
                width={1440}
              />
              <figcaption><span>01</span> читаем в своём темпе</figcaption>
            </figure>

            <figure className="hero-photo hero-photo-friends">
              <Image
                alt=""
                height={1800}
                loading="eager"
                src={assetPath("/moment-friends.jpg")}
                width={1440}
              />
              <figcaption><span>02</span> встречаемся своими</figcaption>
            </figure>

            <div className="hero-brand-panel">
              <BrandMark />
              <span>Книжный клуб · с 2025</span>
            </div>

            <article className="hero-chat-card">
              <span>из чата клуба · 22:47</span>
              <p>«Я пришла просто послушать — и осталась спорить до полуночи»</p>
              <small>12 реакций · 8 ответов</small>
            </article>

            <p className="hero-slogan">Падайте в истории, а не в дедлайны</p>
          </div>

          <div className="quiz-strip">
            <p>Внутри клуба</p>
            <article>
              <span>01</span>
              <strong>Кто вы из персонажей этой книги по знаку зодиака?</strong>
            </article>
            <article>
              <span>02</span>
              <strong>Угадайте факт о писателе</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-intro">
          <p className="kicker">Наш подход</p>
          <h2 id="about-title">
            Не отчёт о прочитанном.
            <br />
            <i>Живой разговор.</i>
          </h2>
          <p>
            Здесь можно прийти с закладкой на середине, спорной мыслью или просто
            желанием побыть среди своих.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((item) => (
            <article className="principle-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="club-extra">
          <p className="handwritten">А ещё — интерактивы без серьёзных лиц</p>
          <div>
            <span>разборы героев</span>
            <span>голосования</span>
            <span>книжные мемы</span>
            <span>плейлисты месяца</span>
          </div>
        </div>
      </section>

      <section className="format" id="format" aria-labelledby="format-title">
        <div className="format-title">
          <p className="kicker kicker-light">От первой страницы до эфира</p>
          <h2 id="format-title">
            Как устроен
            <br />
            наш книжный клуб?
          </h2>
          <p>
            Один понятный ритм, внутри которого вы сами выбираете скорость и
            степень вовлечённости.
          </p>
        </div>
        <div className="format-list">
          {format.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BookCarousel />

      <section
        className="club-moments"
        id="moments"
        aria-labelledby="moments-title"
      >
        <div className="moments-intro">
          <div>
            <p className="kicker">Жизнь клуба · без фильтров</p>
            <h2 id="moments-title">
              Книги превращаются
              <br />
              <i>в живые истории.</i>
            </h2>
          </div>
          <div className="moments-intro-note">
            <span className="live-pill"><i /> Сейчас в клубе</span>
            <p>
              Не идеальные кадры, а настоящие моменты: заметки на полях,
              горячие споры и сообщения, после которых хочется читать дальше.
            </p>
          </div>
        </div>

        <div className="moments-cloud">
          <figure className="moment-bubble moment-bubble-friends">
            <Image
              alt="Друзья смеются во время встречи книжного клуба"
              height={1800}
              loading="lazy"
              src={assetPath("/moment-friends.jpg")}
              width={1440}
            />
            <figcaption><span>●</span> 48 сообщений после эфира</figcaption>
          </figure>

          <figure className="moment-bubble moment-bubble-reading">
            <Image
              alt="Читательница перелистывает книгу у окна"
              height={1800}
              loading="lazy"
              src={assetPath("/moment-reading.jpg")}
              width={1440}
            />
            <figcaption><span>↗</span> Тот самый момент</figcaption>
          </figure>

          <article className="moment-thought moment-thought-red">
            <span>01 / чат клуба</span>
            <blockquote>«Я пришла просто послушать — и осталась спорить до полуночи»</blockquote>
            <p>12 реакций</p>
          </article>

          <figure className="moment-bubble moment-bubble-notes">
            <Image
              alt="Участница клуба делает заметки в книге"
              height={1662}
              loading="lazy"
              src={assetPath("/club-notes.jpg")}
              width={946}
            />
            <figcaption><span>✦</span> На полях · 00:13</figcaption>
          </figure>

          <article className="moment-thought moment-thought-mustard">
            <span>Вопрос месяца</span>
            <blockquote>Какой герой раздражал вас до последней страницы?</blockquote>
            <p>Обсудить ↗</p>
          </article>

          <figure className="moment-bubble moment-bubble-table">
            <Image
              alt="Книги, заметки и чашки после встречи книжного клуба"
              height={1800}
              loading="lazy"
              src={assetPath("/moment-table.jpg")}
              width={1440}
            />
            <figcaption><span>●</span> Всё, что осталось на столе</figcaption>
          </figure>

          <figure className="moment-bubble moment-bubble-gossip">
            <Image
              alt="Участники книжного клуба смеются над открытой книгой"
              height={854}
              loading="lazy"
              src={assetPath("/club-gossip.jpg")}
              width={1820}
            />
            <figcaption><span>↗</span> Book gossip · 22:47</figcaption>
          </figure>
        </div>

        <div className="moments-footer-note" aria-hidden="true">
          <span>читать</span><i />
          <span>обсуждать</span><i />
          <span>чувствовать</span>
        </div>
      </section>

      <section className="plans" id="plans" aria-labelledby="plans-title">
        <div className="plans-heading">
          <p className="kicker kicker-light">Стоимость участия</p>
          <h2 id="plans-title">
            Выберите свой
            <br />
            <i>ритм чтения.</i>
          </h2>
          <p>
            Доступ к закрытому каналу, чату, интерактивам и финальным эфирам уже
            включён.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="price-card">
            <p>Один месяц</p>
            <div className="price">
              <strong>10</strong>
              <span>$ / месяц</span>
            </div>
            <p>
              Идеально для старта. Попробуйте формат, прочитайте одну книгу и
              познакомьтесь с нашим комьюнити.
            </p>
            <a
              className="button button-cream"
              href="mailto:hello@page21.club?subject=PAGE%20—%201%20месяц"
            >
              Выбрать 1 месяц <Arrow />
            </a>
          </article>

          <article className="price-card featured-price">
            <span className="best-value">Выгодно</span>
            <p>Три месяца</p>
            <div className="price">
              <strong>20</strong>
              <span>$ / 3 месяца</span>
            </div>
            <p>
              Полноценное погружение. Три книги, три месяца в клубе и экономия
              10$.
            </p>
            <a
              className="button button-burgundy"
              href="mailto:hello@page21.club?subject=PAGE%20—%203%20месяца"
            >
              Выбрать 3 месяца <Arrow />
            </a>
          </article>
        </div>

        <div className="after-payment">
          <span>После оплаты</span>
          <h3>Ссылка уже идёт к вам</h3>
          <p>
            Сразу после успешной транзакции на указанную почту придёт
            автоматическое письмо со ссылкой-приглашением в закрытый
            Telegram-канал.
          </p>
        </div>
      </section>

      <section className="support" aria-labelledby="support-title">
        <div>
          <p className="kicker">Поддержать наш проект</p>
          <h2 id="support-title">
            Пусть у клуба будет
            <br />
            <i>следующая глава.</i>
          </h2>
        </div>
        <div className="support-copy">
          <p>
            Донат помогает нам оплачивать сервисы, готовить материалы и делать
            встречи ещё уютнее. Любая сумма — это знак, что мы всё делаем не
            зря.
          </p>
          <a
            className="button button-primary"
            href="mailto:hello@page21.club?subject=Хочу%20поддержать%20PAGE"
          >
            Поддержать клуб <Arrow />
          </a>
        </div>
      </section>

      <section className="landing-zone" aria-labelledby="landing-title">
        <div className="landing-copy">
          <p className="kicker">До следующей главы</p>
          <h2 id="landing-title">
            Вы долистали.
            <br />
            <i>Встретимся в клубе.</i>
          </h2>
          <p>
            Теперь можно открыть следующую книгу и начать всё сначала — только
            уже вместе.
          </p>
        </div>
        <div className="landing-stage" aria-hidden="true">
          <div className="book-stack">
            <div className="stack-book stack-one"><span>PAGE</span></div>
            <div className="stack-book stack-two"><span>ЧИТАЕМ</span></div>
            <div className="stack-book stack-three"><span>ВМЕСТЕ</span></div>
            <div className="stack-book stack-four"><span>БЕЗ РАМОК</span></div>
            <div className="stack-book stack-five"><span>БЕЗ ДЕДЛАЙНОВ</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-light" href="#top" aria-label="PAGE — наверх">
          <BrandMark light />
        </a>
        <p>Книжный клуб без рамок и дедлайнов</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
