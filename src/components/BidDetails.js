import React from 'react'

const BidDetails = () => {
  return (
    <div>
      <header className="color-bg h-12 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 font-mono italic">
                Ende@vour
             </header>
          <div class="relative overflow-x-auto shadow-md m-20">
          <table class="w-full text-sm text-left text-green-500 dark:text-green-400">
            <thead class="text-xs text-green-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
                <tr>
                <th scope="col" class="px-6 py-3">
                Requirement Tittle
                </th>
                <th scope="col" class="px-6 py-3">
                Description
                </th>
                <th scope="col" class="px-6 py-3">
                Hours
                </th>
                <th scope="col" class="px-6 py-3">
                Last Date
                </th>
                <th scope="col" class="px-6 py-3">
                Comments
                </th>
                <th scope="col" class="px-6 py-3">
                     <span class="sr-only">Bet&Win</span>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                S/W Engineer
                </th>
                <td class="px-6 py-4">
                New Req</td>
                <td class="px-6 py-4">
                $1234
                </td>
                <td class="px-6 py-4">xxxx
                </td>
                <td class="px-6 py-4">xxxx
                </td>
                <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Bet&Win</a>

               <span class="space-y-[5px]">  ....
               <a href="/home" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Back</a>
               </span> 
             
                </td>
                </tr>
                
            </tbody>
          </table>
          </div>
      </div>
  )
}

export default BidDetails