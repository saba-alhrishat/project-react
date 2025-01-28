
// import React, { useState } from "react";

// function Login() {
//   // بكون داخلها 3 اشياء ال usestate + regix + valid

//   // 1
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
// // 2
//   const nameRegex = /^[a-zA-Z]+$/;
//   const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// // 3
//   const validate = () => {
//     const newErrors = {};

//     if (!form.firstName.trim()) {
//       newErrors.firstName = "First Name is required";
//     } else if (!nameRegex.test(form.firstName)) {
//       newErrors.firstName = "First name must contain only letters";
//     }

//     if (!form.lastName.trim()) {
//       newErrors.lastName = "Last Name is required";
//     } else if (!nameRegex.test(form.lastName)) {
//       newErrors.lastName = "Last name must contain only letters";
//     }

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(form.email)) {
//       newErrors.email = "Email is not valid";
//     }

//     if (!form.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (!passwordRegex.test(form.password)) {
//       newErrors.password = "Password must contain at least 8 characters, including letters and numbers";
//     }

//     setError(newErrors); // تحديث حالة الأخطاء
//     return Object.keys(newErrors).length === 0; // إرجاع true إذا لم تكن هناك أخطاء
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     const isValid = validate();
//     if (isValid) {
//       console.log("Form submitted successfully!", form);
//     } else {
//       console.log("Form has errors.");
//     }
//   };

//   const change = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <section className="showcase">
//         <div className="overlay">
//           <article>
//             <h1>Learn to code by watching others</h1>
//             <p>
//               See how experienced developers solve problems in real-time.
//               Watching scripted tutorials is great, but understanding how
//               developers think is invaluable.{" "}
//             </p>
//           </article>
//           <article>
//             <p className="tag">
//               <strong>Try it free 7 days</strong> then $20/mo. thereafter
//             </p>
//             <form className="form" onSubmit={submit}>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 placeholder="First Name"
//                 value={form.firstName}
//                 onChange={change}
//               />
//               {error.firstName && <div className="error">{error.firstName}</div>}

//               <input
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 placeholder="Last Name"
//                 value={form.lastName}
//                 onChange={change}
//               />
//               {error.lastName && <div className="error">{error.lastName}</div>}

//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={change}
//               />
//               {error.email && <div className="error">{error.email}</div>}

//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={change}
//               />
//               {error.password && <div className="error">{error.password}</div>}

//               <button type="submit">Claim your free trial</button>
//               <small>
//                 By clicking the button, you are agreeing to our{" "}
//                 <span className="red">Terms and Services</span>
//               </small>
//             </form>
//           </article>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;



















import React, { useState, useEffect } from "react";

function Login() {
//   // بكون داخلها 3 اشياء ال usestate + regix + valid
const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "First name must contain only letters";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Last name must contain only letters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = "Password must contain at least 8 characters, including letters and numbers";
    }

    setError(newErrors); 
    return Object.keys(newErrors).length === 0; 
  };

  const submit = (e) => {
    e.preventDefault();

    const isValid = validate(); 
    if (isValid) {
      console.log("Form submitted successfully!", form);

      localStorage.setItem("userData", JSON.stringify(form));

      alert("Form submitted successfully and data saved to localStorage!");
    } else {
      console.log("Form has errors.");
    }
  };

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setForm(parsedData); 
    }
  }, []);

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </article>
          <article>
            <p className="tag">
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
            <form className="form" onSubmit={submit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={change}
              />
              {error.firstName && <div className="error">{error.firstName}</div>}

              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={change}
              />
              {error.lastName && <div className="error">{error.lastName}</div>}

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={form.email}
                onChange={change}
              />
              {error.email && <div className="error">{error.email}</div>}

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={change}
              />
              {error.password && <div className="error">{error.password}</div>}

              <button type="submit">Claim your free trial</button>

              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Login;
