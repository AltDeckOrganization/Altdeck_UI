import React from 'react';
import './App.css';
import Routing from './routing/Routing';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios';
const serverUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [captchaResult, setCaptchaResult] = React.useState()
  const siteKey =  process.env.REACT_APP_RECAPTCHA_SITE_KEY

  function onChange(value) {
    // console.log('Captcha value:', value);
    axios.get(`${serverUrl}/recaptcha`, {
      method: 'POST',
      body: JSON.stringify({ 'captcha_value': value }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.captcha.success)
        setCaptchaResult(data.captcha.success)
      })
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
      />
      {
        captchaResult && <button type='submit'>Submit</button>
      }
      <Routing />
    </div>
  );
}

export default App;
