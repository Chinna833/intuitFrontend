import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CreateBidService from "../services/CreateBidServicess";

const CreateBid = () => {
    let [isOpen, setIsOpen] = useState(true)
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
      const [createdDetails,createBidDetails] = useState({
        requestId:"",
        createUser:"",
        reqName:"",
        reqDesc:"",
        category:"",
        noOfRequirement:"",
        noOfHrsExpected:"",
        reqExpiry:"",
        maxCost:"",
        requestStatus:"",
        createTime:"",
      });
      const saveBidDetails = (e) =>{
        // e.preventDefault();
        CreateBidService.saveBidDetails(createdDetails)
          .then((response)=>{
            console.log(response);
            if(response.typ=='S'){
                window.alert("Creation Done Successfully");
            }
          })
          .catch((error) => {
            console.log(error);
          });
          console.log(createdDetails);
      };
      const handleChange = (e) =>{
        const value = e.target.value;
        createBidDetails({...createdDetails,[e.target.name]:value});
      };
    
  return (
    <div className="color-bg form-special">
       <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 content-align">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Create New Requirement</h3>
              <p className="mt-1 text-sm text-gray-600">Once created will start the bidding and close once the last date breached.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md m-8">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="req-name" className="block text-sm font-medium text-gray-700">
                          Requirement Name 
                      </label>
                      <input
                        type="text"
                        name="reqName"
                        id="reqName" value={createdDetails.reqName} onChange={(e)=> handleChange(e)}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Requirement Description
                        </label>
                        <div className="mt-1">
                        <textarea
                            id="reqDesc" value={createdDetails.reqDesc} onChange={(e)=> handleChange(e)}
                            name="reqDesc" 
                            rows={3} 
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            
                            
                        />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                        Brief description for your requirement. 
                        </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category 
                      </label>
                      <select
                        id="category"
                        name="category"
                        autoComplete="category" 
                        value={createdDetails.category} onChange={(e)=> handleChange(e)}
                        className="mt-1 block w-full disabled py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Developement</option>   
                        <option>Support</option>   
                        <option>Testing</option>                   
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        No Of Requirement 
                      </label>
                      <select
                        id="noOfRequirement"
                        name="noOfRequirement" value={createdDetails.noOfRequirement} onChange={(e)=> handleChange(e)}
                        autoComplete="noOfRequirement" 
                        className="mt-1 block w-full disabled py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Less than 50</option>   
                        <option>More than 50</option>                      
                      </select>
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="req-name" className="block text-sm font-medium text-gray-700">
                          Hours
                      </label>
                      <input
                        type="text"
                        name="noOfHrsExpected" value={createdDetails.noOfHrsExpected} onChange={(e)=> handleChange(e)}
                        id="noOfHrsExpected"
                        autoComplete="given-name" placeholder="Expected Hours of Completion"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="req-date" className="block text-sm font-medium text-gray-700">
                          Max Date & Time
                      </label>
                      <input
                        type="text"
                        name="reqExpiry" value={createdDetails.reqExpiry} onChange={(e)=> handleChange(e)}
                        id="reqExpiry"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="req-date" className="block text-sm font-medium text-gray-700">
                          Max Cost 
                      </label>
                      <input
                        type="text"
                        name="maxCost" value={createdDetails.maxCost} onChange={(e)=> handleChange(e)}
                        id="maxCost"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Uniqueness of this project
                        </label>
                        <div className="mt-1">
                        <textarea
                            id="comments"
                            name="comments"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            
                        />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                        Brief description for your requirement like why this is unique. 
                        </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button onClick={openModal}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Requirement Added successfully
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your requirement has been successfully submitted. We can see the added information on your 'My Requirement' list.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button 
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



    </div>
  )
}

export default CreateBid
