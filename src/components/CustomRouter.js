// components/CustomRouter.js
import { useRouter } from "next/router";
import { useEffect } from "react";

const CustomRouter = ({ isLoggedIn }) => {
  const router = useRouter();

  useEffect(() => {
    if (
      !isLoggedIn &&
      !router.pathname.includes("/login") &&
      !router.pathname.includes("/signup")
    ) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return null; // Custom router component doesn't render anything
};

export default CustomRouter;
