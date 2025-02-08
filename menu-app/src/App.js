import './App.css';
import MenuItems from './components/menuItems';
import data from './menu-items.json'
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = data
function App() {
  return (
    <div className="App">
      <div className='row dining-hall'>
        <div className='col'>
          <div className='btn'>Back</div>
        </div>
        <div className='col'>
          <div>J2 Dining</div>
        </div>
      </div>
      <div className='row search-filter'>
        <div className='col'>
          <div>Search</div>
        </div>
        <div className='col'>
          <div>filter</div>
        </div>
      </div>
      <div className='dining-options'>
        {menuItems.map((item) => (
          <MenuItems
            name={item.name}
            meal_time={item.meal_time}
            category={item.category}
          />
        ))
        }
      </div>
    </div>
  );
}

export default App;
