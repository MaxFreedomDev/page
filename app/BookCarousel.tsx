"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";

type BookSlide = {
  month: string;
  day: string;
  eyebrow: string;
  headline: string;
  description: string;
  coverTitle: string;
  coverMeta: string;
  coverFooter: string;
  tone: "rust" | "wine" | "cream";
  compact?: boolean;
  facts: Array<{ value: string; label: string }>;
};

const books: BookSlide[] = [
  {
    month: "Август",
    day: "01",
    eyebrow: "Книга августа · старт 01.08",
    headline: "Классика, которую наконец не страшно открыть",
    description:
      "Мы выбрали две сюжетные линии, сделали мягкий маршрут на 15 минут в день и подготовили короткие вводные.",
    coverTitle: "Война\nи мир",
    coverMeta: "PAGE · клубное чтение",
    coverFooter: "Лев Толстой",
    tone: "rust",
    facts: [
      { value: "15 мин", label: "в день" },
      { value: "8 аудио", label: "до 4 минут" },
      { value: "28 авг", label: "20:00 МСК" },
    ],
  },
  {
    month: "Сентябрь",
    day: "01",
    eyebrow: "Книга сентября · старт 01.09",
    headline: "Роман, в котором мистика спорит с реальностью",
    description:
      "Читаем «Мастера и Маргариту», распутываем несколько сюжетных линий и обсуждаем, кого в этой истории действительно стоит бояться.",
    coverTitle: "Мастер\nи\nМаргарита",
    coverMeta: "PAGE · клубное чтение",
    coverFooter: "Михаил Булгаков",
    tone: "wine",
    compact: true,
    facts: [
      { value: "20 мин", label: "в комфортном темпе" },
      { value: "6 тем", label: "для обсуждения" },
      { value: "27 сен", label: "финальный эфир" },
    ],
  },
  {
    month: "Октябрь",
    day: "01",
    eyebrow: "Книга октября · старт 01.10",
    headline: "История, после которой хочется говорить о человечности",
    description:
      "Читаем «Цветы для Элджернона» и обсуждаем интеллект, одиночество и цену перемен без экзамена на правильную интерпретацию.",
    coverTitle: "Цветы\nдля\nЭлджернона",
    coverMeta: "PAGE · клубное чтение",
    coverFooter: "Дэниел Киз",
    tone: "cream",
    compact: true,
    facts: [
      { value: "15 мин", label: "в день — достаточно" },
      { value: "7 вопросов", label: "без верных ответов" },
      { value: "30 окт", label: "финальный эфир" },
    ],
  },
];

export function BookCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, pointerId: -1 });
  const book = books[activeIndex];

  const changeSlide = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + books.length) % books.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || event.pointerId !== dragStart.current.pointerId) return;

    const distanceX = event.clientX - dragStart.current.x;
    const distanceY = event.clientY - dragStart.current.y;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      setDragOffset(Math.max(-130, Math.min(130, distanceX)));
    }
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || event.pointerId !== dragStart.current.pointerId) return;

    const distanceX = event.clientX - dragStart.current.x;
    const distanceY = event.clientY - dragStart.current.y;

    if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > Math.abs(distanceY) * 1.2) {
      changeSlide(distanceX < 0 ? 1 : -1);
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  const cancelDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerId !== dragStart.current.pointerId) return;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section
      className="book-carousel"
      id="book"
      aria-labelledby="book-title"
      aria-roledescription="карусель"
    >
      <div className="paper-fragment paper-one" aria-hidden="true" />
      <div className="paper-fragment paper-two" aria-hidden="true" />
      <div className="carousel-topbar">
        <p>Книга месяца</p>
        <div className="month-tabs" role="tablist" aria-label="Выбрать месяц">
          {books.map((item, index) => (
            <button
              aria-controls="book-slide"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "is-active" : ""}
              key={item.month}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {item.month}
            </button>
          ))}
        </div>
        <div className="carousel-arrows">
          <button
            aria-label="Предыдущий месяц"
            onClick={() => changeSlide(-1)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Следующий месяц"
            onClick={() => changeSlide(1)}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div
        aria-live="polite"
        className={`book-slide${isDragging ? " is-dragging" : ""}`}
        id="book-slide"
        onPointerCancel={cancelDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        role="tabpanel"
        style={{
          transform: `translateX(${dragOffset * 0.18}px)`,
          transition: isDragging ? "none" : "transform 180ms ease",
        }}
      >
        <div className="slide-copy" key={`copy-${activeIndex}`}>
          <p className="book-eyebrow">{book.eyebrow}</p>
          <h2 id="book-title">{book.headline}</h2>
          <p className="book-description">{book.description}</p>
          <div className="book-facts">
            {book.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cover-stage" key={`cover-${activeIndex}`}>
          <div className="cover-date" aria-label={`${book.month}, первое число`}>
            <span>{book.month}</span>
            <strong>{book.day}</strong>
          </div>
          <div
            className={`carousel-cover cover-${book.tone}${
              book.compact ? " cover-compact" : ""
            }`}
          >
            <span>{book.coverMeta}</span>
            <strong>
              {book.coverTitle.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </strong>
            <small>{book.coverFooter}</small>
          </div>
        </div>
      </div>

      <div className="carousel-progress" aria-hidden="true">
        <span className="swipe-hint">свайпните ↔</span>
        <span>
          0{activeIndex + 1} / 0{books.length}
        </span>
        <div>
          {books.map((item, index) => (
            <i className={activeIndex === index ? "is-active" : ""} key={item.month} />
          ))}
        </div>
      </div>
    </section>
  );
}
