// pages/profile.js
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch user profile data
    // You need to implement this logic
    setUsername("example_user"); // Dummy username for demonstration
  }, []);

  return (
    <div>
      <Header />
      <h1>Profile Page</h1>
      <ProfileInfo username={username} />
      {/* Add profile page content here */}
      <Footer />
    </div>
  );
};

export default Profile;
