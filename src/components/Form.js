import Datepicker from 'flowbite-datepicker/Datepicker';
import {useState} from "react";
import Table from "../components/Table";
function Form(props){
  // const datepicker = document.getElementById('datepickerId');
  // new Datepicker(datepicker, {
  //   // options
  // });
  const [searchState,setSearchState] = useState(false);
  return(
    <>

    <form className="m-5">
      <div className="inline-flex rounded-md shadow-sm mb-4" role="group">
        <button type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          ROUND TRIP
        </button>
        <button type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          ONE WAY
        </button>
        <button type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          MULTI CITY
        </button>
      </div>
      <div className="flex flex-nowrap -mx-3 mb-6">
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" type="text" placeholder="Doe"/>

        </div>
        <div className="w-full md:w-1/8 px-3">

          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" type="text" placeholder="Doe"/>
        </div>
        <div className="relative w-full md:w-1/8 px-3">
          <div className="flex absolute left-2 items-center pl-3 pointer-events-none pt-3">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
            </svg>
          </div>
          <input datepicker type="text" id="datepickerId"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Select date"/>
        </div>

        {/*<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">*/}

        {/*  <input*/}
        {/*    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"*/}
        {/*    id="grid-city" type="text" placeholder="Albuquerque"/>*/}
        {/*</div>*/}
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value=""
                 className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extra options</label>
        </div>
        <ul
          className="items-center  text-sm font-medium text-gray-900 bg-white  sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li >
            <div className="flex items-center pl-3">
              <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio"
                     className=" text-blue-600"/>
                <label htmlFor="horizontal-list-radio-license"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Driver
                  License </label>
            </div>
          </li>
          <li >
            <div className="flex items-center pl-3">
              <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio"
                     className="text-blue-600"/>
                <label htmlFor="horizontal-list-radio-id"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">State
                  ID</label>
            </div>
          </li>

          <li>
            <div className="flex items-center pl-3">
              <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio"
                     className="text-blue-600"/>
                <label htmlFor="horizontal-list-radio-passport"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">US
                  Passport</label>
            </div>
          </li>
        </ul>

        <button
          className=" shadow md:w-1/3  bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button" onClick={()=>setSearchState(true)}>
          SEARCH
        </button>
      </div>

    </form>
      <Table data={props.data} searchState={searchState}/>
    </>
  );
}
export default Form;