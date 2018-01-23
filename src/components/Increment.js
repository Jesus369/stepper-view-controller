import React, { Component } from 'react'

export class Increment extends Component {

  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    console.log('add button clicked')
    let parsedVal = parseInt(this.integer.innerHTML)
    let newHTML = parsedVal += 1
    this.integer.innerHTML = newHTML
  }

  subtract() {
    let parsedVal = parseInt(this.integer.innerHTML)
    let newHTML = parsedVal -= 1
    this.integer.innerHTML = newHTML
  }

  render() {

    var table = {
      borderCollapse: "collapse",
      margin: "0 auto 0 auto"
    }

    var int = {
      fontSize: "3em",
      width: "2em",
      textAlign: "center"
    }

    var sign = {
      backgroundColor: "#6DBB3E",
      borderRadius: "5px",
      fontSize: "3em",
      width: "1em",
      textAlign: "center"
    }

    return (
      <div>
      <h1>Increasing and Decreasing the Integer</h1>
      <table style={table}>
      <tr>
        <td style={sign} onClick={this.add} ref={(plus) => this.plusVal = plus}> + </td>
        <td style={int} ref={(integer) => this.integer = integer}>0</td>
        <td style={sign} onClick={this.subtract} ref={(minus) => this.minusVal = minus}> - </td>
        </tr>
        </table>
      </div>
    )
  }
}
