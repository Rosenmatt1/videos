import React from 'react'
import SearchBar from './SearchBar.js'
// import youtube from '../apis/youtube.js'

class App extends React.Component {
  state = {
    term: "",
    data: []
  }

  fetchMovies = () => {
    return fetch(`https://www.googleapis.com/youtube/v3/${this.state.term}`
    )
    .then(res => res.json())
    .then(data => {
      this.setState({data: data})
        return data
    })
  }

  componentDidMount() {
    this.fetchMovies()
      .catch(err => console.error(err))
  }

  // onTermSubmit = term => {
  //   youtube.get('/search' , {
  //       params: {
  //       q: term,
  //     }
  //   })
  // }

  updateSearch = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar 
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    )
  }
}

export default App