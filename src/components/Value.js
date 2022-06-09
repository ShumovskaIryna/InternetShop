import React, { Component } from 'react'

export class Value extends Component {
  render() {
    return (
                        <div
                          className="size"
            key={this.props.id}
             style={{ background: this.props.value }}
                          >{this.props.value}
                        </div>
    )
  }
}
export default Value