/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Form.scss';
import axios from 'axios';

function Form(props) {
  const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('GET');
  const [textArea, setTextArea] = useState(false);
  const [inputText, setInputText] = useState('');


  async function handleGo(e) {
    e.preventDefault();

    // const data = await axios({
    //   method: e.target.id,
    //   url: URL,

    // });
    // console.log('dddddattttta', data);
    const formData = {
      method: method,
      url: URL,

      // body: body,
    };
    // const data = {
    //   Headers: {
    //     'content-type': 'string application/json',
    //   },
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };



    //props.handleApiCall(data);
    props.handleApiCall(formData);
  }

  function getUrl(url) {
    setURL(url)
  }

  function handleInputText(e) {
    setInputText(e.target.value)
  }


  async function getMethod(e) {
    e.target.className ? e.target.className = '' : e.target.className = 'active';

    await setMethod(e.target.value);
    e.target.id === 'Post' || e.target.value === 'Put' ? setTextArea(true) : setTextArea(false)
  }

  return (
    <>
      < div className='App-form' >
        <form onSubmit={handleGo}>
          <label className='URL'>
            <span>URL: </span>
            <input className='urlStyle' name='url' type='url' id='url' onChange={(e) => getUrl(e.target.value)} />
            <button className='Gobtn' type="submit" data-testid="submitButton">GO!</button>
          </label>

          <label className="methods">

            <input type="radio" name="btn" id="Get" value="Get" onClick={getMethod} />
            <label>GET</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="Post" value="Post" onClick={getMethod} />
            <label>POST</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="Put" value="Put" onClick={getMethod} />
            <label>PUT</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="Delete" value="Delete" onClick={getMethod} />
            <label>DELETE</label> &nbsp; &nbsp;

          </label>
          {textArea && <textarea cols='50' rows='4' onChange={handleInputText} />}
        </form>
      </div>
    </>
  );

}

export default Form;