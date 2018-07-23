import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Spinner from './index'

configure({ adapter: new Adapter() })

describe('Spinner', () => {
  it('should show the Spinner', () => {
    const wrapper = shallow(<Spinner show />)
    expect(wrapper.find('.spinner').get(0).props.style)
      .toHaveProperty('display', 'block')
  })

  it('should hide the Spinner', () => {
    const wrapper = shallow(<Spinner show={false} />)
    expect(wrapper.find('.spinner').get(0).props.style)
      .toHaveProperty('display', 'none')
  })
})
