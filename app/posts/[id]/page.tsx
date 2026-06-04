import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Badge } from "../../components/ui/badge";
import { getPostData, getSortedPostsData, PostContent } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ id: post.id }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData: PostContent = await getPostData(params.id);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <Link
          href="/blog"
          className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 hover:text-rust"
        >
          ← BACK / LOG
        </Link>

        <header className="mb-10 border-b-2 border-bone/30 pb-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="rust">POST</Badge>
            <Badge variant="outline">{postData.date}</Badge>
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-[1] tracking-tight sm:text-5xl">
            {postData.title}
          </h1>
        </header>

        <article
          className="prose prose-invert max-w-none
            prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight
            prose-h2:border-l-2 prose-h2:border-rust prose-h2:pl-3
            prose-a:text-rust prose-a:no-underline hover:prose-a:underline
            prose-strong:text-bone
            prose-code:rounded-none prose-code:border prose-code:border-bone/30 prose-code:bg-ash prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-rust
            prose-pre:rounded-none prose-pre:border-2 prose-pre:border-bone
            prose-blockquote:border-l-2 prose-blockquote:border-rust prose-blockquote:not-italic prose-blockquote:text-bone/80
            prose-hr:border-bone/30
            font-mono text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>
      <Footer />
    </>
  );
}
