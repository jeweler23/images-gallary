import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import InputItem from '@/components/item/InputItem.vue';

it.only('modelValue should be updated', async () => {
    const wrapper = mount(InputItem);
    const input = wrapper.find('input');

    expect(input.element.value).toBe('');

    await input.setValue('newText');

    expect(input.element.value).toBe('newText');

    expect(wrapper.vm.value).toBe('newText');
});
