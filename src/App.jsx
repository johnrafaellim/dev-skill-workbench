import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes/appRoutes.jsx'

function App() {
    return useRoutes(appRoutes);
}

export default App;
