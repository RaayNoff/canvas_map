import { useEffect } from "react";
import MainPage from "./components/pages/main/MainPage.component";
import { useActions } from "./hooks/useActions";

function App() {
  const { fetchFormData } = useActions();
  const { getAllMarks } = useActions();
  useEffect(() => {
    getAllMarks();
    fetchFormData();
  }, []);

  return <MainPage />;
}

export default App;
