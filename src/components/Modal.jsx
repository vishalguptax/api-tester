import { useEffect } from "react";

const Modal = ({show, set}) => {
  return (
    <div>
      {show ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="border-0 rounded-lg relative flex flex-col w-[340px] md:w-[540px] shadow-2xl bg-sky-100 outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-4 px-6 border-b">
                  <h3 className="text-2xl text-gray-800">Set Default Values</h3>
                  <button
                    className="bg-transparent border-0 text-gray-800 float-right"
                    onClick={() => set(false)}
                  >
                    <span className=" opacity-7 h-6 w-6 flex items-center justify-center text-xl  bg-gray-400 text-white p-1 py-0 rounded-full">
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Menu / Close_MD">
                          <path
                            id="Vector"
                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-purple-200 shadow rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-gray-800 text-sm font-bold mb-1">
                      BASE URL
                    </label>
                    <textarea rows={1} placeholder="Enter Base URL" className="shadow bg-purple-100 appearance-none border rounded w-full py-2 px-1 text-gray-800" />
                    <br />
                    <br />
                    <label className="block text-gray-800 text-sm font-bold mb-1">
                      Base Token
                    </label>
                    <textarea rows={1} placeholder="Enter Base Token" className="shadow bg-purple-100 appearance-none border rounded w-full py-2 px-1 text-gray-800" />
                    {/* <label className="block text-gray-800 text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-800" />
                    <label className="block text-gray-800 text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-800" /> */}
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => set(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-400 active:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => set(false)}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
