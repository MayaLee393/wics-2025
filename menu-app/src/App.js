import './App.css';
import AddUserButton from './components/AddUserButton';
import MenuItems from './components/menuItems';
import data from './menu-items.json'
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = data;
function App() {
  return (
    <div className="App">
      <div className='row dining-hall'>
        <div className='col-5 back'>
          <div className='btn border btn-light'>&lt;</div>
        </div>
        <div className='col'>
          <div className='dining_hall'><b>J2 Dining</b></div>
        </div>
      </div>
      <div className='row search-filter'>
        <div className='col'>
          <div>Search</div>
        </div>
        <div className='col'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
          </svg>
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
      <AddUserButton>button</AddUserButton>
    </div>
  );
}

export default App;
