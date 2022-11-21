import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import {CategoryArr} from './CategoryArr';

export default function Sidebar(props){
const [categoryName,setcategoryName] = useState("general"); 
const [openSidebar,setopenSidebar] = useState(true);

 function handleCategory(e){
    setcategoryName(Number(e.target.value));
    console.log(Number(e.target.value));
 }

 function toggleSidebar(){
    if(openSidebar===true){
      setopenSidebar(false);
    }
    else{
      setopenSidebar(true);
    }
    
  } 
  
    return (
      <div className='container sidebar sticky-top' style={{height:window.innerHeight<"500px"?"100%":window.innerHeight, backgroundColor:`${props.mode==="danger"?"rgb(248, 225, 230)":"rgb(70, 70, 70)"}`,width:openSidebar===true?"16rem":"5rem"}}>
            <h3 style={{color:`${props.mode==="danger"?"black":"white"}`}}><span style={{display:openSidebar===true?"":"none"}}>Category</span>
            <img src={require(".//img/sidebarLogo.png")} alt="." onClick={toggleSidebar}/></h3>
            <hr style={{color:`${props.mode==="danger"?"black":"white"}`}}></hr>
            <ul>
                {CategoryArr.map((element,key) => {
                  return(
                      <Link  className='side-link' to={`${element.path}`} > 
                          <li value={key} className={`sidebar-cat ${categoryName===key? `${props.mode==="danger"?"activeSidebar":"activeSidebarDark"}` : ""} `} onClick={handleCategory} style={{color:`${props.mode==="danger"?"black":"white"}`}}>
                            <img src={element.icon} alt="." value={key} onClick={handleCategory} style={{height:"1.5rem", margin:"0.5rem"}}/><span value={key} onClick={handleCategory} style={{display:openSidebar===true?"":"none"}}>{element.name}</span> 
                          </li>  
                      </Link>
                  )
                })}
            </ul>
            <div className="form-check form-switch">
                <label className={`form-check-label`} forhtml="flexSwitchCheckDefault" style={{color:`${props.mode==="danger"?"black":"white"}`,display:openSidebar===true?"":"none"}}>Dark mode</label>
                <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" style={{marginLeft:openSidebar===true?"-2.5rem":"-3rem"}} onClick={props.toggleMode}/>
            </div>
            
      </div>
    )
}
