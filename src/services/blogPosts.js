// src/services/blogPosts.js

// Simulated blog post data
const posts = [
  {
    id: 1,
    title: "First Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: 100,
    comments: 5,
    likes: 10,
  },
  {
    id: 2,
    title: "Second Post",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    views: 150,
    comments: 8,
    likes: 15,
  },
];

// Simulated blog post service
export const getPosts = async () => {
  // Simulate API call to fetch all blog posts
  return posts;
};

export const getPostById = async (postId) => {
  // Simulate API call to fetch a single blog post by ID
  const post = posts.find((post) => post.id === postId);
  if (post) {
    return post;
  } else {
    throw new Error("Post not found");
  }
};

export const createPost = async (postData) => {
  // Simulate API call to create a new blog post
  const newPost = { id: posts.length + 1, ...postData };
  posts.push(newPost);
  return newPost;
};

export const updatePost = async (postId, postData) => {
  // Simulate API call to update an existing blog post
  const index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...postData };
    return posts[index];
  } else {
    throw new Error("Post not found");
  }
};

export const deletePost = async (postId) => {
  // Simulate API call to delete a blog post
  const index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
  } else {
    throw new Error("Post not found");
  }
};

export const getPostMetrics = async () => {
  // Simulate API call to fetch post metrics
  const views = posts.reduce((acc, post) => acc + post.views, 0);
  const comments = posts.reduce((acc, post) => acc + post.comments, 0);
  const likes = posts.reduce((acc, post) => acc + post.likes, 0);
  return { views, comments, likes };
};
