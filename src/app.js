/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './app.scss';
import axios from 'axios';
import Form from './Components/Form/Form.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Results from './Components/Results/Results.jsx';
import History from './Components/History/History.jsx';
import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  history: [],
}




function App() {

  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [render, setRender] = useState(false);
  const [headers, setHeaders] = useState(null);
  const [count, setCount] = useState('');
  const [state, setState] = useState({ loading: false });
  const [history, setHistory] = useState([]);

  const [reduce, dispatch] = useReducer(historyReducer, initialState);



  function historyReducer(state = history, action) {
    const { type, payload } = action;
    switch (type) {
      case 'save':
        const history = [...state.history, payload.history];
        return { history };
      default:
        return state;
    }
  }



  function historyAction(history) {
    return {
      type: 'save',
      payload: { history },
    };
  }



  //________________________________________________________________________________________________


  useEffect(() => {
    test()
  }, [requestParams]);


  async function test() {
    console.log('requestParams :::', requestParams)

    try {
      const data = await axios({
        method: requestParams.method,
        url: requestParams.url,
      })

      console.log('data :::', data);

      setData(data.data)
      setHeaders(data.headers);
      setCount(data.data.count);
      dispatch(historyAction(requestParams));


      console.log(data.data.count)

    } catch (error) {
      console.log(error.message)
      setData(null)
    }
  }

  //________________________________________________________________________________________________

  async function callApi(params) {

    setState({ loading: true });

    if (params.url) {
      setrequestParams(params);
      setHistory([...history, params]);
      //  dispatch(historyAction(params));
    }

    else {
      const defaultData = {
        Headers: {
          'content-type': 'string application/json- Default Data',
        },
        count: 'counts = 2',
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };

      setData(defaultData);
      setHeaders(defaultData.Headers);
      setCount(defaultData.count);
      setrequestParams(params);
      dispatch(historyAction(params));
    }
  }

  //________________________________________________________________________________________________

  return (
    <React.Fragment>
      <Header />
      <div className='title'> <h3> &nbsp; &nbsp; &nbsp;Request Method:&nbsp; &nbsp;{requestParams.method}</h3>
        <h3> &nbsp; &nbsp; &nbsp; URL:&nbsp; &nbsp; {requestParams.url} </h3>  </div>





      <Form handleApiCall={callApi} />




      {/*  {state.history.length ? <History history={state.history} /> : null}*/}
      <History history={history} />




      {state.loading && (
        <Results data={{ headers: headers, results: data, count: count }} />
      )}
      <Footer />
    </React.Fragment>
  );
}
export default App;
