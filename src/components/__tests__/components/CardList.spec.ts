import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import CardList from '@/components/widget/CardList.vue';
import { usePostsStore } from '@/stores/postsStore';

describe('cardList Component', () => {
  const posts = [{
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
    }];

  it.only('renders CardModalItem', async () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const postStore = usePostsStore();
    postStore.activePost = posts;

    const wrapper = mount(CardList, {
      global: {
        plugins: [pinia],
      },
    });

    await wrapper.vm.$nextTick();

    // ищем все CardItem
   const cardtemComponents = wrapper.findAllComponents({ name: 'Cardtem' });

    // проверка рендера списка
    expect(wrapper.find('ul').exists()).toBe(true);

    expect(cardtemComponents).toHaveLength(posts.length);
    // Телепорт
    wrapper.vm.isOpen = true;
    wrapper.vm.selectedPost = postStore.activePost[0];
    // await wrapper.setData({
    //   isOpen: true,
    //   selectedPost: postStore.activePost[0],
    // });
    await wrapper.vm.$nextTick();
    // const body = document.body;
    const modalComponent = document.body.querySelector('.overflow-y-scroll');

    expect(modalComponent).not.toBeNull();

    // проверка заглушки
    postStore.activePost = [];
    wrapper.vm.isOpen = false;
    await wrapper.vm.$nextTick();

    const stub = wrapper.findComponent({ name: 'Stub' });
    expect(stub.exists()).toBe(true);
  });
});
