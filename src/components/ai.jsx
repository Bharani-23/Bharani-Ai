import React, { useState } from 'react';
// You need to correctly install or mock the `GoogleGenerativeAI` library, which isn't officially available.
import { GoogleGenerativeAI } from '@google/generative-ai';





import './api.css';

const Arun = () => {
  const [input, setInput] = useState(''); // User input
  const [response, setResponse] = useState(''); // AI response
  const [loading, setLoading] = useState(false); // Loading state

  // Placeholder for GoogleGenerativeAI; make sure the API works
  const genAi = new GoogleGenerativeAI('AIzaSyCAFDs-so9WF4VbQn0OmF_mDV-B8VLPmkQ');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Assuming getGenerativeModel returns a model object
      const model = await genAi.getGenerativeModel({
        model: 'gemini-1.5-pro',
      });

      // Assuming generateContent is the correct method to call and the input is passed
      const r = await model.generateContent(input);

      // Assuming the response has a "response" field that contains the actual text
      if (r && r.response && r.response.text) {
        setResponse(r.response.text); // Set the actual response text
         setInput("")
      } else {
        setResponse('No valid response received.');
      }
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('An error occurred while generating the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="body">
    <div className="container pt-5  "  >
      <h1 className='text-center arun-title'>Bharani AI Interaction</h1>
      <form className='text-center mt-5 pb-3  ' onSubmit={handleSubmit}>
        <label className='fs-5  arun-sup fw-900 '>
           Enter Your Query:
          <input
          className='ms-3 ai-inpute'
            type="text   fild-input "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            required
          />
        </label>
        <button className='p-1 bg-dark text-white  form-button rounded ' type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Response'}
        </button>
      </form>
      </div>
<div className='container-fluid'>
      {/* Display response */}
      {response && (
        <div id="response" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f1f1f1' }}>
          <pre>{response}</pre>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default Arun;
