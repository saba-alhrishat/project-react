import React from "react";
const Footer = () => {
    return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link rel="shortcut icon" href="me1.jpg" type="image/x-icon" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n       \n\n    footer {\n    background-color: rgb(31, 10, 17);\n    /* height: 100%; */\n  }\n\n  .footercontener {\n    padding: 70px 30px 20px;\n    width: 100%;\n}\n\n.socialicon {\n    display: flex;\n    justify-content: center;\n}\n.socialicon a {\n    text-decoration: none;\n    padding: 10px;\n    background-color: white;\n    margin: 10px;\n    border-radius: 50%;\n}\n.socialicon a:hover {\n    background-color: black;\n    transition: 0.5s;\n}\n\n.socialicon a i {\n    color: black;\n    opacity: 0.9;\n    font-size: 2em;\n}\n\n.socialicon a:hover i {\n    color: white;\n    transition: 0.5s;\n}\n.footernav{\n    margin: 30PX 0 ;\n}\n\n.footernav ul {\ndisplay: flex;\njustify-content: center;\n\n}\n\n.footernav ul li {\n    color: white;\n    margin: 20px;\n    list-style-type: none;\n    text-decoration: none;\n    font-size: 1.3em;\n    opacity: 0.7;\n    transition: 0.5s;\n}\n\n.footernav ul li a:hover {\n    opacity: 1;\n}\n\n.footerbottom{\ncolor: white;\n}\n\n.saba {\n    opacity: 0.7;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight:bolder;\n    margin:0px 5px ;\n    color: white;\n}\n\n.a1 {\n    color: white;\n}\n\n.a2 {\n    color: white;\n}\n.a3 {\n    color: white;\n}\n.a4 {\n    color: white;\n}\n@media (max-width: 700px)\n{\n    .footernav ul {\n        flex-direction: column;\n    }\n    .footernav ul li {\n\n        width: 100%;\n        text-align: center;\n        margin: 10px;\n        background-color: white;\n       \n    }\n    .footernav ul li a {\n        color: black;\n    }\n  .fff .maincard{\n    flex-direction: column;\n    height: 100%;\n    z-index: 1;\n  }\n    "
    }}
  />
  <h1>next</h1>
  <footer>
    <div className="footercontener">
      <div className="socialicon">
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="">
          {" "}
          <i className="fa-brands fa-twitter" target="_blank" />
        </a>
        <a href="">
          {" "}
          <i className="fa-brands fa-youtube" target="_blank" />
        </a>
      </div>
      <div className="footernav">
        <ul className="aa">
          <li>
            <a className="a1" href="home">
              home
            </a>
          </li>
          <li>
            <a className="a2" href="https://edition.cnn.com/">
              news
            </a>
          </li>
          <li>
            <a className="a3" href="">
              about
            </a>
          </li>
          <li>
            <a className="a4" href="">
              contact us
            </a>
          </li>
        </ul>
      </div>
      <div id="social media" className="footerbottom">
        <p style={{ textAlign: "center" }}>
          copyright ©.2025 ; software Engineering by{" "}
          <span className="saba">saba-alhrishat</span>
        </p>
      </div>
    </div>
  </footer>
</>
);
};
export default Footer;