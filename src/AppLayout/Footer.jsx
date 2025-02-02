import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#0F33A0] p-4'>
      <div className="footer-content container mx-auto text-white flex flex-col items-center justify-center gap-10 ">

        <div className="footer-upper">
          <p className='font-semibold'>Terms & Conditions | Copyright Policy | Privacy Policy | Hyperlinking Policy | Disclaimer | Help </p>          
        </div>
        <div className="footer-down flex flex-col md:flex-row gap-8 ">
        <div className="footer-c1">
        <p>©️ 2017 Remote Sensing Application Center, Uttar Pradesh.</p>
          <p>This is the Official Website of Remote Sensing Applications Center, Uttar Pradesh.
            <p>Content on this website is published abd managed by Remote Sensing Applications Center, Uttar Pradesh. </p>
              <p>For any query regarding this website, Please contact the "Web Information Manager"</p>
            </p>
        </div>
        <div className="footer-c2 flex flex-col items-end justify-center">
        <p>Last Updated on : Wednesday, Nov 20 2024</p>
            <p>10:41AM</p>
            <p>Visitor No: 00455136</p>
            <p>Powered by: RSACUP</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer