# images-gallery

Этот проект SPA - в нем реализована возможность отображения галереи изображений с их фильтрацией и просмотра подробной информации.

# Технологии
1. ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white),
2. ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D),
3. Pinia,
4. ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white),
5. ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
6. eslint config - antfu 	![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
7. formatter - eslint stylistic

# Архитектура:
+ view-директория - содержит внешний вид главной странцы приложения (в дальнейшем можно добавлять другие view).
+ layouts - содержит обертки для view (сейчас там обертка для главной страницы и модального окна).
+ components:
  1. widget - независимые интерфейсы, которые выполняют основную логику приложения (навигация (я так понял она подразумевалась по макету, но второй страницы не было, я добавил ui на всякий, можно будет чуть переписать под переключение страниц), фильтрация, отоброжение элеменов).

  2. items - элементы, которые можно переиспользовать в widgets.

  3. ui - графические элементы (заглушка).

  4. test - для тестирования.

+ stores - содержит глобальное хранилище. Для данной реализации можно было всю логику хранить в composables и передавать информацию через props/provide в дочерние элементы, но при увеличении сложности приложения, в любом случае нужно будет использовать хранилище.
+ types - директория с типами.

Что можно улучшить:

1. Сделать более грамотный адаптив (есть моменты, где элементы спрятаны через hidden,хотя правильнее через resize сделать).
2. Добавить слайдер для постов.
3. Обернуть некоторую логику в компоненты, которая содержится в разных частях приложения.
4. Добавить больше css переменных для более быстрой стилизации.
5. Добавить более красивую анимацию.
6. Сделать более поддерживаемую архитектуру.

## Project Setup , Compile and Hot-Reload for Development, Type-Check, Compile and Minify for Production

```sh
npm install

npm run dev

npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/), Lint with [ESLint](https://eslint.org/)

```sh
npm run test:unit

npm run lint
```
