import { data } from "../data";
import { formatDateString } from "../utils";

function DetailsContainer() {
  return (
    <tr>
      <td colSpan={3}>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row items-center mt-4  space-x-40">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-tight text-left text-gray-600 uppercase">
              actor
            </h2>
            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Name
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {data[0].actor_name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Email
              </div>
              <div className="text-sm font-normal leading-tight  mt-1">
                {data[0].target_name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                ID
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {data[0].actor_id}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-tight text-left text-gray-600 uppercase">
              action
            </h2>
            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Name
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {data[0].action.name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Object
              </div>
              <div className="text-sm font-normal leading-tight  mt-1">
                {data[0].action.object}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                ID
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {data[0].action.id}
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-9">
            <h2 className="text-base font-semibold leading-tight text-left text-gray-600 uppercase">
              date
            </h2>
            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Readable
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {formatDateString(data[0].occurred_at)}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default DetailsContainer;
