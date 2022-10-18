import "../App.css";
import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import $ from "jquery";

export default function People() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const MySwal = withReactContent(Swal);

  const [posts, setPost] = useState([]);
  const [pagination, setPage] = useState([]);

  const API_URL = params.get("page");

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPost(data.results);
    setPage(data);
    // console.log(data.results);
  };

  useEffect(() => {
    fetchData({});
    function Detail(url) {
      console.log(url);
    }
    document.title =
      "People | Moonlay Technology Skill Test | Fauzi Dzulfiqar Wibowo";
  }, []);

  function trigger() {
    let timerInterval;
    MySwal.fire({
      title: "Fetching Data..",
      timer: 9000,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
        const b = MySwal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = MySwal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === MySwal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  return (
    <div className="container mx-auto px-4 pt-3 bg-slate-300 h-screen pb-5">
      <div className="grid grid-rows-1 gap-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-6xl">People Module</h1>
          <h2 className="font-light text-base lg:text-4xl lg:pt-5">
            A People resource is an individual person or character within the
            Star Wars universe.
          </h2>
          <button onClick={trigger}>Click Me!</button>
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:gaps-2 gaps-2  lg:gap-4 pt-10 md:m-auto">
          {posts.map((post) => (
            <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="/people?page">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Height : {post.height}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Birth Year : {post.birth_year}
              </p>
              <button
                // onClick={() => Detail(post.url)}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center pt-24">
          <div role="status">
            <svg
              className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="m-auto pt-10 text-center ">
        {pagination.previous === null ? (
          <>
            <button className="cursor-not-allowed inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 opacity-75">
              Previous
            </button>

            <a
              href={"/people?page=" + pagination.next}
              className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </>
        ) : (
          <>
            <a
              href={"/people?page=" + pagination.previous}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>

            <a
              href={"/people?page=" + pagination.next}
              className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </>
        )}
      </div>
    </div>
  );
}
