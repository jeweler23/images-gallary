import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import CardModalItem from '@/components/item/CardModalItem.vue';

it.only('renders CardModalItem', async () => {
    const post = {
    id: 1,
    title: 'Вдохновение в каждом шаге',
    description: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    subtitle: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    image: '1',
    tags: ['Люди', 'Природа'],
    create_date_post: '9 апр',
    timeRead: 2,
    comments: [{
      author: 'Мария Гусева',
      description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
      create_date_comment: '9.04.2024 в 14:54',
      avatar: 'commentator',
    }],
  };

  const wrapper = mount(CardModalItem, {
      props: {
        post,
      },
  });

  const html = wrapper.html();

  expect(html).toContain(post.title);
  expect(html).toContain(post.description);
  expect(html).not.toContain(post.subtitle);
  expect(html).toContain(post.create_date_post);
  expect(html).toContain(post.timeRead);

  const img = wrapper.find('img[alt="info image"]');
  expect(img.exists()).toBe(true);

  expect(img.attributes('src')).toBe(`file:///D:/src/assets/images/${post.image}.png`);

  post.tags.forEach((tag) => {
    expect(html).toContain(tag);
  });
});
