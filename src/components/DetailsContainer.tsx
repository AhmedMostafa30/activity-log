import { formatDateString } from "../utils";
import DetailsGrid from "./DetailsGrid";
import { Properties } from "./DetailsGrid";

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
  const actorProperties: Properties[] = [
    { key: "Name", value: actor_name },
    { key: "Email", value: target_name },
    { key: "ID", value: actor_id },
  ];

  const actionProperties: Properties[] = [
    { key: "Name", value: action.name },
    { key: "Object", value: action.object },
    { key: "ID", value: action.id },
  ];

  const dateProperties: Properties[] = [
    { key: "Readable", value: formatDateString(occurred_at) },
  ];

  const metaDataProperties: Properties[] = [
    { key: "Redirect", value: metadata.redirect },
    { key: "Description", value: metadata.description },
    { key: "xRequestId", value: metadata.x_request_id },
  ];

  const targetDataProperties: Properties[] = [
    { key: "targetId", value: target_id },
    { key: "targetName", value: target_name },
  ];

  return (
    <tr>
      <td colSpan={3}>
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 items-center">
          <DetailsGrid header="actor" properties={actorProperties} />
          <DetailsGrid
            header="action"
            properties={actionProperties}
            customStyles="ml-2"
          />
          <DetailsGrid
            header="date"
            properties={dateProperties}
            customStyles="items-baseline pl-14"
          />
          <DetailsGrid
            header="metadata"
            properties={metaDataProperties}
            customStyles="mt-4"
          />
          <DetailsGrid
            header="target"
            properties={targetDataProperties}
            customStyles="mt-4 ml-2"
          />
        </div>
      </td>
    </tr>
  );
}

export default DetailsContainer;
