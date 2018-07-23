import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Route } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'

configure({ adapter: new Adapter() })

describe('App', () => {
  it('should render one Header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header).length).toBe(1)
  })

  it('should render three Routes', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Route).length).toBe(3)
  })

  it('should render one Footer', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Footer).length).toBe(1)
  })
})
