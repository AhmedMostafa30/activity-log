import { data } from "../data";
import { formatDateString } from "../utils";

interface Props {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string;
  };
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata: {
    redirect: string;
    description: string;
    x_request_id: string;
  };
}

function DetailsContainer({
  id,
  object,
  actor_id,
  actor_name,
  group,
  action,
  target_id,
  target_name,
  location,
  occurred_at,
  metadata,
}: Props) {
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
                {actor_name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Email
              </div>
              <div className="text-sm font-normal leading-tight  mt-1">
                {target_name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                ID
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {actor_id}
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
                {action.name}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                Object
              </div>
              <div className="text-sm font-normal leading-tight  mt-1">
                {action.object}
              </div>
            </div>

            <div className="flex flex-row justify-start space-x-2">
              <div className="text-sm font-normal leading-tight text-left text-gray-600 mt-1">
                ID
              </div>
              <div className="text-sm font-normal leading-tight mt-1">
                {action.id}
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
                {formatDateString(occurred_at)}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default DetailsContainer;
