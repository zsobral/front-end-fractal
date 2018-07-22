import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BeerDetails from './index'

configure({ adapter: new Adapter() })

describe('BeerDetails', () => {
  it('should render beer details', () => {
    const beer = {
      id: 1,
      name: 'beer',
      tagline: 'tagline',
      details: 'details'
    }
    const wrapper = shallow(<BeerDetails beer={beer} />)
    expect(wrapper.find('.beer__name').length).toBe(1)
    expect(wrapper.find('.beer__name').text()).toBe('beer')
  })

  it('should render beer error message', () => {
    const wrapper = shallow(<BeerDetails berr={null} />)
    expect(wrapper.find('.beer__error').length).toBe(1)
  })
})
