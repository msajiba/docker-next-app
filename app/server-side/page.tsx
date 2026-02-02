interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // This ensures fresh data on each request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function ServerSidePage() {
  const posts = await getPosts();
  const firstFivePosts = posts.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Server-Side Data Fetching</h1>
      <p className="text-gray-600 mb-8">
        This page fetches data on the server using Next.js Server Components.
        Data is fetched at build time or request time on the server.
      </p>

      <div className="grid gap-6">
        {firstFivePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {post.id}. {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-sm text-gray-500 mt-4">User ID: {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
