import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import TagItem from '@/components/item/TagItem.vue';

it.only('renders TagItem', async () => {
  const title = 'Example Title';

  const wrapper = mount(TagItem, {
    props: {
      title,
      isActive: false,
    },
  });
  const img = wrapper.find('img');

  expect(wrapper.html()).toContain(title);
  expect(img.exists()).toBe(true);
  await wrapper.setProps({ title, isActive: null });
  const imgAfter = wrapper.find('img');
  expect(imgAfter.exists()).toBe(false);
});
