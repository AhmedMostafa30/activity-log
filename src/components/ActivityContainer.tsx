import { IoIosArrowForward } from "react-icons/io";
import { data } from "../data";
import { colorIndex, formatDateString } from "../utils";
import { useEffect, useState } from "react";
import React from "react";
import DetailsContainer from "./DetailsContainer";
import LoadMoreButton from "./LoadMoreButton";

function ActivityContainer() {
  const [expandedRows, setExpandedRows] = useState(null);
  const [bgColor, setBgColor] = useState("");
  const [noOfElements, setNoOfElements] = useState(1);

  const iconsColors: string[] = [
    "flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-purple-800 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-indigo-800 to-purple-600 text-white font-bold h-6 w-6 text-base rounded-full",
  ];

  const slice = data.slice(0, noOfElements);

  useEffect(() => {
    setBgColor(iconsColors[colorIndex()]);
  }, []);

  const handleLoadMore = () => {
    setNoOfElements(noOfElements + noOfElements);
  };

  // expand table row
  const handleExpandRow = (userId) => {
    let currentExpandedRows = null;
    const isRowExpanded = currentExpandedRows === userId ? userId : null;
    const newExpandedRows = isRowExpanded
      ? null
      : (currentExpandedRows = userId);
    if (expandedRows !== userId) {
      setExpandedRows(newExpandedRows);
    } else {
      setExpandedRows(null);
    }
  };

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
            {slice.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleExpandRow(index)}
                >
                  <td className="px-4 py-2 text-left w-1/3">
                    <div className="flex space-x-3">
                      <div className={bgColor}>
                        <span className="mb-1">{item.actor_name[0]}</span>
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
                {expandedRows === index && <DetailsContainer />}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <LoadMoreButton onLoadMore={handleLoadMore} />
      </div>
    </div>
  );
}

export default ActivityContainer;
