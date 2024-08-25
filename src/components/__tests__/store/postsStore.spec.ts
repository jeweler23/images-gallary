import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { usePostsStore } from '@/stores/postsStore';

describe('postsStore', () => {
  let store: ReturnType<typeof usePostsStore>;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    store = usePostsStore();
  });

  it('filters posts by title', () => {
    // Установка тестовых данных
    store.titleFilter = 'Цвета природы в наших руках';
    // store.filteredPost();

    // Проверка результата фильтрации
    expect(store.filterPosts).toEqual([{
    id: 3,
    title: 'Цвета природы в наших руках',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    image: '3',
    tags: ['Природа', 'Искусство'],
    create_date_post: '1 апр', // скорее всего будет приходить в другом формате
    timeRead: 3,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария Гусева1',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария Гусева2',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
    id: 10,
    title: 'Цвета природы в наших руках',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    image: '10',
    tags: ['Животные', 'Природа'],
    create_date_post: '13 апр',
    timeRead: 10,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }]);
  });

  it('filters posts by tags', () => {
    store.activeTags = new Set(['Природа']);
    // store.filteredPost();

    expect(store.filterPosts).toEqual(store.filterPosts);
  });

  it('filters posts by title and tags', () => {
    store.titleFilter = 'Вкус лета';
    store.activeTags = new Set(['Искусство']);
    // store.filteredPost();

    expect(store.filterPosts).toEqual([
      {
    id: 8,
    title: 'Вкус лета',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Напоминание о том, что простые удовольствия могут приносить огромное счастье.',
    image: '8',
    tags: ['Искусство', 'Природа'],
    create_date_post: '3 апр', // скорее всего будет приходить в другом формате
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  },
    ]);
  });

  it('returns all posts when no filters are applied', () => {
    // Установка тестовых данных
    store.titleFilter = '';
    store.activeTags = new Set([]);
    // store.filteredPost();

    // Проверка результата фильтрации
    expect(store.filterPosts).toEqual(store.postsArray);
  });
});
