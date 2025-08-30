// import React from 'react';
// import { Link, useState } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import'react-datepicker/dist/react-datepicker.css';


// function Login() {
//   const [selectedDate, setSelectedDate] = useState('');

//   const today = new Date().toISOString().split('T')[0];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (startDate > today) {
//       alert('Future date not allowed');
//     }else {
//       alert('Selected Date: ${startDate.toLocaleDateString()}');
//     }
//   };

//   return (
//     <div
//       style={{
//           padding: '20px',
//           border: '1px solid #ccc',
//           borderRadius: '10px',
//           boxShadow: '0 0 5px #495E57',
//           height: '80vh',
//         }}
      // id='login-page'
//     >
      // <Link to='/'><img src="./images/Logo.png" alt="logo" style={{width: "199px", height: "50px"}}/></Link>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: 'grid',
//           maxWidth: '200px',
//           gap: '20px',
//           padding: '20px',
//           border: '1px solid #ccc',
//           borderRadius: '10px',
//           boxShadow: '0 0 10px #495E57'
//         }}
//       >
//         <input
//           type='text'
//           id='name'
//           placeholder='name'
//         />
//         <input
//           type='text'
//           id='surname'
//           placeholder='surname'
//         />
//         <input
//           type='date'
//           id='date'
//           value={selectedDate}
//           max={today}
//           onChange={() => selectedDate(e.target.value)}
//           required
//         />
//         <input
//           type='text'
//           id='username'
//           placeholder='username or email address'
//         />
//         <input
//           type='text'
//           id='password'
//           placeholder='Password'
//         />
//         <button
//           className='btn-login'
//           type='submit'
//           id='login'
//           name='login'
//         >Login</button>
//         <a href='#' target='blank' id='forgotten_pass'>Forgotten password?</a>
//         <a role='button' className='btn-create_account' href='#' target='blank' id='create_account'>Create new account</a>
//       </form>
//     </div>
//   )
// }

// export default Login

// import React, { useState, Link } from 'react';
// import DatePicker from 'react-datepicker';
// import'react-datepicker/dist/react-datepicker.css';


// function Login() {
//   const [accountType, setAccountType] = useState('login');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState(new Date());
//   const [email, setEmail] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Login:', loginEmail, loginPassword);
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     console.log('Create Account:', name, surname, dateOfBirth, email);
//   };

//   return (
//     <div
//       id='login-page'
//       style={{
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '10px',
//         boxShadow: '0 0 5px #495E57',
//         // height: '80vh',
//       }}
//     >
//       {/* <Link to='/'><img src="./images/Logo.png" alt="logo" style={{width: "199px", height: "50px"}}/></Link> */}
//       {/* <div> */}
//         {accountType === 'login' ? (
//           <form
//             className='login-form'
//             onSubmit={handleLogin}
//             style={{
//               display: 'grid',
//               maxWidth: '300px',
//               gap: '20px',
//               padding: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//               boxShadow: '0 0 10px #495E57'
//             }}
//           >
//             {/* <h2>Login</h2> */}
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//             />
//             <button className='btn-login' type="submit">Login</button>
//             <>
//               {/* Forgot Password? */}
//               {/* or */}
//               {' '}

//               <span
//                 style={{ 
//                   cursor: 'pointer', 
//                   color: 'blue' 
//                 }}
//                 onClick={() => console.log('Forgot Password clicked')}
//               >
//                 Reset Password
//               </span>
//             </>
//             <>
//               {/* Don't have an account? */}
//               {' '}
//               <span
//                 style={{ cursor: 'pointer', color: 'blue' }}
//                 onClick={() => setAccountType('create')}
//               >
//                 Create Account
//               </span>
//             </>
//           </form>
//         ) : (
//           <form 
//             onSubmit={handleCreateAccount}
//             style={{
//               display: 'grid',
//               maxWidth: '200px',
//               gap: '20px',
//               padding: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//               boxShadow: '0 0 10px #495E57'
//             }}
//             className='login-form'
//           >
//             {/* <h2>Create Account</h2> */}
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Surname"
//               value={surname}
//               onChange={(e) => setSurname(e.target.value)}
//             />
//             <DatePicker
//               selected={dateOfBirth}
//               onChange={(date) => setDateOfBirth(date)}
//               dateFormat="yyyy-MM-dd"
//               placeholderText="Date of Birth"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button className='btn-create_account' type="submit">Create Account</button>
//             <>
//               Already have an account?
//               {' '}
//               <br></br>
//               <span
//                 style={{
//                   cursor: 'pointer',
//                   color: 'blue'
//                 }}
//                 onClick={() => setAccountType('login')}
//               >
//                 Login
//               </span>
//             </>
//           </form>
//         )}
//       {/* </div> */}
//     </div>
//   );
// }

// export default Login;

// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logoImage from '../assets/images/Logo.png';
import './Login.css'


function Login() {
  const [accountType, setAccountType] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', loginEmail, loginPassword);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log('Create Account:', name, surname, dateOfBirth, email);
  };

  return (
    <div className='login-page' id='login-page'>
      <div>
        <Link to="/">
          <img
            src={logoImage}
            alt="logo"
            style={{ width: '199px', height: '50px' }}
          />
        </Link>
      </div>
      <div>
        {accountType === 'login' ? (
          <form
            className="login-form"
            onSubmit={handleLogin}
            style={{
              display: 'grid',
              maxWidth: '300px',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px #495E57',
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">
              Login
            </button>
            <>
              <span
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                }}
                onClick={() => console.log('Forgot Password clicked')}
              >
                Reset Password
              </span>
            </>
            <>
              <span
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => setAccountType('create')}
              >
                Create Account
              </span>
            </>
          </form>
        ) : (
          <form
            onSubmit={handleCreateAccount}
            style={{
              display: 'grid',
              maxWidth: '200px',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px #495E57',
            }}
            className="login-form"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Date of Birth"
              id='date-picker'
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-create_account" type="submit">
              Create Account
            </button>
            <>
              Already have an account?{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                }}
                onClick={() => setAccountType('login')}
              >
                Login
              </span>
            </>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;