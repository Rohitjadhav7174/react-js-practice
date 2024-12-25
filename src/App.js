// form
// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     errors: {},
//   };

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   validateForm = () => {
//     const { name, email, password } = this.state;
//     const errors = {};

//     if (!name.trim()) {
//       errors.name = "Name is required";
//     }
//     if (!email.includes("@")) {
//       errors.email = "Invalid email format";
//     }
//     if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
//      this.setState({errors});
//      return Object.keys(errors).lengthcc===0;
//     // this.setState({ errors });
//     // return Object.keys(errors).length === 0;
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.validateForm()) {
//       alert("Form submitted successfully!");
//       // Reset form fields
//       this.setState({ name: "", email: "", password: "", errors: {} });
//     }
//   };

//   render() {
//     const { name, email, password, errors } = this.state;

//     return (
//       <div className="mar">
//         <h1>Registration Form</h1>

//         <form onSubmit={this.onSubmit}>
//           <div className="input">
//             <label>Name : </label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.onChange}
//             />
//             {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
//           </div>

//           <div className="input">
//             <label>Email : </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.onChange}
//             />
//             {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
//           </div>

//           <div className="input">
//             <label>Password : </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.onChange}
//             />
//             {errors.password && (
//               <div style={{ color: 'red' }}>{errors.password}</div>
//             )}
//           </div>

//           <div className="input">
//             <button type="submit" className="i">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

// ---------------------------------------------------------*********************------------------------------------------------------------
// 2.todo list
// import React, { useState } from 'react';

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([]); // State to store the list of tasks
//   const [currentTask, setCurrentTask] = useState(''); // State to store the input for a new task
//   const [editIndex, setEditIndex] = useState(null); // State to store the index of the task being edited

//   // Handle adding or editing a task
//   const handleAddTask = () => {
//     if (!currentTask.trim()) {
//       alert("Task cannot be empty!");
//       return;
//     }

//     if (editIndex !== null) {
//       // Edit mode
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = currentTask;
//       setTasks(updatedTasks);
//       setEditIndex(null); // Exit edit mode
//     } else {
//       // Add mode
//       setTasks([...tasks, currentTask]);
//     }

//     setCurrentTask(''); // Clear input field
//   };

//   // Handle editing a task
//   const handleEditTask = (index) => {
//     setCurrentTask(tasks[index]); // Load the selected task into the input field
//     setEditIndex(index); // Set edit index
//   };

//   // Handle deleting a task
//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
//       <h1>Todo List</h1>

//       {/* Input Field */}
//       <input
//         type="text"
//         value={currentTask}
//         onChange={(e) => setCurrentTask(e.target.value)}
//         placeholder="Enter a task"
//         style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
//       />

//       {/* Add/Edit Button */}
//       <button
//         onClick={handleAddTask}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: editIndex !== null ? 'orange' : 'green',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//       >
//         {editIndex !== null ? 'Edit Task' : 'Add Task'}
//       </button>

//       {/* Task List */}
//       <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '10px',
//               padding: '10px',
//               border: '1px solid #ddd',
//               borderRadius: '5px',
//             }}
//           >
//             {task}
//             <div>
//               <button
//                 onClick={() => handleEditTask(index)}
//                 style={{
//                   marginRight: '10px',
//                   padding: '5px 10px',
//                   backgroundColor: 'blue',
//                   color: 'white',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteTask(index)}
//                 style={{
//                   padding: '5px 10px',
//                   backgroundColor: 'red',
//                   color: 'white',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;



//----------------------------------------------------------***************************_---------------------------------------------------------------------
// 3. CounterApp
// import React, { useState } from 'react';

// const CounterApp = () => {
//   // State to manage the counter value
//   const [counter, setCounter] = useState(0);

//   // Function to increment the counter
//   const increment = () => setCounter(counter + 1);

//   // Function to decrement the counter
//   const decrement = () => setCounter(counter - 1);

//   // Function to reset the counter
//   const reset = () => setCounter(0);

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Counter Application</h1>
      
//       {/* Displaying the current counter value */}
//       <h2>{counter}</h2>

//       {/* Buttons for increment, decrement, and reset */}
//       <div>
//         <button 
//           onClick={increment} 
//           style={{ margin: '10px', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
//         >
//           Increment
//         </button>
//         <button 
//           onClick={decrement} 
//           style={{ margin: '10px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
//         >
//           Decrement
//         </button>
//         <button 
//           onClick={reset} 
//           style={{ margin: '10px', padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CounterApp;



//-------------------------------------------------------------------*******************______--------------------_________-------------------------------------------------------

//Q4)navbar

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import './App.css'; // Add your CSS for styling

// // Simple components for each page
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

// const App = () => {
//   return (
//     <Router>
//       {/* Navbar with links */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/" end className="nav-link">Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className="nav-link">About</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="nav-link">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Route Definitions */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



//----------------------------------------************************************---------------------------------------------------------------------------------------
//Q5 tabel
// import React, { useState } from 'react';

// // Sample user data
// const users = [
//   { name: 'Alice', email: 'alice@example.com', age: 25 },
//   { name: 'Bob', email: 'bob@example.com', age: 30 },
//   { name: 'Charlie', email: 'charlie@example.com', age: 35 },
//   { name: 'David', email: 'david@example.com', age: 40 },
//   { name: 'Eve', email: 'eve@example.com', age: 22 },
// ];

// const App = () => {
//   const [data, setData] = useState(users); // State to store users data
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term
//   const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' }); // State for sorting

//   // Search filter
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const filteredData = users.filter((user) =>
//       user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       user.email.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setData(filteredData);
//   };

//   // Sorting function
//   const handleSort = (column) => {
//     const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
//     const sortedData = [...data].sort((a, b) => {
//       if (a[column] < b[column]) {
//         return direction === 'asc' ? -1 : 1;
//       }
//       if (a[column] > b[column]) {
//         return direction === 'asc' ? 1 : -1;
//       }
//       return 0;
//     });
//     setData(sortedData);
//     setSortConfig({ key: column, direction });
//   };

//   return (
//     <div className="App">
//       <h1>User Table</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by Name or Email"
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       {/* Table */}
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('name')}>Name</th>
//             <th onClick={() => handleSort('email')}>Email</th>
//             <th onClick={() => handleSort('age')}>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------_****************************_--------------------------------------------------------------------------------
//Q6) calculator

// import React, { useState } from 'react';

// function Calculator() {
//   const [input, setInput] = useState('');

//   // Handle button click
//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   // Handle delete button click
//   const handleDelete = () => {
//     setInput(input.slice(0, -1)); // Remove the last character
//   };

//   // Handle calculation
//   const handleCalculate = () => {
//     try {
//       setInput(eval(input).toString());
//     } catch (error) {
//       setInput('Error');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.screen}>
//         <input
//           type="text"
//           value={input}
//           readOnly
//           style={styles.input}
//         />
//       </div>
//       <div style={styles.buttons}>
//         <button onClick={() => handleClick('1')} style={styles.button}>1</button>
//         <button onClick={() => handleClick('2')} style={styles.button}>2</button>
//         <button onClick={() => handleClick('3')} style={styles.button}>3</button>
//         <button onClick={() => handleClick('+')} style={styles.button}>+</button>
//         <button onClick={() => handleClick('4')} style={styles.button}>4</button>
//         <button onClick={() => handleClick('5')} style={styles.button}>5</button>
//         <button onClick={() => handleClick('6')} style={styles.button}>6</button>
//         <button onClick={() => handleClick('-')} style={styles.button}>-</button>
//         <button onClick={() => handleClick('7')} style={styles.button}>7</button>
//         <button onClick={() => handleClick('8')} style={styles.button}>8</button>
//         <button onClick={() => handleClick('9')} style={styles.button}>9</button>
//         <button onClick={() => handleClick('*')} style={styles.button}>*</button>
//         <button onClick={() => handleClick('0')} style={styles.button}>0</button>
//         <button onClick={handleDelete} style={styles.button}>DEl</button>
//         <button onClick={() => handleClick('/')} style={styles.button}>/</button>
//         <button onClick={handleCalculate} style={styles.button}> = </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '50px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   screen: {
//     marginBottom: '10px',
//   },
//   input: {
//     width: '250px',
//     padding: '10px',
//     textAlign: 'right',
//     fontSize: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   buttons: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 60px)',
//     gridGap: '10px',
//   },
//   button: {
//     padding: '20px',
//     fontSize: '20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   }
// };

// export default Calculator;


//----------------------------------------------------------------------**************************_----------------------------------------------------------------------
//Q7 7. Create a Dynamic Product List

// src/App.js
// import React from 'react';
// import './App.css';

// const products = [
//     {
//         id: 1,
//         title: "Product 1",
//         price: "$10.00",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//         id: 2,
//         title: "Product 2",
//         price: "$15.00",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//         id: 3,
//         title: "Product 3",
//         price: "$20.00",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//         id: 4,
//         title: "Product 4",
//         price: "$25.00",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//       id: 5,
//       title: "Product 4",
//       price: "$25.00",
//       image: "https://via.placeholder.com/150"
//   }]

// const App = () => {
//     return (
//         <div className="App">
//             <h1>Product List</h1>
//             <div className="product-list">
//                 {products.map(product => (
//                     <div key={product.id} className="product">
//                         <img src={product.image} alt={product.title} />
//                         <h2 className="product-title">{product.title}</h2>
//                         <p className="product-price">{product.price}</p>
//                     </div>
//                 ))}
//             </div>
//             <style jsx>{`
//                 body {
//                     font-family: Arial, sans-serif;
//                     background-color: #f4f4f4;
//                     margin: 0;
//                     padding: 20px;
//                 }

//                 .product-list {
//                     display: flex; /* Use flexbox for horizontal layout */
//                     overflow-x: auto; /* Allow horizontal scrolling if needed */
//                     gap: 20px; /* Space between products */
//                 }

//                 .product {
//                     background: white;
//                     border: 1px solid #ddd;
//                     border-radius: 5px;
//                     padding: 10px;
//                     width: 200px;
//                     text-align: center;
//                     cursor: pointer; /* Change cursor to pointer */
//                     transition: background-color 0.3s; /* Smooth transition for hover effect */
//                 }

//                 .product:hover {
//                     background-color: #e9ecef; /* Change background on hover */
//                 }

//                 .product img {
//                     max-width: 100%;
//                     height: auto;
//                     border-radius: 5px;
//                 }

//                 .product-title {
//                     font-size: 1.2em;
//                     margin: 10px 0;
//                 }

//                 .product-price {
//                     color: #28a745;
//                     font-size: 1.1em;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default App;

//----------------------------------------------------------------------**************************_----------------------------------------------------------------------
//Q8. 8. Create a Contact List App
// src/App.js
// src/App.js
// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//     const [contacts, setContacts] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [editingIndex, setEditingIndex] = useState(null);

//     const handleAddContact = () => {
//         if (editingIndex !== null) {
//             const updatedContacts = contacts.map((contact, index) => 
//                 index === editingIndex ? { name, email, phone } : contact
//             );
//             setContacts(updatedContacts);
//             setEditingIndex(null);
//         } else {
//             setContacts([...contacts, { name, email, phone }]);
//         }
//         setName('');
//         setEmail('');
//         setPhone('');
//     };

//     const handleEditContact = (index) => {
//         const contact = contacts[index];
//         setName(contact.name);
//         setEmail(contact.email);
//         setPhone(contact.phone);
//         setEditingIndex(index);
//     };

//     const handleDeleteContact = (index) => {
//         const updatedContacts = contacts.filter((_, i) => i !== index);
//         setContacts(updatedContacts);
//     };

//     return (
//         <div className="App">
//             <h1>Contact List</h1>
//             <div className="form">
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <button onClick={handleAddContact}>
//                     {editingIndex !== null ? 'Update Contact' : 'Add Contact'}
//                 </button>
//             </div>
//             <div className="contact-list">
//                 {contacts.map((contact, index) => (
//                     <div key={index} className="contact">
//                         <h3>{contact.name}</h3>
//                         <p>Email: {contact.email}</p>
//                         <p>Phone: {contact.phone}</p>
//                         <div className="button-group">
//                             <button className="edit-button" onClick={() => handleEditContact(index)}>Edit</button>
//                             <button className="delete-button" onClick={() => handleDeleteContact(index)}>Delete</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <style jsx>{`
//                 .App {
//                     font-family: Arial, sans-serif;
//                     padding: 20px;
//                     background-color: #f4f4f4;
//                     max-width: 600px;
//                     margin: auto;
//                     border-radius: 8px;
//                     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//                 }

//                 h1 {
//                     text-align: center;
//                     color: #333;
//                 }

//                 .form {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 10px;
//                     margin-bottom: 20px;
//                 }

//                 input {
//                     padding: 10px;
//                     border: 1px solid #ccc;
//                     border-radius: 5px;
//                     width: 100%;
//                     box-sizing: border-box;
//                 }

//                 button {
//                     padding: 10px;
//                     background-color: #007bff;
//                     color: white;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;
//                     transition: background-color 0.3s;
//                 }

//                 button:hover {
//                     background-color: #0056b3;
//                 }

//                 .contact-list {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 10px;
//                 }

//                 .contact {
//                     background: white;
//                     border: 1px solid #ddd;
//                     border-radius: 5px;
//                     padding: 15px;
//                     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//                 }

//                 .contact h3 {
//                     margin: 0;
//                     color: #333;
//                 }

//                 .button-group {
//                     display: flex;
//                     justify-content: space-between;
//                     margin-top: 10px;
//                 }

//                 .edit-button {
//                     background-color: #28a745;
//                     color: white;
//                     border-radius: 5px;
//                     padding: 5px 10px;
//                     cursor: pointer;
//                     border: none;
//                     transition: background-color 0.3s;
//                 }

//                 .edit-button:hover {
//                     background-color: #218838;
//                 }

//                 .delete-button {
//                     background-color: #dc3545;
//                     color: white;
//                     border-radius: 5px;
//                     padding: 5px 10px;
//                     cursor: pointer;
//                     border: none;
//                     transition: background-color 0.3s;
//                 }

//                 .delete-button:hover {
//                     background-color: #c82333;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default App;


//------------------------------------------------------------------_*******************************_------------------------------------------------------------------
//Q9 9. Build a Light/Dark Theme Toggle
// src/App.js
// import React, { useState, createContext, useContext } from 'react';

// // Create a Theme Context
// const ThemeContext = createContext();

// const App = () => {
//     const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

//     // Inline CSS for dark and light theme
//     const appStyles = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         margin: '0',
//         padding: '20px',
//         transition: 'background-color 0.3s, color 0.3s',
//         backgroundColor: isDarkTheme ? '#333' : '#fff',
//         color: isDarkTheme ? 'white' : 'black',
//         flexDirection: 'column',
//         textAlign: 'center',
//     };

//     const buttonStyles = {
//         padding: '10px 15px',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//         marginTop: '20px',
//     };

//     const buttonHoverStyles = {
//         backgroundColor: '#0056b3',
//     };

//     const contentStyles = {
//         marginTop: '20px',
//     };

//     return (
//         <div style={appStyles}>
//             <h1>Theme Toggle Example</h1>
//             <button
//                 style={buttonStyles}
//                 onClick={toggleTheme}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
//             >
//                 Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
//             </button>
//             <div style={contentStyles}>
//                 <p>This is an example of a light/dark theme toggle using React Context API.</p>
//             </div>
//         </div>
//     );
// };

// const ThemedApp = () => {
//     const [isDarkTheme, setIsDarkTheme] = useState(false);

//     // Function to toggle the theme
//     const toggleTheme = () => {
//         setIsDarkTheme((prevTheme) => !prevTheme);
//     };

//     return (
//         <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
//             <App />
//         </ThemeContext.Provider>
//     );
// };

// export default ThemedApp;



//----------------------------------------------------*************************************_---------------------------------------------------------------------------
//Q10)Quiz app

import React, { useState, useEffect } from 'react';
const quizQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean',
    },
];

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false); // Track if quiz is started
    const [timer, setTimer] = useState(60); // 60 seconds timer

    useEffect(() => {
        let interval;
        if (quizStarted && !quizFinished && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        if (timer === 0) {
            handleSubmit();
        }

        return () => clearInterval(interval); 
    }, [quizStarted, quizFinished, timer]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleOptionSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = () => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
        } else {
            setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
        setQuizFinished(false);
        setQuizStarted(false); 
        setTimer(60); 
    };
    const startQuiz = () => {
        setQuizStarted(true);
    };
    return (
        <div style={styles.quizContainer}>
            {!quizStarted ? (
                <div>
                    <h2>Welcome to the Quiz</h2>
                    <button style={styles.startButton} onClick={startQuiz}>
                        Start Exam
                    </button>
                </div>
            ) : !quizFinished ? (
                <div>
                    <h2>{currentQuestion.question}</h2>
                    <div>
                        {currentQuestion.options.map((option, index) => (
                            <div key={index} style={styles.optionContainer}>
                                <input
                                    type="radio"
                                    id={option}
                                    name="quiz-option"
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                <label htmlFor={option} style={styles.optionLabel}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div style={styles.timer}>Time Left: {timer} seconds</div>
                    <button style={styles.submitButton} onClick={handleSubmit}>
                        {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Your Score: {score} / {quizQuestions.length}</h2>
                    <button style={styles.restartButton} onClick={restartQuiz}>
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};
const styles = {
    quizContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    optionContainer: {
        margin: '10px 0',
    },
    optionLabel: {
        marginLeft: '8px',
        fontSize: '16px',
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    restartButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    startButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    timer: {
        fontSize: '18px',
        margin: '20px 0',
    },
};

export default QuizApp;
