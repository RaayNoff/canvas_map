import { useEffect } from "react";
import MainPage from "./components/pages/main/MainPage.component";
import { useActions } from "./hooks/useActions";

function App() {
  const { fetchFormData } = useActions();
  const { setMarksFromStorage } = useActions();
  useEffect(() => {
    setMarksFromStorage();
    fetchFormData();
  }, []);

  return <MainPage />;
}

export default App;
