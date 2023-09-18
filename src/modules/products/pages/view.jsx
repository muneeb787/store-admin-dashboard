import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";


const ProductView = () => {
    const { id } = useParams();
    const axiosInstance=useAxios();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/product/${id}`)
      .then((res) => {
        toast.success("Product Details");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(data)

    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  ProductList
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Description
              </th>

                {/* <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Action
                </th> */}
              </tr>

            </thead>
            
            <tbody>
            
              <tr >
              
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.price}
                  </h5>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.description}
                  </h5>
                </td>
              
              </tr>
           
            </tbody>
            
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <div className="p-6.5">
            <div className="mb-4.5">
            <button onClick={() => navigate(-1)} type="submit"  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  BACK
                </button>
            </div></div></div>
            </table>

        </div>
      </div>
    );
  };
  
  export default ProductView;
  