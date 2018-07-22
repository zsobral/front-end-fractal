import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BeerListItem } from './index'

configure({ adapter: new Adapter() })

const beer = {
  id: 1,
  name: 'beer',
  tagline: 'tagline',
  details: 'details'
}

describe('BeerList', () => {
  it('should render a beer list item', () => {
    const wrapper = shallow(<BeerListItem beer={beer} />)
    expect(wrapper.find('.beer-list__item').length).toBe(1)
    expect(wrapper.find('.beer__name').text()).toBe('beer')
    expect(wrapper.find('.beer__tag').text()).toBe('tagline')
  })
})
