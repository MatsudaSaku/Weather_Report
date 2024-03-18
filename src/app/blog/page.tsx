// app/blog/page.tsx
import React from "react";
import Layout from "../components/Layout";

export default function BlogPage() {
  return (
    <Layout>
      <div className="font-sans antialiased text-gray-800">
        <main className="py-20">
          <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold">ブログタイトル</h2>
            <p className="text-lg mt-2">ブログの本文を記載します</p>
          </article>
        </main>
      </div>
    </Layout>
  );
}
