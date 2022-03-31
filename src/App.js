import React from 'react';
import './App.css';
// import CardList from './CardList';
// import Form from './Form';
import StarMatch from './StarMatch';


class App extends React.Component {


  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     profiles: testData
  //   }
  // }
  state = {
    profiles: []
  }

  addNewProfile = (profleData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profleData]
    }))
  };



  render() {
    return (
      <div className="App">
        <div>{this.props.title}</div>
        {/* <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} /> */}
        <StarMatch />
      </div>
    );
  }
}

export default App;
