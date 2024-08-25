import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { IPost } from '@/types/post';

export const usePostsStore = defineStore('posts', () => {
  const postsArray = ref<IPost[]>([{
    id: 1,
    title: 'Вдохновение в каждом шаге',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    image: '1',
    tags: ['Люди', 'Природа'],
    create_date_post: '9 апр', // скорее всего будет приходить в другом формате
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
    id: 2,
    title: 'Моменты тишины и покоя',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    image: '2',
    tags: ['Природа', 'Животные'],
    create_date_post: '9 апр', // скорее всего будет приходить в другом формате
    timeRead: 3,
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
    }, {
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
  }, {
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
    id: 4,
    title: 'Семейные узы в дикой природе',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
    image: '4',
    tags: ['Животные', 'Природа'],
    create_date_post: '4 апр', // скорее всего будет приходить в другом формате
    timeRead: 15,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария 1Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }, {
      author: 'Мария 2Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
    id: 5,
    title: 'Моменты, которые остаются в сердце',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    image: '5',
    tags: ['Люди', 'Природа', 'Животные'],
    create_date_post: '10 апр', // скорее всего будет приходить в другом формате
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
    id: 6,
    title: 'Моменты, которые остаются в сердце',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    image: '6',
    tags: ['Люди', 'Природа', 'Животные'],
    create_date_post: '10 апр', // скорее всего будет приходить в другом формате
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
    id: 7,
    title: 'Объятия, которые говорят больше слов',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным...',
    image: '7',
    tags: ['Люди', 'Природа'],
    create_date_post: '10 апр', // скорее всего будет приходить в другом формате
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  }, {
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
  }, {
    id: 9,
    title: 'Эхо прошлого',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Старинное здание, укрытое под кронами деревьев, словно хранит в себе эхо прошлого.',
    image: '9',
    tags: ['Животные', 'Природа'],
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

  const allTags = computed(() => {
    if (postsArray.value.length > 0) {
      const tags: string[] = [];
      postsArray.value.forEach((item) => {
        tags.push(...item.tags);
      });

      return tags.filter((tag, index) => index === tags.lastIndexOf(tag));
    }
    return [];
  });

  const activeTags = ref(new Set<string>());
  const titleFilter = ref('');

  // Фильтр постов

  const filterPosts = computed(() => {
    return postsArray.value.filter((post) => {
      const isTitleIncludes = post.title.toLowerCase().includes(titleFilter.value.toLowerCase());
      const isTagIncludes = Array.from(activeTags.value).every(tag => post.tags.includes(tag));

      return isTagIncludes && isTitleIncludes;
    });
  });

function toggleStatusTag(tag: string) {
  if (!activeTags.value.has(tag)) {
    activeTags.value.add(tag);
  }
 else {
    activeTags.value.delete(tag);
  }
}
  return { postsArray, allTags, titleFilter, activeTags, toggleStatusTag, filterPosts };
});
