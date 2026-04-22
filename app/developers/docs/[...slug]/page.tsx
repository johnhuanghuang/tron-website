import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DevSidebar } from "@/components/dev";
import { DocRenderer } from "@/components/dev/DocRenderer";
import { DocTOC, Heading } from "@/components/dev/DocTOC";
import docIndex from "@/content/docs/index.json";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)/);
    const h3Match = line.match(/^### (.+)/);

    if (h2Match) {
      const text = h2Match[1].trim();
      headings.push({ id: slugify(text), text, level: 2 });
    } else if (h3Match) {
      const text = h3Match[1].trim();
      headings.push({ id: slugify(text), text, level: 3 });
    }
  }

  return headings;
}

interface Props {
  params: { slug: string[] };
}

function findDoc(slugParts: string[]): { title: string; content: string } | null {
  const slug = slugParts.join("/");
  const docPath = path.join(process.cwd(), "content/docs", `${slug}.md`);
  if (!fs.existsSync(docPath)) return null;
  const file = fs.readFileSync(docPath, "utf-8");
  const { data, content } = matter(file);
  const d = data as { title?: string };
  return { title: d.title ?? "Untitled", content };
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  docIndex.categories.forEach((cat) => {
    cat.pages.forEach((page) => {
      params.push({ slug: [page.slug] });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = findDoc(slug);
  if (!doc) return { title: "Not Found" };
  return { title: `${doc.title} | TRON Developers` };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = findDoc(slug);
  if (!doc) notFound();

  const categories = docIndex.categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    pages: cat.pages.map((p) => ({ slug: p.slug, title: p.title })),
  }));

  const headings = extractHeadings(doc.content);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <DevSidebar categories={categories} currentSlug={slug.join("/")} />
          <article className="flex-1 min-w-0 max-w-3xl">
            <DocRenderer content={doc.content} />
          </article>
          <DocTOC headings={headings} />
        </div>
      </div>
    </main>
  );
}
