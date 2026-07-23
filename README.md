# sheriktesh.org.kg

[Сайт ОО «Каунтерпарт-Шериктеш»](http://sheriktesh.org.kg). Astro 5, статика, Cloudflare Pages.

---

## Редактору

### 1. Создать аккаунт на GitHub

Если нет аккаунта:
1. Зайти на https://github.com/signup
2. Ввести email, придумать пароль, подтвердить email
3. **Запомнить username** — он понадобится

Гайды: [GitHub для начинающих](https://blog.skillfactory.ru/github-dlya-nachinayuschih/) · [Git и GitHub (Tproger)](https://tproger.ru/articles/chto-takoe-git-i-github--rukovodstvo-dlya-nachinayushhih)

### 2. Сообщить владельцу свой username

Написать: «Мой GitHub: username»

Владелец добавит вас в Collaborators (роль Write). На почту придёт приглашение — принять.

### 3. Войти в CMS

https://www.sheriktesh.org.kg/admin/ → **Login with GitHub**

### 4. Коллекции

| Раздел | Что редактирует |
|--------|----------------|
| **News** | Новости — заголовок, дата, текст |
| **Programs** | Программы — заголовок, порядок, текст |
| **Documents** | Библиотека (Конвенции, Обучающие пособия, Публикации) — PDF + описание |
| **Galleries** | Фотогалереи — заголовок, порядок, изображения |
| **Partners** | Партнёры (АКДН, Еврокомиссия, УВКБ ООН, Местные) |
| **About** | О нас (Деятельность, Структура, История, HTF) |
| **Contact** | Контакты |
| **Staff** | Штат — ФИО, должность, фото |
| **Homepage** | Главная — блоки hero, о нас, история, деятельность |

Переключай язык **RU / EN** вверху редактора.

### 5. Как создать/редактировать

- **Создать**: выбрать коллекцию → **New** → заполнить поля (Title, Description, Body/Image) → **Publish**
- **Редактировать**: кликнуть запись → изменить → **Publish**
- **Загрузить фото**: поле Image → **Choose an image** → выбрать файл

### 6. Важно

- Изменения применяются через ~1–2 мин (GitHub Actions собирает сайт)
- Языки независимы: русская и английская версии — разные записи
- Не удаляй записи без необходимости (сломаются ссылки)
- Не редактируй файлы через CMS одновременно с Git — возможны конфликты

### Ссылки на русском

- [Decap CMS + Astro (документация)](https://docs.astro.build/ru/guides/cms/decap-cms/)
- [Decap CMS — установка и настройка](https://truetech.dev/websites-development/services/cms-other/decap-cms-git-based-installation-setup.html)
- [GitHub для новичков (SkillFactory)](https://blog.skillfactory.ru/github-dlya-nachinayuschih/)
- [Git и GitHub (Tproger)](https://tproger.ru/articles/chto-takoe-git-i-github--rukovodstvo-dlya-nachinayushhih)
- [GitHub для новичков (pimenov.ai)](https://pimenov.ai/knowledge/github-dlya-novichkov-rukovodstvo/)
- [Официальная документация GitHub (рус.)](https://docs.github.com/ru/get-started)
- [Видеокурс Git и GitHub (ITDoctor)](https://dzen.ru/video/watch/66b204e3ad8f77488e573cf9)

---

## Разработчику

### Локальный запуск

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # сборка в dist/
npm run preview    # просмотр собранного
```

Для CMS локально:

1. Запусти `npx decap-server` (отдельный терминал)
2. CMS работает с `local_backend: true` (уже в конфиге)

### Технический стек

- **Astro 5.18** — генератор статики
- **Decap CMS** (CDN, standalone) — управление контентом
- **Cloudflare Pages** — хостинг + деплой
- **Cloudflare Worker** (`decap-proxy`) — OAuth proxy для CMS

### Домены

| Домен | Назначение |
|-------|-----------|
| `www.sheriktesh.org.kg` | Основной сайт (CF Pages) |
| `sheriktesh.org.kg` | Редирект 301 → `www` |
| `decap.sheriktesh.org.kg` | OAuth прокси для CMS |

### Структура

```
src/
  content/          # MD-файлы контента (9 коллекций × 2 языка)
    news/{ru,en}/
    programs/{ru,en}/
    documents/{ru,en}/
    galleries/{ru,en}/
    partners/{ru,en}/
    about/{ru,en}/
    contact/{ru,en}/
    staff/{ru,en}/
    homepage/{ru,en}/
  components/       # .astro компоненты
  layouts/          # BaseLayout, PageLayout
  pages/{ru,en}/    # Страницы по языкам
public/
  admin/            # Decap CMS (config.yml + index.html)
  assets/           # Изображения, документы, PDF
```
