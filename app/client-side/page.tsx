"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function ClientSidePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Client-Side Data Fetching</h1>
      <p className="text-gray-600 mb-8">
        This page fetches data on the client using React hooks (useEffect). Data
        is fetched after the page loads in the browser.
      </p>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                {user.name}
              </h2>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Website:</span> {user.website}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
