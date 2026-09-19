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
import { useState } from "react";

import { MentorProvider } from "./context/MentorContext";

import { DiagonalCarousel } from "./carousel/DiagonalCarousel";

import { LessonPage } from "./pages/LessonPage";

import "./App.css";
import "./pages/LessonPage.css";

export default function App() {
  const [selectedLesson, setSelectedLesson] =
    useState<string | null>(null);

  return (
    <MentorProvider>

      {selectedLesson ? (

        <LessonPage
          lessonId={selectedLesson}
          onBack={() =>
            setSelectedLesson(null)
          }
        />

      ) : (

        <div className="app-shell">

          <DiagonalCarousel
            onLessonStart={(lessonId) =>
              setSelectedLesson(lessonId)
            }
          />

        </div>

      )}

    </MentorProvider>
  );
}