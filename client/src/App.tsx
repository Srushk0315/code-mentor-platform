// App boot: mount React on #root
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/signup") {
    return <Signup />;
  }

  return <Dashboard />;
}

export default App;