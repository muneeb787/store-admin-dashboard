import React, { useState, useEffect} from 'react';
import useAxios from '../../../hooks/axios';

const ViewUserDetails = () => {
      const [users, setUsers] = useState([]);

      useEffect(() => {
        const axiosInstance = useAxios();
        axiosInstance
          .get('/users')
          .then((res) => {
            console.log(res.data.users);
            setUsers(res.data.users);
            console.log(users, 'Users loaded');
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);
    return (
      <div>
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0"
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            {users.map((user) => {
              return (
                <>
                    <div
                      className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                    >
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <label className="font-medium text-gray-800">
                          Name
                        </label>
                        <br />
                        <p className="text-black dark:text-white">
                          {user.name}
                        </p>
                        <br />
                        <label className="font-medium text-gray-800">
                          Email
                        </label>
                        <br />
                        <p className="text-black dark:text-white">
                          {user.email}
                        </p>
                        <br />
                        <label className="font-medium text-gray-800">
                          Role
                        </label>
                        <br />
                        <p className="text-black dark:text-white">
                          {user.role}
                        </p>
                        <br />
                        <label className="font-medium text-gray-800">
                          Address
                        </label>
                        <br />
                        <p className="text-black dark:text-white">
                          {user.address}
                        </p>
                        <br />
                      </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                          onClick="toggleModal()"
                        >
                          <i className="fas fa-times"></i> Cancel
                        </button>
                      </div>
                    </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
export default ViewUserDetails;
