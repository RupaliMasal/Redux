import logo from './logo.svg';
import './App.css';


// import Navbar from './Components/Navbar';
// import BodyComp from './Components/BodyComp';
import { Provider } from 'react-redux';
import Home from './ToolKit/Home';
import { store } from './ToolKit/Store';
// import store from './ReduxStore/Store';
// import store1 from './ReduxStore/Store1';
// // import Comp1 from './Components/Comp1';
// import RouterPage from './NewProject/RouterPage';
// import { myStore } from './ReduxWthClass/Store';
// import Redux from './ReduxWthClass/Redux';
// import Home from './ReduxToolkit/Home';
// import { store } from './ReduxToolkit/Store';



function App() {
  return (
    <div className="App">
    {/* <Provider store={store}>
       <Navbar/>
      <BodyComp/>
      {/* <Comp1/> */}
      {/* <RouterPage/>
    </Provider>  */}
    {/* <Provider store={myStore}>
<Redux/>
    </Provider> */}
    <Provider store={store}>
      <Home/>
    </Provider>
    </div>
  );
}

export default App;
