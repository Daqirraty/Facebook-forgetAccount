// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import StudentCards from './StudentCardLayout/StudentCards';

function App() {
  return (
  <Fragment>
      <div className="d-flex row mb-5 mx-0 ">
        <div className='col border border-danger justify-content-end bg-primary fs-1 '>ZULFAH</div>
        <div className='col border border-primary bg-warning fs-1'>TRAINING</div>
      </div>
          <StudentCards/>
 
  </Fragment>
    
  );
}

export default App;
