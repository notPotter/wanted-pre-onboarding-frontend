import { useRoutes } from 'react-router-dom';
import { router } from 'src/routers';

function App() {
  const content = useRoutes(router);

  return <div className="App">{content}</div>;
}

export default App;
