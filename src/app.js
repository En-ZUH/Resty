import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results.jsx';
// import Loading from './Components/Loading/Loading.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      loading: false,
      headers: null,
      count: 'url',
    };
  }
  callApi = (formData, headers, requestedData) => {
    //mock output
    const data = {
      Headers: {
        'contenten-type': 'string application /json',
      },
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({ data: requestedData, requestParams: formData, headers: headers, count: requestedData.count, loading: true });

  };

  render() {
    return (
      <>
        <React.Fragment>
          <Header />
          <div className='title'> <h3> &nbsp; &nbsp; &nbsp;Request Method:&nbsp; &nbsp;   {this.state.requestParams.method}</h3>
            <h3> &nbsp; &nbsp; &nbsp; URL:&nbsp; &nbsp; {this.state.requestParams.url} </h3>   </div>

          <Form handleApiCall={this.callApi} />

          {this.state.loading && (
            <>
              <Results data={{ headers: this.state.headers, results: this.state.data, count: this.state.count }} />
            </>
          )}


        </React.Fragment>
        <Footer />
      </>
    );
  }
}

export default App;
