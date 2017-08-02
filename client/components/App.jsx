import React from 'react'
import {getDefinition, getGif} from '../api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      define: {
        list: []
      },
      search: 'annah',
      gif: {data:[]}
    }
  }

  componentDidMount() {
    this.newSearch()
    getGif((gif) => {
      console.log(gif.data);
      this.setState({gif})
    })
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
    console.log(this.state);
  }

  newSearch(e) {
    if (e)
      e.preventDefault()
    getDefinition(this.state.search, (define) => {
      this.setState({define})
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <img src={this.state.gif.data.image_url} />
        <form onSubmit={this.newSearch.bind(this)}>
          <input type="text" name='search' value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
          <input type="submit" value="search"/>
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
