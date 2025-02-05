
import { RouterProvider } from 'react-router-dom';  
import { Provider } from 'react-redux';  
import { router } from './Routers';  
import store from './Redux/store';  
import './App.css';

function App() {
  return (
    <Provider store={store}>  
      <RouterProvider router={router}>
        
      </RouterProvider>
    </Provider>
  );
}

export default App;

