import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Overlay from './index'

configure({ adapter: new Adapter() })

describe('Overlay', () => {
  it('should show the Overlay', () => {
    const wrapper = shallow(<Overlay show />)
    expect(wrapper.find('.overlay').get(0).props.style)
      .toHaveProperty('display', 'block')
  })

  it('should hide the Overlay', () => {
    const wrapper = shallow(<Overlay show={false} />)
    expect(wrapper.find('.overlay').get(0).props.style)
      .toHaveProperty('display', 'none')
  })
})
