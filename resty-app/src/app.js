import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './Components/My Header/Header';
import Footer from './Components/My Footer/Footer';
import Form from './Components/My Form/Form';
import Results from './Components/The Results/Results.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    }
  }
  callApi = (requestParams) => {
    //mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({ data, requestParams });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.method}</div>
        <div>URL: {this.state.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
