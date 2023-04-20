import React from 'react'

const Form = (props) => {
  return (
    <form
      className="p-4 lg:p-8 flex flex-col gap-5 w-full lg:w-1/2 lg:min-h-[580px]"
      onSubmit={props.handleSubmit}
    >
      <div className="flex flex-col 2xl:flex-row items-center gap-3">
        <div className="flex w-full 2xl:w-[initial] items-center gap-2 text-gray-800 bg-green-200 px-4 rounded py-2">
          <label>Method</label>
          <select
            value={props.method}
            onChange={(e) => props.setMethod(e.target.value)}
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
            value={props.url}
            onChange={(e) => props.setUrl(e.target.value)}
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
            value={props.body}
            spellCheck="false"
            onChange={(e) => props.setBody(e.target.value)}
          />
        </div>

        <div className="bg-yellow-200 w-full px-4 py-2 text-gray-800 rounded flex flex-col items-center gap-2">
          <label>Query Parameters</label>
          <textarea
            className="w-full px-2 py-1 bg-yellow-100 rounded-lg tex-black"
            rows={3}
            placeholder="Enter query parameters as JSON"
            value={props.params}
            name="params"
            spellCheck="false"
            onChange={(e) => props.setParams(e.target.value)}
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
            value={props.token}
            onChange={(e) => props.setToken(e.target.value)}
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
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-2 py-1 bg-purple-100 rounded-lg tex-black"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        className="bg-blue-600 px-2 py-2 rounded mt-4 text-2xl"
        type="submit"
        disabled={props.loading}
      >
        {props.loading ? "⏳ Fetching..." : "⚡ Fetch"}
      </button>
    </form>
  );
}

export default Form