import React from 'react'
import { connect } from 'react-redux'

import * as api from '../../api'
import BeerDetails from '../../components/BeerDetails'

class BeerDetailsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      beer: null
    }
  }

  componentDidMount () {
    const beerId = parseInt(this.props.match.params.id)
    let beer = this.props.beers.find(beer => beer.id === beerId)

    if (beer) {
      return this.setState(() => ({
        beer
      }))
    }

    api
      .getBeerById(beerId)
      .then(({ data }) => {
        this.setState(() => ({
          beer: data[0]
        }))
      })
      .catch(() => {
        this.setState(() => ({
          beer: null
        }))
      })
  }

  render () {
    return (
      <div>
        <BeerDetails beer={this.state.beer} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  beers: state.beers
})

export default connect(mapStateToProps, null)(BeerDetailsPage)
