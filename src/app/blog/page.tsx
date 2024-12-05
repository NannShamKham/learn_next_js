import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog",
  description: "this is blog",
}
export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href={'/blog/first'}>First</Link>
      <Link href={'/blog/second'}>Second</Link>
    </div>
  );
}
