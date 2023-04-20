import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Response from "./components/Response";
import Footer from "./components/Footer";

function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState("");
  const [params, setParams] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const options = {
        method,
        url,
        headers: {},
      };

      if (body) {
        options.data = JSON.parse(body);
      }

      if (params) {
        options.params = JSON.parse(params);
      }

      if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }

      if (username && password) {
        options.auth = {
          username,
          password,
        };
      }

      const res = await axios(options);
      console.log(res);
      setResponse(res);
      setLoading(false);
    } catch (error) {
      console.error(error?.response);
      console.log(error);
      setResponse(error?.response ?? {});
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center my-4 text-4xl text-green-300">
        🚀Ultimate API Tester
      </h1>
      <p className="text-center py-1 px-6 text-gray-800 lg:w-max mx-4 lg:mx-auto  bg-blue-200 rounded lg:rounded-full">
        Enter the URL of an API endpoint below, along with any optional
        parameters, and click "Submit" to send a request and view the response.
      </p>
      <div className="container mx-auto my-5 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-6">
        <Form
          handleSubmit={handleSubmit}
          method={method}
          setMethod={setMethod}
          url={url}
          setUrl={setUrl}
          body={body}
          setBody={setBody}
          params={params}
          setParams={setParams}
          token={token}
          setToken={setToken}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          loading={loading}
        />
        <Modal show={showModal} set={setShowModal} />
        <Response loading={loading} response={response} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
