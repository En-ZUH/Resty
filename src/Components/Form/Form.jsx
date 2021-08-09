import React from 'react';
import { useState } from 'react';
import './Form.scss';


function Form({ handleApiCall }) {
  const [URL, setURL] = useState('');
  const [method, setMethod] = useState('GET');
  const [textArea, setTextArea] = useState(false);

  function handleGo(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: URL,
    };
    handleApiCall(formData);
    console.log(formData)
  }

  function getUrl(url) {
    setURL(url)
  }

  function getMethod(e) {
    e.target.className ? e.target.className = '' : e.target.className = 'active';

    setMethod(e.target.id);
    e.target.id === 'post' || e.target.id === 'put' ? setTextArea(true) : setTextArea(false)
  }

  return (
    <>
      < div className='App-form' >
        <form onSubmit={handleGo}>
          <label className='URL'>
            <span>URL: </span>
            <input name='url' type='url' id='url' onChange={(e) => getUrl(e.target.value)} />
            <button type="submit" data-testid="submitButton">GO!</button>
          </label>

          <label className="methods">

            <input type="radio" name="btn" id="get" onClick={getMethod} />
            <label>GET</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="post" onClick={getMethod} />
            <label>POST</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="put" onClick={getMethod} />
            <label>PUT</label> &nbsp; &nbsp;

            <input type="radio" name="btn" id="delete" onClick={getMethod} />
            <label>DELETE</label> &nbsp; &nbsp;

          </label>
          {textArea && <textarea cols='50' rows='4'></textarea>}
        </form>
      </div>
    </>
  );

}

export default Form;