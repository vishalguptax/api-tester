import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ReactJson from "react-json-view";
import Modal from "./components/Modal";

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
        <form
          className="p-4 lg:p-8 flex flex-col gap-5 w-full lg:w-1/2 lg:min-h-[580px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col xl:flex-row items-center gap-3">
            <div className="flex w-full lg:w-[initial] items-center gap-2 text-gray-800 bg-green-200 px-4 rounded py-2">
              <label>Method</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="bg-green-100 w-full lg:w-[initial] text-gray-800 rounded-lg cursor-pointer px-2 py-1"
              >
                <option value="get">GET</option>
                <option value="post">POST</option>
                <option value="put">PUT</option>
                <option value="patch">PATCH</option>
                <option value="delete">DELETE</option>
              </select>
            </div>
            <div className="bg-orange-200 w-full px-4 py-2 text-gray-800 rounded flex items-center gap-2">
              <label className="">URL</label>
              <input
                className="bg-orange-100 rounded-lg tex-black px-2 py-1  w-full lg:w-[400px]"
                type="text"
                placeholder="Enter API URL"
                name="url"
                spellCheck="false"
                autoComplete="on"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col lg:items-center gap-3 lg:flex-row lg:gap-2">
            <div className="bg-yellow-200 w-full px-4 py-2 text-gray-800 rounded flex flex-col items-center gap-2">
              <label>Request Body</label>
              <textarea
                className="w-full px-2 py-1 bg-yellow-100 rounded-lg tex-black"
                rows={3}
                placeholder="Enter request body as JSON"
                name="body"
                value={body}
                spellCheck="false"
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            <div className="bg-yellow-200 w-full px-4 py-2 text-gray-800 rounded flex flex-col items-center gap-2">
              <label>Query Parameters</label>
              <textarea
                className="w-full px-2 py-1 bg-yellow-100 rounded-lg tex-black"
                rows={3}
                placeholder="Enter query parameters as JSON"
                value={params}
                name="params"
                spellCheck="false"
                onChange={(e) => setParams(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-purple-200 w-full p-4 text-gray-800 rounded flex flex-col items-center gap-2 ">
            <div className="w-full flex flex-col items-center gap-2">
              <label className="">Authorization Token</label>
              <textarea
                rows={2}
                className="w-full px-2 py-1 text-sm bg-purple-100 rounded-lg tex-black"
                placeholder="Enter authorization token"
                spellCheck="false"
                name="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <div className="flex w-full justify-between gap-4">
              <div className="w-full flex flex-col items-center gap-2">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className="w-full px-2 py-1 bg-purple-100 rounded-lg tex-black"
                  spellCheck="false"
                  autoComplete="on"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col items-center gap-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full px-2 py-1 bg-purple-100 rounded-lg tex-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className="bg-blue-600 px-2 py-2 rounded mt-6 text-2xl"
            type="submit"
            disabled={loading}
          >
            {loading ? "⏳ Fetching..." : "⚡ Fetch"}
          </button>
        </form>
        <Modal show={showModal} set={setShowModal} />
        <div className="response flex flex-col items-center gradient-border p-8 w-full lg:w-1/2 min-h-[580px]">
          <div className={loading ? "loading" : "notLoading"} />
          <h2 className="mb-6 text-center text-2xl ">Response</h2>
          <ReactJson
            src={response?.data}
            theme="threezerotwofour"
            style={{
              maxWidth: 560,
              minWidth: 360,
              overflow: "auto",
              maxHeight: 400,
              minHeight: 300,
              borderRadius: "5px",
              padding: "16px",
              opacity: "0.85",
              fontFamily: "inherit",
            }}
          />
          <div className="flex items-center justify-around w-full mt-6 text-xl">
            <div>
              💥 Status :
              <span
                className={` ${
                  response?.status == (200 || 202 || 201 || 204)
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {" "}
                {response?.status}
              </span>
            </div>
            <div>
              📧 Message :<span> {response?.data?.message}</span>
            </div>
          </div>
          {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
        </div>
      </div>
      <footer className="w-full text-center py-2">
        © {new Date().getFullYear()} All Rights Reserved | Made by{" "}
        <a
          href="https://www.linkedin.com/in/vishalgupta26/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-200"
        >
          Vishal Gupta
        </a>
      </footer>
    </div>
  );
}

export default App;
