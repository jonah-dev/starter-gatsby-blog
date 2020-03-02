import React from 'react';
import './Ticker.scss'
import TickerCategory from './TickerCategory'

class Ticker extends React.Component {
  render() {
    const options = [
      {
        categoryLabel: "categoryLabel1",
        categoryValue: "categoryValue1",
      },
      {
        categoryLabel: "categoryLabel2",
        categoryValue: "categoryValue2",
      },
      {
        categoryLabel: "categoryLabel3",
        categoryValue: "categoryValue3",
      }
    ]
    return (
      <div className="Ticker">
        <svg width="150" height="50">
          <rect width="150" height="50" stroke="black" fill="rgba(0,0,0,.5)"/>
        </svg>
        <TickerCategory
          options={options}
        />
      </div>
    )
  }
}

export default Ticker