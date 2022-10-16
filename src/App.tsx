import { useEffect, useMemo } from "react";
import MainPage from "./components/pages/main/MainPage.component";
import { useActions } from "./hooks/useActions";
import { usePreload } from "./hooks/usePreload";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { fetchFormData } = useActions();
  const { setMarksFromStorage } = useActions();

  useEffect(() => {
    setMarksFromStorage();
    fetchFormData();
  }, []);

  useEffect(() => {});

  return <MainPage />;
}

export default App;
