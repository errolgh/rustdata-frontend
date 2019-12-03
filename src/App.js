import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
//will fetch a user's Steam account data (consider using a rails API backend)
  componentDidMount(){
    fetch(``)
    .then(res => res.json())
    .then(userDataArray) => {
      console.table(userDataArray)
    })
  }

  render(){
    return(
      <>
        <p>
          Render Complete
        </p>
      </>
    )
  }
}

export default App;
