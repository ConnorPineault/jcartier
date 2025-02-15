import { posts } from "@/app/data/posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === decodeURIComponent(params.slug));

  if (!post) {
    return <h1 className="text-center text-2xl font-bold">Post Not Found</h1>;
  }

  return (
<main className="container mx-auto p-6 max-w-3xl">
  <h1 className="text-3xl font-bold text-left">{post.title}</h1>
  <p className="text-sm text-gray-500 text-center">{post.date}</p>
  <article className="mt-4 text-justify">
    <p>{post.content}</p>
  </article>
</main>





  );
}
