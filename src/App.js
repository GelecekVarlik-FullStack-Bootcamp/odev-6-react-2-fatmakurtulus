import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Category from './components/category/Category';
import State from './components/state/State';
import Todo from './components/todo/Todo';

function App() {
  
 
//login yapma server üzrindeki bilgilere ulaşılıyor
/*const api =axios.create({baseURL:'http://localhost:80/'});

api({
  method: 'post',
  url:'auth/login',
  data: {
    
      username:'deneme',
      password:'1234'
    } 
  }).then((response) => {
  console.log(response.data);
  console.log("Succes");
 
}, (error) => {
  console.log(error);
});*/



  return (
    <div className="App">
  
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/State" element={<State />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
