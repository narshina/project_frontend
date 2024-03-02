import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='flex navcolor  p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap'>

        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>

        <div className='flex navcolor p-5 gap-6 flex-wrap text-white'>
        <Link to='/'> <div>HOME</div></Link>
        <div>LOGIN</div>
       <Link to='/userreg' > <div>REGISTER</div></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
