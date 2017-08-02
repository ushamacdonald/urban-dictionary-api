import React from 'react'
import {getDefinition} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      define: {list:[]},
      search: 'annah'
    }
  }

  componentDidMount() {
    this.newSearch()
  }

  updateSearch(event) {
    this.setState(
      {search: event.target.value}
    )
    console.log(this.state);
  }

  newSearch(e) {
    if (e) e.preventDefault()
    getDefinition(this.state.search, (define) => {
      console.log(define);
      this.setState(
        {define}
      )
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newSearch.bind(this)}>
          <input type="text" name='search' value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
          <input type="submit" />
        </form>
        {this.state.define.list.map((list) => {
          return <div key={list.defid}>
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
