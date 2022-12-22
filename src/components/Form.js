import {useState} from "react";
import Table from "../components/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Form(props) {
  const [searchState, setSearchState] = useState(false);
  const [startDate, setStartDate] = useState(new Date());



  return (
    <>

      <form className="m-5">
        <div className="border-b-2 border-blue-800 mb-2">
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
              id="grid-last-name" type="text" placeholder="LHR"/>

          </div>
          <div className="w-full md:w-1/8 px-3">

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" type="text" placeholder="CDG"/>
          </div>
          <div className="relative w-full md:w-4/8 px-3 border-2">
            <div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state">

                <option value="">day +</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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
                <option value="">day -</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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
                <option>Anytime</option>

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
                <option>ADT</option>
                <option>CHILD</option>
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
</div>
        <div className="grid grid-cols-3">
          <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value=""
                   className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extra
              options</label>
          </div>
          <ul
            className="items-center  text-sm font-medium text-gray-900 bg-white  sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li>
              <div className="flex items-center pl-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio"
                       className=" text-blue-600"/>
                <label htmlFor="horizontal-list-radio-license"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Driver
                  License </label>
              </div>
            </li>
            <li>
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
<div>
          <button
            className=" shadow md:w-1/3 bg-blue-800 text-white font-bold py-2 px-4 rounded float-right"
            type="button" onClick={() => setSearchState(true)}>
            SEARCH
          </button>
</div>
        </div>

      </form>

      <Table data={props.data} searchState={searchState}/>
    </>
  );
}

export default Form;