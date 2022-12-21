function Table(props){
  const oddClass="bg-gray-200";
    const evenClass="bg-white"
 return(

   <div className={props.searchState===true?"relative shadow-md sm:rounded-lg":"hidden"}>
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th scope="col" className="py-3 px-6">
           FLIGHT
         </th>
         <th scope="col" className="py-3 px-6">
           AIRCRAFT
         </th>
         <th scope="col" className="py-3 px-6">
           CLASS
         </th>
         <th scope="col" className="py-3 px-6">
           FARE
         </th>
         <th scope="col" className="py-3 px-6">
           ROUTE
         </th>
         <th scope="col" className="py-3 px-6">
           DEPARTURE
         </th>
         <th scope="col" className="py-3 px-6">
           ARRIVAL
         </th>
         <th scope="col" className="py-3 px-6">
           DURATION
         </th>
         <th scope="col" className="py-3 px-6">
           PRICE
         </th>
       </tr>
       </thead>
       <tbody>
       {props?.data?.current?.flightOffer?.map((item1,index1)=>{
   return  item1?.itineraries[0]?.segments?.map((item2,index2)=>{
   return(

             <tr className={(index1%2===0)?("bg-red-500"+(index2%2===0)?(""):"border-b-2 border-red-200"):("bg-white"+(index2%2)===0?(""):"border-b-2 border-red-200")} >
               <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {item2.carrierCode +" " +item2.aircraft}
               </td>
               <td className="py-4 px-6">
                 {item2.flightNumber}
               </td>
               <td className="py-4 px-6">
                 {item1?.class[0]}
               </td>
               <td className="py-4 px-6">
                 {item1?.fareBasis[0]}
               </td>
               <td className="py-4 px-6">
                 {item2?.departure?.iataCode+"-"+item2?.arrival?.iataCode}
               </td>
               <td className="py-4 px-6">
                 {item2?.departure?.at}
               </td>
               <td className="py-4 px-6">
                 {item2?.arrival?.at}
               </td>
               <td className="py-4 px-6">
                 {item1?.itineraries[0]?.duration}
               </td>
               <td  className="py-4 px-6 ">
                 {item1?.price}
               </td>

             </tr>

   )}
   )})}
       </tbody>
     </table>
   </div>

 );
}
export default Table;