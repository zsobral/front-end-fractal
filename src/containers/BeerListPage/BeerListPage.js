import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store'

import { BeerList, BeerListItem } from '../../components/BeerList'

class BeerListPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      beers: []
    }
    this.getBeers = this.getBeers.bind(this)
    this.handleOnClickPrevPage = this.handleOnClickPrevPage.bind(this)
    this.handleOnClickNextPage = this.handleOnClickNextPage.bind(this)
  }

  componentDidMount () {
    this.getBeers(this.props.currentPage)
  }

  getBeers (page) {
    const begin = (page - 1) * this.props.pageSize
    const end = begin + this.props.pageSize

    if (end > this.props.beers.length) {
      this.props.requestBeers(page)
    } else {
      this.props.changePage(page)
    }
  }

  handleOnClickPrevPage () {
    this.getBeers(this.props.currentPage - 1)
  }

  handleOnClickNextPage () {
    this.getBeers(this.props.currentPage + 1)
  }

  render () {
    const begin = (this.props.currentPage - 1) * this.props.pageSize
    const end = begin + this.props.pageSize
    const beers = this.props.beers.slice(begin, end).map(beer => <BeerListItem key={beer.id} beer={beer} />)
    return (
      <BeerList
        style={{ minHeight: '200px' }}
        pagePosition='right'
        currentPage={this.props.currentPage}
        loading={this.props.loading}
        onClickNextPage={this.handleOnClickNextPage}
        onClickPrevPage={this.handleOnClickPrevPage}
      >
        {beers}
      </BeerList>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.fetching,
  beers: state.beers,
  currentPage: state.currentPage,
  pageSize: state.pageSize
})

const mapDispatchToProps = dispatch => ({
  requestBeers: (page) => dispatch(actions.loadBeersRequest(page)),
  changePage: (page) => dispatch(actions.changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerListPage)
