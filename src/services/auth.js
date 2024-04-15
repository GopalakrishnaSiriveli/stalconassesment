// src/services/auth.js

// Simulated user data
const users = [
  { id: 1, email: "user1@example.com", password: "password1" },
  { id: 2, email: "user2@example.com", password: "password2" },
];

// Simulated authentication service
export const loginUser = async ({ email, password }) => {
  // Simulate API call to authenticate user
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};

// Simulated registration service
export const registerUser = async ({ email, password }) => {
  // Simulate API call to register user
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  localStorage.setItem("user", JSON.stringify(newUser));
  return newUser;
};

// Simulated logout service
export const logoutUser = async () => {
  // Simulate clearing user session
  localStorage.removeItem("user");
};
