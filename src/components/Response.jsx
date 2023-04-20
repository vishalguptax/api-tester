import React from 'react'
import ReactJson from "react-json-view";

const Response = (props) => {
  return (
    <div className="response flex flex-col items-center gradient-border p-8 w-full lg:w-1/2 min-h-[580px]">
      <div className={props.loading ? "loading" : "notLoading"} />
      <h2 className="mb-6 text-center text-2xl ">Response</h2>
      <ReactJson
        src={props.response?.data}
        theme="threezerotwofour"
        style={{
          maxWidth: 560,
          width:"100%",
          minWidth: 360,
          height:"100%",
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
              props.response?.status == (200 || 202 || 201 || 204)
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {" "}
            {props.response?.status}
          </span>
        </div>
        <div>
          📧 Message :<span> {props.response?.data?.message}</span>
        </div>
      </div>
      {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
    </div>
  );
}

export default Response