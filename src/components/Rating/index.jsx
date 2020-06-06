import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Rating extends Component {
  constructor(props) {
    super(props)
    this.refRating = React.createRef();
    this.state = {
      curRating: null
    }
  }

  componentDidMount() {
    this.setRating()
  }

  setRating = () => {
    const { curRating } = this.state;
    const { activeColor } = this.props;
    const rating = curRating !== null ? curRating : this.props.value;
    const intRating = Math.round(rating);
    const elements = this.refRating.current.getElementsByClassName('rating-icon');

    Array(intRating).fill(null).map((item, index) => {
      return elements[index].childNodes[0].style.color = activeColor ? activeColor : "rgb(254, 234, 130)"
    })
  }

  render() {
    const { max, icon } = this.props
    return (
      <div ref={this.refRating}>
        {Array(max)
          .fill(null)
          .map((item, index) => index + 1)
          .map((item, index) => (
            <span key={item} className="rating-icon">
              <FontAwesomeIcon icon={icon} color="#eee" />
            </span>
          ))
        }
      </div>
    )
  }
}

export default Rating 