import { getPostData, getSortedPostsData, PostContent } from '../../../lib/posts';

export async function generateStaticParams() {
	const posts = getSortedPostsData();
	return posts.map((post) => ({
		id: post.id,
	}));
}

export default async function Post({ params }: { params: { id: string } }) {
	const postData: PostContent = await getPostData(params.id);

	return (
		<main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<article className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">{postData.title}</h1>
				<p className="text-gray-600 mb-8">{postData.date}</p>
				<div
					className="prose prose-lg"
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</main>
	);
}

