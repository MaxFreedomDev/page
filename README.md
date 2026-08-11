# PAGE — книжный клуб

Статический лендинг книжного клуба на Next.js.

## Требования

- Node.js `>=22.13.0`
- npm

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Проверка production-сборки

```bash
npm run build
```

Next.js создаст статическую версию сайта в папке `out/`.

## GitHub Pages

Workflow `.github/workflows/pages.yml` автоматически собирает и публикует сайт
после push в ветку `main` или `master`.

Перед первой публикацией в настройках репозитория выберите:

1. **Settings → Pages**.
2. В разделе **Build and deployment** укажите **GitHub Actions**.
3. Отправьте изменения в `main` или `master`.

Workflow автоматически рассчитывает `basePath` для проектного репозитория и
корректно подключает изображения, шрифты, CSS и JavaScript из подпапки GitHub
Pages.

## Команды

- `npm run dev` — локальная разработка.
- `npm run build` — статическая production-сборка.
- `npm run lint` — проверка кода.
- `npm test` — проверка production-сборки.
