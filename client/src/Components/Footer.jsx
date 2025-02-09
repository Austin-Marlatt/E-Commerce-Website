import React from "react";

//@Alex design this footer 
function Footer () {
    return (
    <div className="row">
    <div className="col-md-12">
        <div className="infoma text_align_left">
            <ul className="social_icon">
                <li ><a className="fa fa-facebook m-1" 
                style={{borderRadius: "50%", width:"50px", height:"50px"}} 
                href="https://www.facebook.com/calvin.yue.10" target="_blank" 
                rel="noopener noreferrer"></a></li>
                
                <li ><a className="fa fa-linkedin-square m-1" 
                style={{borderRadius: "20%", width:"50px", height:"50px"}} 
                href="https://www.linkedin.com/in/calvin-yue-a5425979/" target="_blank" 
                rel="noopener noreferrer"></a></li>

                <li><a className="fa fa-instagram m-1"
                style={{borderRadius:"10%", width:"50px", height:"50px"}}
                href="https://www.instagram.com/" target="_blank"
                rel="noopener noreferrer"> 
                </a></li>

                <li><a className="fa fa-twitter m-1"
                style={{borderRadius:"50%", width:"50px", height:"50px"}}
                href="https://x.com/?lang=en" target="_blank"
                rel="noopener noreferrer"> 
                </a></li>

                <li><a className="fa fa-youtube m-1"
                style={{borderRadius:"50%", width:"50px", height:"50px"}}
                href="https://www.youtube.com/" target="_blank"
                rel="noopener noreferrer"> 
                </a></li>
            </ul>
        </div>
    </div>
    </div>
    )
};
export default Footer;
//exported to the Homepage