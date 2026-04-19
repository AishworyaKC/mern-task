import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1>User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}
