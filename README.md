# React Router v8 starter

Стартовый проект для уроков по React Router на актуальном синтаксисе.

## Требования

- Node.js 22.22+
- React 19.2.7+
- React Router 8

## Запуск

```bash
pnpm install
pnpm dev
```

## Что уже работает

- `/adidas`
- `/puma`
- `/abibas`
- `/prices`
- фильтр через `useSearchParams`
- общий layout через `Outlet`
- Data Router через `createBrowserRouter` + `RouterProvider`

## Что специально НЕ сделано

Переход по карточкам на `/adidas/:id` и `/puma/:id` пока не настроен. Это стартовая точка перед уроком о динамических параметрах и `useParams`.

Также пока нет `ProtectedRoute`/защищённой страницы — это следующий урок.
