import React from 'react'
import sinon from 'sinon'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as api from '../../api'
import { BeerDetailsPage } from './BeerDetailsPage'

configure({ adapter: new Adapter() })

describe('BeerDetailsPage', () => {
  const beer = {
    id: 1,
    name: 'beer',
    tagline: 'tagline',
    image_url: 'http://url',
    description: 'description'
  }

  let stub = sinon.stub(api, 'getBeerById').resolves({ data: [beer] })

  beforeEach(() => {
    stub.resetHistory()
  })

  it('should get beer details from api', async () => {
    const beers = []
    const wrapper = await mount(<BeerDetailsPage beers={beers} match={{ params: { id: 1 } }} />)
    expect(wrapper.state('beer')).toEqual(beer)
    expect(stub.calledOnce).toBeTruthy()
  })

  it('should get beer details from cache', () => {
    const beers = [beer]
    const wrapper = mount(<BeerDetailsPage beers={beers} match={{ params: { id: 1 } }} />)
    expect(wrapper.state('beer')).toEqual(beer)
    expect(stub.notCalled).toBeTruthy()
  })

  it('should show an error', async () => {
    const beers = []
    stub = stub.rejects()
    const wrapper = await mount(<BeerDetailsPage beers={beers} match={{ params: { id: 1 } }} />)
    expect(wrapper.state('beer')).toBe(null)
    expect(wrapper.find('.beer__error').length).toBe(1)
    expect(stub.calledOnce).toBeTruthy()
  })
})
