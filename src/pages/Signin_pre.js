// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const Signin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       email: username,
//       password: password,
//     };

//     try {
//       const response = await fetch('http://localhost:4000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
      
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.message || 'Registration failed!');
//       }
//     } catch (error) {
//       toast.error('Something went wrong!');
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         style={{
//           display: 'grid',
//           alignItems: 'center',
//           justifyItems: 'start',
//           height: '20vh',
//           width: '100%',
//           backgroundImage: `url('./images/signin.png')`, 
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//         }}
//       >
//         <h1
//           style={{
//             color: 'white',
//             fontSize: '3rem',
//             fontWeight: 'initial',
//             marginLeft: '3.5rem',
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
//           }}
//         >
//           Sign in
//         </h1>
//       </div>

//       <div className="signin-page">
//         {/* Sign-in Form Section */}
//         <div className="signin-container">
//           <h1 className="signin-title">Sign in My O2</h1>
//           <form className="signin-form" onSubmit={handleSubmit}>
//             <label htmlFor="username">Username (usually your email address)</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="signin-remember">
//               <input type="checkbox" id="remember" name="remember" />
//               <label htmlFor="remember">Remember my username</label>
//             </div>
//             <button type="submit" className="signin-button">Sign in</button>
//             <span>
//               <img className='icons' src="./images/icons.jpg" alt="" />
//               <span className='iconfor'></span>
//               <a href="#" className="signin-forgot">Forgotten your username or password?</a>
//             </span>
//           </form>
//           <img className='imageo2' src="./images/ido2.jpg" alt="" />
//         </div>

//         {/* Information Section */}
//         <div className="signin-info">
//           <h2 >Already an O2 customer?</h2>
//           <p>
//             If you've got a Pay Monthly account then we've automatically registered you with My O2 and given you a username and password.{' '} <br />
//             <span>
//               <img className='icons' src="./images/icons.jpg" alt="" />
//               <span className='iconfor'></span>
//               <a href="#" className="signin-forgot">Help me Sign in</a>
//             </span>
//           </p>
//           <h2>Not yet registered?</h2>
//           <p>If you're a Pay As You Go customer here are just some of the benefits of registering:</p>
//           <ul>
//             <li>Check your usage and remaining balance</li>
//             <li>Set up auto top-ups</li>
//             <li>Manage O2 Rewards</li>
//           </ul>
//           <p>
//             O2 Wifi customer? You can register to manage your account here, whatever network you're on.{' '} <br />
//             <span>
//               <img className='icons' src="./images/icons.jpg" alt="" />
//               <span className='iconfor'></span>
//               <a href="#" className="signin-forgot">Register Now</a>
//             </span>
//           </p>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Signin;
