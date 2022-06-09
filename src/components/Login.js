import {React , useState} from 'react';
import PropTypes from 'prop-types';
import logo from '../../src/images/logo.png';
import {useNavigate} from 'react-router-dom';
import LoginService from '../services/LoginService';

const Header = ({ x }) => {

    const navigate = useNavigate();
    const [loginDetails,setUserDetails] = useState({
      emailId:"",
      password:"",
    });
    const profileLogin = (e) =>{
      e.preventDefault();
      LoginService.profileLogin(loginDetails)
        .then((response)=>{
          console.log(response);
          if(response.typ=='S'){
              window.alert("Login Successfully");
              navigate('/home')
          }
        })
        .catch((error) => {
          console.log(error);
          navigate('/home')
        });
        console.log(loginDetails);
    };
    const handleChange = (e) =>{
      const value = e.target.value;
      setUserDetails({...loginDetails,[e.target.name]:value});
    };
    return (
          <div className="">
            <header className="color-bg h-12 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 font-mono italic">
                Ende@vour
             </header>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div>
            <img
              className="mx-auto h-12 w-12 rounded-full"
              img src={logo}
              alt=""
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="emailId"
                  name="emailId"
                  type="emailId" value={loginDetails.emailId} onChange={(e)=> handleChange(e)}
                  autoComplete="emailId"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password" value={loginDetails.password} onChange={(e)=> handleChange(e)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm">
                <a href="#" className="font-medium text-black-600 hover:text-black-500" onClick={()=>navigate("/forgotPass")}>
                  Forgot your password?
                </a>
              </div>
              <div className="text-sm">
                <button href="#" className="font-medium text-black-600 hover:text-black-500" onClick={()=>navigate("/loginForm")}>
                 Create an account
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={profileLogin}> 
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      </div>
        
    )
}


Header.defaultProps = {
    x: '',
}
Header.propTypes = {
    x: PropTypes.string.isRequired,
}

export default Header