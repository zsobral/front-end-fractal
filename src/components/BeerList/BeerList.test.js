import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BeerList, BeerListItem } from './index'

configure({ adapter: new Adapter() })

const beers = [
  {
    id: 1,
    name: 'beer',
    tagline: 'tagline',
    details: 'details'
  },
  {
    id: 2,
    name: 'beer2',
    tagline: 'tagline2',
    details: 'details2'
  }
]

describe('BeerList', () => {
  it('should render two BeerListItem', () => {
    const wrapper = shallow(
      <BeerList>
        <BeerListItem beer={beers[0]} />
        <BeerListItem beer={beers[1]} />
      </BeerList>
    )
    expect(wrapper.find(BeerListItem).length).toBe(2)
  })
})
