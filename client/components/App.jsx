import React from 'react'
import {getDefinition} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      define: {list:[]}
    }
  }

  componentDidMount() {
    getDefinition('annah', (define) => {
      console.log(define);
      this.setState(
        {define}
      )
    })
  }

  render() {
    return (
      <div>
        {this.state.define.list.map((list) => {
          return <div>
            <p>Author: {list.author}</p>
            <p>Word: {list.word}</p>
            <p>Definition: {list.definition}</p>
            <hr/>
          </div>

        })}
      </div>
    )
  }
}
