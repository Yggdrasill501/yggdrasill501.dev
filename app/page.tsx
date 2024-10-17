import Link from "next/link";
import { getSortedPostsData, PostData } from "../lib/posts";

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Not-organic public blog by yggdrasill501:
        </h1>
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="bg-white shadow-md rounded-lg p-6">
              <Link href={`/posts/${id}`} className="block">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600">{date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
