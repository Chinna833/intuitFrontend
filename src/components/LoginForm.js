import { useNavigate } from "react-router-dom" 
import RegistrationService from "../services/RegistrationService";
import {useState} from 'react';


const LoginForm = () => {
  const navigate = useNavigate();
  const [userDetails,setUserDetails] = useState({
    id:"",
    emailId:"",
    password:"",
    firstName:"",
    lastName:"",
    phoneNumber:"",
    country:"",
    street:"",
    state:"",
    city:"",
    postcode:"",
    img:"",
    notif_type:"",
  });
  const saveUserDetails = (e) =>{
    e.preventDefault();
    RegistrationService.saveUserDetails(userDetails)
      .then((response)=>{
        console.log(response);
        if(response.typ=='S'){
            window.alert("User Creation Done Successfully.Try to login with the userid");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("User Creation Failed");
      });
      navigate('/login')
  };
  const handleChange = (e) =>{
    const value = e.target.value;
    setUserDetails({...userDetails,[e.target.name]:value});
  };
  return (
    <div className="color-bg form-special">
       <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 content-align">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md m-8">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName" value={userDetails.firstName} onChange={(e)=> handleChange(e)}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={userDetails.lastName} onChange={(e)=> handleChange(e)}
                        autoComplete="family-name"
                        className="h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="emailId"
                        id="emailId"
                        autoComplete="email" value={userDetails.emailId} onChange={(e)=> handleChange(e)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Password 
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        autoComplete="password" value={userDetails.password} onChange={(e)=> handleChange(e)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Re Enter Password 
                      </label>
                      <input
                        type="text"
                        name="reenter-password"
                        id="reenter-password"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Mobile Phone
                      </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber" value={userDetails.phoneNumber} onChange={(e)=> handleChange(e)}
                        autoComplete="phoneNumber" placeholder="+61XXXXXXXX"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country 
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country" value={userDetails.country} onChange={(e)=> handleChange(e)}
                        className="mt-1 block w-full disabled py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Australia</option>                     
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        autoComplete="state"  value={userDetails.state} onChange={(e)=> handleChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>New South Wales</option>
                        <option>Queensland</option>
                        <option>Northern Territory</option>
                        <option>Western Australia</option>
                        <option>South Australia</option>
                        <option>Victoria</option>
                        <option>Australian Capital Territory</option>
                        <option>Tasmania</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2" value={userDetails.city} onChange={(e)=> handleChange(e)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1" value={userDetails.state} onChange={(e)=> handleChange(e)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="number"
                        name="postcode"
                        id="postcode"
                        autoComplete="postcode" value={userDetails.postcode} onChange={(e)=> handleChange(e)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md m-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                    <p className="text-sm text-gray-500">This is delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="eNotif"
                          name="eNotif"
                          type="radio" value={userDetails.eNotif}  onChange={(e)=> handleChange(e)}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="pNotif"
                          name="pNotif"
                          type="radio" value={userDetails.pNotif}  onChange={(e)=> handleChange(e)}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="noNotif"
                          name="noNotif"
                          type="radio"  value={userDetails.noNotif}  onChange={(e)=> handleChange(e)}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="noNotif" className="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit" onClick={saveUserDetails}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
