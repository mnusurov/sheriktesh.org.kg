# sheriktesh.org.kg

Сайт ОО «Каунтерпарт-Шериктеш». Astro 5, статика, Cloudflare Pages.

## Редактирование контента (Decap CMS)

### Вход

1. Открой **https://www.sheriktesh.org.kg/admin/**
2. Нажми «Login with GitHub»
3. Авторизуйся через GitHub (нужен доступ Write к репозиторию)

### Коллекции

| Раздел | Что редактирует |
|--------|----------------|
| **News** | Новости — заголовок, дата, текст |
| **Programs** | Программы — заголовок, порядок, текст |
| **Documents** | Библиотека (Конвенции, Обучающие пособия, Публикации) — PDF + описание |
| **Galleries** | Фотогалереи — заголовок, порядок, изображения |

Локализация: переключай вкладку **RU / EN** в редакторе.

### Медиафайлы

Загружай изображения через CMS → попадают в `/public/assets/`. PDF для документов клади в `/public/assets/documents/` (через Git).

### Важно

- После сохранения изменений сайт пересобирается автоматически (~1-2 мин)
- Не редактируй файлы через CMS одновременно с Git — возможны конфликты
- Для добавления нового редактора: Settings → Collaborators в репозитории GitHub

## Локальный запуск

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # сборка в dist/
npm run preview    # просмотр собранного
```

Для CMS локально:

1. Запусти `npx decap-server` (отдельный терминал)
2. CMS работает с `local_backend: true` (уже в конфиге)

## Технический стек

- **Astro 5.18** — генератор статики
- **Decap CMS** (CDN, standalone) — управление контентом
- **Cloudflare Pages** — хостинг + деплой
- **Cloudflare Worker** (`decap-proxy`) — OAuth proxy для CMS

## Домены

| Домен | Назначение |
|-------|-----------|
| `www.sheriktesh.org.kg` | Основной сайт (CF Pages) |
| `sheriktesh.org.kg` | Редирект 301 → `www` |
| `decap.sheriktesh.org.kg` | OAuth прокси для CMS |

## Структура

```
src/
  content/          # MD-файлы контента (4 коллекции × 2 языка)
    news/{ru,en}/
    programs/{ru,en}/
    documents/{ru,en}/
    galleries/{ru,en}/
  components/       # .astro компоненты
  layouts/          # BaseLayout, PageLayout
  pages/{ru,en}/    # Страницы по языкам
public/
  admin/            # Decap CMS (config.yml + index.html)
  assets/           # Изображения, документы, PDF
```
