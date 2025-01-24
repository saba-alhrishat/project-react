
import React from "react";
const Navbar = () => {
    return (
<>

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>nav-bar</title>
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
        "\n    nav {\n            position: fixed; \n            top: 0;          \n            left: 0;         \n            width: 100%;     \n            z-index: 1000;       \n            opacity:0.95;\n      }\n        \n        .ul1 {\n        height: 70px;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        background-color: rgb(31, 10, 17);\n        padding-top: 13px;\n      \n       width: 100%;\n    }\n        li a {\n        color: #fbdfd8;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n        transition: 1.5s;\n        }\n        \n        li a:hover {\n        background-color: #cc6b8e;\n        border-radius: 30px;\n        text-decoration-line: underline ;\n        text-decoration-color: #333;\n        } \n    \n        "
    }}
  />

  <nav>
    <div>
      <ul className="ul1">
        <img
          src="logo.webp"
          width="60vh"
          style={{ padding: 10, margin: 10 }}
          alt=""
        />
        <li>
          {" "}
          <a href="#About me">About us</a>
        </li>
        <li>
          <a href="#intersts">herp section</a>
        </li>
        <li>
          <a href="#education">Services</a>
        </li>
        <li>
          <a href="#project">activity</a>
        </li>
        <li>
          <a href="#Teams">social media</a>
        </li>
        <li>
          <a href="#contact-us">contact-us</a>
        </li>
      </ul>
    </div>
  </nav>
</>
);
};
export default Navbar;