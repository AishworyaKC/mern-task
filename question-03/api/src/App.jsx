import { useEffect, useState } from "react";

const LIMIT = 10;

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  const startIndex = (page - 1) * LIMIT;
  const paginatedData = data.slice(startIndex, startIndex + LIMIT);

  const totalPages = Math.ceil(data.length / LIMIT);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Posts with Pagination
      </h1>

      {/* Loading */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {/* List */}
          <div className="grid gap-3 max-w-2xl mx-auto">
            {paginatedData.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow rounded">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Prev
            </button>

            <span className="px-3 py-1">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
