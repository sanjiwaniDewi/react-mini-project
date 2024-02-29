import { useRoutes } from "react-router-dom";
import routeslist from "./routes/routes";

function App() {
    const element = useRoutes(routeslist);

    return element;
}

export default App;
