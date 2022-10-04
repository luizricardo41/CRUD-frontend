import { UsersInfoProvider } from "./context/UserContext";
import Home from "./pages/Home";

function App() {

  return (
    <UsersInfoProvider>
      <Home />

    </UsersInfoProvider>
  )
}

export default App;
