import Link from "next/link";
import { posts } from "@/app/data/posts";

export default function BlogPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Meditations</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogSection/${post.slug}`}>
            <div className="border p-4 rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 cursor-pointer">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
            </div>
          </Link>

          
        ))}
      </div>
    </main>
  );
}
