import Link from 'next/link';
export default function Page() {
  return <section className="max-w-3xl mx-auto px-6 py-12"><h1 className="text-3xl font-serif mb-4">Awards</h1><p>This section is now part of <Link className="underline" href="/cv/">my CV</Link>.</p></section>;
}
