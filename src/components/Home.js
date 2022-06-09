
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../src/images/logo.png';
import { useNavigate } from 'react-router-dom';
import FetchDetailsService from "../services/FetchDetailsService";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const fetchCreatedInfo = (e) => {
  const fetchDetails = {
    requestId:"",
    createUser:"ALL",
    category:"",
    requestStatus:"",
    createTime:"",
  };
  console.log(fetchDetails);
  FetchDetailsService.fetchAllDetails(fetchDetails)
    .then((response) => {
      console.log(response);
      if (response.typ == 'S') {
        for(var i=0;i<response.length;++i){
          let [categories] = {
            AllList: [
              {
                id: response[i].requestId,
                title: response[i].reqName,
                description: response[i].reqDesc,
                hours: response[i].reqDesc,
                lastdate: response[i].reqDesc,
                comments: response[i].category,
                date: response[i].reqExpiry,
                commentCount: response[i].noOfRequirement,
                shareCount: response[i].maxCost,
                requestStatus: response[i].requestStatus,
                noOfHrsExpected: response[i].noOfHrsExpected,
                createTime: response[i].createTime,
              },     
            ],
            Trending: [
              {
                id: response[i].requestId,
                title: response[i].reqName,
                description: response[i].reqDesc,
                hours: response[i].reqDesc,
                lastdate: response[i].reqDesc,
                comments: response[i].category,
                date: response[i].reqExpiry,
                commentCount: response[i].noOfRequirement,
                shareCount: response[i].maxCost,
                requestStatus: response[i].requestStatus,
                noOfHrsExpected: response[i].noOfHrsExpected,
                createTime: response[i].createTime,
              },
            ],
            MyList: [
              {
                id: response[i].requestId,
                title: response[i].reqName,
                description: response[i].reqDesc,
                hours: response[i].reqDesc,
                lastdate: response[i].reqDesc,
                comments: response[i].category,
                date: response[i].reqExpiry,
                commentCount: response[i].noOfRequirement,
                shareCount: response[i].maxCost,
                requestStatus: response[i].requestStatus,
                noOfHrsExpected: response[i].noOfHrsExpected,
                createTime: response[i].createTime,
              },
  
            ],
          }
        }
       
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const Home = () => {
  let [categories] = useState({
    AllList: [
      {
        id: 1,
        title: 'Developer',
        description: 'Quick Book App',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'Testing',
        description: 'New REquirement',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 3,
        title: 'Testing',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '1 month ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 4,
        title: 'Testing',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },

    ],
    Trending: [
      {
        id: 1,
        title: 'Support',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'Data Engineering',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    MyList: [
      {
        id: 1,
        title: 'Developer',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'Programmer',
        description: 'This is the new challenging requirement......',
        hours: '100',
        lastdate: '13/06/2022',
        comments: 'This is the new challenging requirement......',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
  })
  const navigate = useNavigate();
  // This will run one time after the component mounts
  useEffect(() => {
    fetchCreatedInfo();
  }, []);
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <p className="color-bg h-12 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 font-mono italic">
          <a href="/">
            <img className="h-9 w-9 rounded-full" src={logo} alt="" />
          </a>  Ende@vour
          <div className="ml-auto flex items-center">
            Contact Us
            <div className="ml-4 flow-root lg:ml-6">
              <div className="mt-1 flex items-center">
                <span className="inline-block h-11 w-11 rounded-full overflow-hidden bg-gray-100 user-profile">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="/login" className="text-sm font-bold text-gray-700 hover:text-gray-800">
                SignOut
              </a>
            </div>
          </div>
        </p>
      </header>
      <Tab.Group>
        <Tab.List className="flex space-x-1 group-bar p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-900',
                  'ring-green ring-opacity-60 ring-offset-2 ring-offset-blue-300 bg-green focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-green shadow'
                    : 'text-gray-600 hover:bg-green/[0.12] hover:text-gray'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2  text-left font-sans col-span-6 sm:col-span-3 ">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-green p-3',
                'ring-green ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className="flex space-x-1 ">
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100 border-slate-100 bg-slate-100 ">
                    <h3 className="text-md leading-5 font-bold text-green-900">
                      {post.title}
                    </h3>
                    <h4> {post.description} </h4>
                    <p>{post.comments} </p>
                    <p>
                      <span className="text-sm leading-5 font-bold">Hours :  </span> {post.hours}
                      <span className="text-sm leading-5 font-bold"> Last Date: </span> {post.lastdate}
                    </p>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                      <li>{post.requestStatus} shares</li>
                      <li>{post.noOfHrsExpected} shares</li>
                      <li>{post.createTime} shares</li>
                    </ul>
                    <button
                      type="button"
                      className="ml-40 mt-3 bg-green py-2 px-3 border border-green-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Bet & Win
                    </button>

                    <a
                      href="/bidDetails"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-gray-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Home
