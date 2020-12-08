import React, { useEffect, useState } from "react";

type NotificationProps = {
  data: any;
};

export default function NotificationBar({ data }: NotificationProps) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    setClosed(false);
  }, [data]);

  const closeHandler = () => {
    setClosed(true);
  };

  if (!data || closed) return null;
  else if (data.status === "ok")
    return (
      <div className="bg-green-600 animate-slide-down fixed z-5 w-screen">
        <div className="container mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="rounded-lg bg-green-800 h-8 w-8 flex items-center justify-center">
                <i className="fas fa-check text-white text-xl"></i>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="inline">{data?.msg}</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={closeHandler}
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="bg-red-600 animate-slide-down fixed z-5 w-screen">
        <div className="container mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="rounded-lg bg-red-800 h-8 w-8 flex items-center justify-center">
                <i className="fas fa-check text-white text-xl"></i>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="inline">{data?.msg}</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={closeHandler}
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
