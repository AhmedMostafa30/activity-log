import { IoIosArrowForward } from "react-icons/io";
import { IoDownloadSharp } from "react-icons/io5";
import { data } from "../data";
import { formatDateString } from "../utils";
import { useEffect, useState } from "react";
import React from "react";
import DetailsContainer from "./DetailsContainer";
import LoadMoreButton from "./LoadMoreButton";
import { exportToCsv, headers, mappedData } from "../utils";

function ActivityContainer() {
  const [expandedRows, setExpandedRows] = useState<number | null>(null);
  const [randomClasses, setRandomClasses] = useState<string[]>([]);
  const [noOfElements, setNoOfElements] = useState<number>(4);
  const [search, setSearch] = useState<string>("");

  const iconsColors: string[] = [
    "flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-purple-800 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white font-bold h-6 w-6 text-base rounded-full",
    "flex items-center justify-center bg-gradient-to-br from-indigo-800 to-purple-600 text-white font-bold h-6 w-6 text-base rounded-full",
  ];

  useEffect(() => {
    const classes = Array.from({ length: iconsColors.length }, () => {
      const randomIndex = Math.floor(Math.random() * iconsColors.length);
      return iconsColors[randomIndex];
    });
    setRandomClasses(classes);
  }, []);

  const handleLoadMore = () => {
    setNoOfElements(noOfElements + noOfElements);
  };

  const filteredData = data
    .filter((item) => {
      const searchTerm = search.toLowerCase();
      if (searchTerm === "") {
        return true; // Return true to include all items if search is empty
      }

      // Convert fields to lowercase and check if they include the search term
      return (
        item.actor_name.toLowerCase().includes(searchTerm) ||
        item.target_name.toLowerCase().includes(searchTerm) ||
        item.action.id.toLowerCase().includes(searchTerm) ||
        item.action.name.toLowerCase().includes(searchTerm) ||
        item.action.object.toLowerCase().includes(searchTerm)
      );
    })
    .slice(0, noOfElements);

  // expand table row
  const handleExpandRow = (userId: number) => {
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

  const handleExportCsv = () => {
    exportToCsv("exported_data.csv", headers, mappedData);
  };

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      <div className="place-self-center mt-8 rounded-md overflow-hidden w-full">
        <div className="flex flex-row border bg-gray-100">
          <input
            className="w-3/4 p-2 border bg-gray-100 outline-none"
            placeholder="Search name, email or action..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div
            className="flex flex-row border-1 p-2 bg-gray-100 cursor-pointer"
            onClick={handleExportCsv}
          >
            <div className="mt-1">
              <IoDownloadSharp />
            </div>
            <div className="pb-1 text-gray-600">EXPORT</div>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-gray-600">
              <th className="px-4 py-2 text-left uppercase">actor</th>
              <th className="px-4 py-2 text-left uppercase">action</th>
              <th className="px-4 py-2 text-left uppercase">date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleExpandRow(index)}
                >
                  <td className="px-4 py-2 text-left w-1/3">
                    <div className="flex space-x-3">
                      <div
                        className={randomClasses[index % iconsColors.length]}
                      >
                        <span className="mb-1">{item.actor_name[0]}</span>
                      </div>
                      <p className="font-inter text-base font-normal leading-5 text-left">
                        {item.target_name}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-left">{item.action.name}</td>
                  <td className="px-4 py-2 text-left flex justify-between">
                    <p>{formatDateString(item.occurred_at)}</p>
                    <div>
                      <IoIosArrowForward />
                    </div>
                  </td>
                </tr>
                {expandedRows === index && <DetailsContainer {...item} />}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {filteredData.length < data.length && search == "" && (
          <LoadMoreButton onLoadMore={handleLoadMore} />
        )}
      </div>
    </div>
  );
}

export default ActivityContainer;
