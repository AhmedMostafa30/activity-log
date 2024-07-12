import React from "react";
export interface Properties {
  key: string;
  value: string;
}
interface Props {
  header: string;
  properties: Properties[];
  customStyles?: string;
}
function DetailsGrid({ header, properties, customStyles = "" }: Props) {
  return (
    <div className={`flex flex-col ${customStyles}`}>
      <h2 className="text-base font-semibold leading-tight text-left text-gray-600 uppercase">
        {header}
      </h2>

      {properties.map((properity) => (
        <div className="flex flex-row justify-start space-x-2">
          <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
            {properity.key}
          </div>
          <div className="text-sm font-normal leading-tight mt-1">
            {properity.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsGrid;
