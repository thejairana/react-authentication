// pages/logout.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = ({ setIsLoggedIn }) => {
  const router = useRouter();

  useEffect(() => {
    // Call logout API to invalidate session
    // You need to implement this logic
    setIsLoggedIn(false); // Update isLoggedIn state
    router.push("/login"); // Redirect to login page after logout
  }, []);

  return null;
};

export default Logout;
