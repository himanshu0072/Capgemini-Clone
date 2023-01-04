import './SecondComp/style.css'
import pic from "./SecondComp/image/SecImage.JPG"

function SecondComponent() {
  let text1="World Life and Health Insurance Report 2022";
  let text2="The Wellness Revolution: How insurers are driving growth with customer well-being"
    return (
      <>
{/* Second Component  with a Container*/}
<div className="containerSecond container sec" >
   <div className="flex">
    {/* Left div for Text */}
    <div className="left">
        <h3 id="SecHeading">{text1}</h3>
        <p id="SecPara">{text2}</p>
        <button className="btn btn-outline-dark" id="SecButton">Read More </button>
    </div>

    {/* Right Div for image */}
    <div className="right">
        <img className="image" src={pic} alt="world life" id="SecImages"></img>
    </div>
</div>
</div>

      </>
       
    );
  }
  
  export default SecondComponent;
  