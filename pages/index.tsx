import React from "react";
import PostForm from "../components/PostForm";
import AllPost from "../components/AllPost";

export default function App() {
  return (
    <div className="app">
      <h1>Next js TypeScript and Redux</h1>
      <PostForm />
      <AllPost />
    </div>
  );
}
