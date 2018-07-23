import React from 'react'
import sinon from 'sinon'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'

import * as api from '../../api'
import { BeerListPage } from './BeerListPage'

configure({ adapter: new Adapter() })

describe('BeerListPage', () => {
  const beer = {
    id: 1,
    name: 'beer',
    tagline: 'tagline',
    image_url: 'http://url',
    description: 'description'
  }
  const beers = [beer, { ...beer, id: 2 }, { ...beer, id: 3 }]
  const pageSize = 1
  const apiStub = sinon.stub(api, 'getBeers').resolves({ data: beers })
  const changePageStub = sinon.stub().callsFake(page => { currentPage = page })
  let currentPage
  let loading

  beforeEach(() => {
    apiStub.resetHistory()
    changePageStub.resetHistory()
    currentPage = 1
    loading = false
  })

  it('should get beers from cache', () => {
    mount(
      <MemoryRouter>
        <BeerListPage
          pageSize={pageSize}
          loading={loading}
          beers={beers}
          currentPage={currentPage}
          changePage={changePageStub}
        />
      </MemoryRouter>
    )
    expect(changePageStub.calledOnce).toBeTruthy()
    expect(apiStub.notCalled).toBeTruthy()
  })

  it('should get beers from api', () => {
    mount(
      <MemoryRouter>
        <BeerListPage
          pageSize={pageSize}
          loading={loading}
          beers={[]}
          currentPage={currentPage}
          requestBeers={apiStub}
        />
      </MemoryRouter>
    )
    expect(apiStub.calledOnce).toBeTruthy()
  })
})
