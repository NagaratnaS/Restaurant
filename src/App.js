import FoodIcon from './Images/FoodIcon.jpg'
import Header from './Header/Header';
import Orders from './Orders/Order';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh' , backgroundImage: `url(${FoodIcon})` , backgroundSize:"100%" , backgroundRepeat: 'no-repeat' }}>
      <Header/>

      <div>
        <Orders/>
      </div>
    </div>
  );
}

export default App;
