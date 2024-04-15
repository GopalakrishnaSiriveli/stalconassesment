// src/components/Dashboard/Dashboard.js

import React, { useState, useEffect } from "react";
import { getPostMetrics } from "../../services/blogPosts";

const Dashboard = () => {
  const [postMetrics, setPostMetrics] = useState({
    views: 0,
    comments: 0,
    likes: 0,
  });

  useEffect(() => {
    const fetchPostMetrics = async () => {
      try {
        const metrics = await getPostMetrics();
        setPostMetrics(metrics);
      } catch (error) {
        console.error("Failed to fetch post metrics:", error);
      }
    };
    fetchPostMetrics();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Post Metrics</h3>
        <ul>
          <li>Views: {postMetrics.views}</li>
          <li>Comments: {postMetrics.comments}</li>
          <li>Likes: {postMetrics.likes}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
