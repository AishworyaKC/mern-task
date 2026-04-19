import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Home Page</h1>
      <Link to="/user/1">Go to User 1</Link> <br />
      <Link to="/user/2">Go to User 2</Link>
    </div>
  );
}
