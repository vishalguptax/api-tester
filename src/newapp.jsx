import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ReactJson from "react-json-view";

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

      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setResponse({ error: error.message });
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">API Tester</h1>
      <p className="text-muted">
        Enter the URL of an API endpoint below, along with any optional
        parameters, and click "Submit" to send a request and view the response.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <label>Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className=""
          >
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
          <label className="w-25">API URL</label>
          <input
            className="w-75"
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* <div controlId="method">
          <label>Method</label>
          <input
            as="select"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </input>
        </div> */}

        <div controlId="body">
          <label>Request Body (Optional)</label>
          <input
            as="textarea"
            rows={3}
            placeholder="Enter request body as JSON"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div controlId="params">
          <label>Query Parameters (Optional)</label>
          <input
            as="textarea"
            rows={3}
            placeholder="Enter query parameters as JSON"
            value={params}
            onChange={(e) => setParams(e.target.value)}
          />
        </div>

        <div controlId="token">
          <label>Authorization Token (Optional)</label>
          <input
            type="text"
            placeholder="Enter authorization token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>

        <div controlId="username">
          <label>Username (Optional)</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div controlId="password">
          <label>Password (Optional)</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button variant="primary" type="submit" disabled={loading}>
          {loading ? "Loading" : "Submit"}
        </button>
      </form>

      {response && (
        <div className="mt-5">
          <ReactJson src={response} theme="monokai" />
        </div>
      )}
    </div>
  );
}

export default App;
