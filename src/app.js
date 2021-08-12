/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results.jsx';
import Loading from './Components/Loading/Loading.jsx';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [render, setRender] = useState(false);
  const [headers, setHeaders] = useState(null);
  const [count, setCount] = useState('');
  const [state, setState] = useState({ loading: false });

  async function callApi(params) {
    setrequestParams(params);
    console.log(9999);
    setState({ loading: true });
  }

  useEffect(() => {
    console.log(111)
    test()
  }, [requestParams]);

  async function test() {
    console.log('requestParams', requestParams)

    try {
      const data = await axios({
        method: requestParams.method,
        url: requestParams.url,
      })

      console.log('data :::', data);

      setData(data.data)
      setHeaders(data.headers);
      setCount(data.data.count);

      console.log(data.data.count)

    } catch (error) {
      console.log(error.message)
      setData(null)
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div className='title'> <h3> &nbsp; &nbsp; &nbsp;Request Method:&nbsp; &nbsp;{requestParams.method}</h3>
        <h3> &nbsp; &nbsp; &nbsp; URL:&nbsp; &nbsp; {requestParams.url} </h3>  </div>
      <Form handleApiCall={callApi} />

      {state.loading && (
        <Results data={{ headers: headers, results: data, count: count }} />
      )}
      <Footer />
    </React.Fragment>
  );
}
export default App;
