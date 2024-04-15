// src/components/Post/CreateEditPost.js

import React, { useState } from "react";
import { createPost } from "../../services/blogPosts";

const CreateEditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      await createPost(formData);
      // Reset form fields after successful creation
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateEditPost;
