import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export interface PostData {
	id: string;
	title: string;
	date: string;
}

export interface PostContent extends PostData {
	contentHtml: string;
}

export function getSortedPostsData(): PostData[] {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);

		return {
			id,
			title: matterResult.data.title as string,
			date: matterResult.data.date as string,
		};
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export async function getPostData(id: string): Promise<PostContent> {
	try {
		const fullPath = path.join(postsDirectory, `${id}.md`);
		const fileContents = await fs.promises.readFile(fullPath, 'utf8');
		const matterResult = matter(fileContents);
		const processedContent = await remark()
			.use(html)
			.process(matterResult.content);
		const contentHtml = processedContent.toString();

		return {
			id,
			title: matterResult.data.title as string,
			date: matterResult.data.date as string,
			contentHtml,
		};
	} catch (error) {
		console.error(`Error fetching post data: ${error}`);
		throw new Error('Could not fetch post data');
	}
}
