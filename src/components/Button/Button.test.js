import React from 'react'
import sinon from 'sinon'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from './Button'

configure({ adapter: new Adapter() })

describe('Button', () => {
  it('should render a <button> tag', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('should listen to click events', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<Button onClick={spy} />)
    wrapper.find('button').simulate('click')
    expect(spy.calledOnce).toBeTruthy()
  })

  it('should have button--flat className', () => {
    const wrapper = shallow(<Button flat />)
    expect(wrapper.find('button').prop('className')).toContain('button--flat')
  })

  it('should have button--rounded className', () => {
    const wrapper = shallow(<Button rounded />)
    expect(wrapper.find('button').prop('className')).toContain('button--rounded')
  })
})
