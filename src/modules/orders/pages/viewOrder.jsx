import React from 'react';

const ViewOrder = ({ orderData }) => {
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        {/* <!-- Order Details --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Order Details
            </h3>
          </div>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Product Name
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.productName}
              </p>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Order Quantity
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.orderQuantity}
              </p>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Product Price
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.productPrice}
              </p>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Total Order Price
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.totalOrderPrice}
              </p>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Order Status
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.orderStatus}
              </p>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Transaction ID
              </label>
              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {orderData.transactionID}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
