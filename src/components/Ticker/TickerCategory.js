import React from 'react';
import './TickerCategory.scss'

class TickerCategory extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="TickerCategory flex">
          { Array.isArray(this.props.options) && this.props.options.map((option, i) => 
            <span
              className="TickerCategory-value" 
              key={i}>
              {option.categoryLabel}
            </span>)
          }
      </div>
    )
  }
}

export default TickerCategory