import { describe, it, expect } from 'vitest'

import { DOMWrapper, mount } from '@vue/test-utils'
import Steps from '../Steps.vue'

describe('Steps component', () => {
  it('renders properly', () => {
    const wrapper = mount(Steps, { props: { msg: 'Hello Vitest' } })
    //expect(wrapper.text()).toContain('Reiseziel-')
    const step2 = wrapper.findAll('.ks-steps__item').at(1);
   // console.log(wrapper.html());
  //  expect(step2.text()).toContain('Reiseziel')

    expect(step2.classes('ks-steps__item_active')).toBe(true)
    
  })
})
