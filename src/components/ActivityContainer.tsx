import { IoIosArrowForward } from "react-icons/io";
import { data } from "../data";
import { colorIndex, formatDateString } from "../utils";

function ActivityContainer() {
  const iconsColors: string[] = [
    "flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-purple-800 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-indigo-800 to-purple-600 text-white font-bold h-6 w-6 text-base rounded-full",
  ];

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      <div className="place-self-center mt-8 rounded-md overflow-hidden w-full">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-gray-600">
              <th className="px-4 py-2 text-left uppercase">actor</th>
              <th className="px-4 py-2 text-left uppercase">action</th>
              <th className="px-4 py-2 text-left uppercase">date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="hover:bg-gray-100" key={item.id}>
                <td className="px-4 py-2 text-left w-1/3">
                  <div className="flex space-x-3">
                    <div className={iconsColors[colorIndex()]}>
                      <span className="mb-1">A</span>
                    </div>
                    <p className="font-inter text-base font-normal leading-5 text-left">
                      {item.target_name}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left">
                  {item.metadata.description}
                </td>
                <td className="px-4 py-2 text-left flex justify-between">
                  <p>{formatDateString(item.occurred_at)}</p>
                  <div>
                    <IoIosArrowForward />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityContainer;
