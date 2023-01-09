import { shallowMount } from '@vue/test-utils';
import test from './test.vue';
import { describe, it, expect } from 'vitest';
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(test, {
      props: { msg: 'new message' }
    });
    expect(wrapper.text()).toMatch('new message');
  });
});
