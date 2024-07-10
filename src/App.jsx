import './App.css';
import tick from './image/tick.svg';
import wrong from './image/wrong.svg';
function App() {

  return (
    <div className='main-cont'>
    
    <PriceCard/>
      
    </div>
  );
}
export default App




function PriceCard(){
  return(
    <div className='prices'>
      <div className='free-cost'>
        <h3 className='headline'>FREE</h3>
        <h2 className='pricetag'>$0/month</h2>
        <hr></hr>
        <p><img className='tick-icon' src={tick}/>Single User</p>
        <p><img className='tick-icon' src={tick}/>50GB storage</p>
        <p><img className='tick-icon' src={tick}/>Unlimited Public Projects</p>
        <p><img className='wrong-icon' src={wrong}/>Community Access</p>
        <p><img className='wrong-icon' src={wrong}/>Unlimited Private Projects</p>
        <p><img className='wrong-icon' src={wrong}/>Dedicated Phone Support</p>
        <p><img className='wrong-icon' src={wrong}/>Monthly Status Reports</p>
        <button className='select-btn'>Select</button>
        
        
      </div>
      <div className='mid-cost'>
        <h3 className='headline'>PLUS</h3>
        <h2 className='pricetag'>$9/month</h2>
        <hr></hr>
        <p><img className='tick-icon' src={tick}/>Single User</p>
        <p><img className='tick-icon' src={tick}/>50GB storage</p>
        <p><img className='tick-icon' src={tick}/>Unlimited Public Projects</p>
        <p><img className='tick-icon' src={tick}/>Community Access</p>
        <p><img className='tick-icon' src={tick}/>Unlimited Private Projects</p>
        <p><img className='wrong-icon' src={wrong}/>Dedicated Phone Support</p>
        <p><img className='wrong-icon' src={wrong}/>Monthly Status Reports</p>
        <button className='select-btn'>Select</button>
        
        
      </div>
      <div className='vip-cost'>
        <h3 className='headline'>PRO</h3>
        <h2 className='pricetag'>$49/month</h2>
        <hr></hr>
        <p><img className='tick-icon' src={tick}/>Single User</p>
        <p><img className='tick-icon' src={tick}/>50GB storage</p>
        <p><img className='tick-icon' src={tick}/>Unlimited Public Projects</p>
        <p><img className='tick-icon' src={tick}/>Community Access</p>
        <p><img className='tick-icon' src={tick}/>Unlimited Private Projects</p>
        <p><img className='tick-icon' src={tick}/>Dedicated Phone Support</p>
        <p><img className='tick-icon' src={tick}/>Monthly Status Reports</p>
        <button className='select-btn'>Select</button>
        
        
        
      </div>
    </div>
  )  

}