import React from 'react';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import Banner from './IndustriesBanner';
import Description from './IndustriesDescription';
import Exploring from './IndustriesExploring';
import Industrie from './industrie';
import './styles/IndustriesStyle.css';

const Industries = () => {
  return (
    <div>
      <Banner />
      <Description />
      <Exploring />
    </div>
  );
};

export default Industries;

//--------------------------------------- Previous code-------------------------------------------------//

// import React from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaFacebookF, FaLinkedin } from "react-icons/fa";
// import Industrie from "./industrie";
// import IndustriesStyle from "./styles/IndustriesStyle.css"
// const Industries = () => {
//   return (
//     <div>
//       <div className="container">
//         <div>
//         <img className="indust-ov-img"
//           src={require("./images/industry_first.png")} height="400px" width="100%" alt="Not found"/>
//         </div>
//         <div className="border_fix" >
//         <div className="indust-over-lap" >
//           <div className="Indust_text_on">
//           <h1 className="Indust_text_on_h1" >INDUSTRIES</h1>
//           </div>
//         </div>
//         </div>
//       </div>
//       <div className="container set-to-move">
//         <div className="left-part-nav">
//           <a href="https://linkedin.com/" rel="noreferrer noopener">
//             <FaLinkedin />
//           </a>
//           <a href="https://facebook.com/" rel="noreferrer noopener">
//             <FaFacebookF />
//           </a>
//           <a href="https://twitter.com/" rel="noreferrer noopener">
//             <AiOutlineTwitter />

//           </a>
//         </div>
//         <div className="para-set-text">
//         <h1>
//             Every industry is different. Knowing the unique challenges that each
//             industry faces is critical to business success.
//           </h1>

//           <p>
//             You could work with service providers who have a general
//             understanding of business and technology - or you can choose a
//             partner with intimate knowledge of your industry. Capgemini has
//             first-hand experience of partnering with clients across industries
//             to help them get the future they want for their business.
//           </p>
//         </div>
//       </div>
//       <Industrie/>
//     </div>
//   );
// };
// export default Industries;
