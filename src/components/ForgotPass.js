import {useNavigate} from 'react-router-dom'
const ForgotPass = () => {
  const navigate = useNavigate();
  return (
    <div className="form-special">
      <header className="color-bg h-12 flex items-center justify-center text-sm         font-medium text-white px-4 sm:px-6 lg:px-8 font-mono italic">
                Ende@vour
      </header>
      <div className="col-span-3 sm:col-span-3 m-7">
       <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
        </div>
        <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Password 
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
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
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
                        Secret Question 
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full disabled py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Who is your Best friend?</option>                     
                      </select>
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="sec-ans" className="block text-sm font-medium text-gray-700">
                        Secret Ans 
                      </label>
                      <input
                        type="text"
                        name="sec-ans"
                        id="sec-ans"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="text-sm m-4">
                      <button href="#" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={()=>navigate("/login")}>
                     Rest Password
                    </button>
                  </div>
      </div>
    </div>
  )
}

export default ForgotPass
