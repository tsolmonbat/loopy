"use client";
import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = () => {
    if (
      name === "" ||
      ovog === "" ||
      email === "" ||
      pass === "" ||
      age === "" ||
      school === ""
    ) {
      alert("Please fill in all fields!");
      return;
    }

    if (name.length > 30) {
      alert("Name cannot be longer than 30 characters!");
      return;
    }

    if (age > 18) {
      alert("Age must be 18 or younger!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email address!");
      return;
    }

    const newUser = { name, ovog, email, pass, age, school };
    setUsers([...users, newUser]);

    setName("");
    setOvog("");
    setEmail("");
    setPass("");
    setAge("");
    setSchool("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <input
          type="text"
          placeholder="Name (max 30)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <input
          type="text"
          placeholder="Last name"
          value={ovog}
          onChange={(e) => setOvog(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <input
          type="number"
          placeholder="Age (max 18)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
        />

        <button
          onClick={addUser}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add User
        </button>

        <h3 className="text-lg font-medium mt-4">Users:</h3>

        {users.length === 0 ? (
          <p className="text-gray-700">No users yet.</p>
        ) : (
          <ul className="text-left mt-2 space-y-1">
            {users.map((user, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-md p-2 bg-gray-50"
              >
                Name: {user.name}, Last Name: {user.ovog}, Email: {user.email},
                Age: {user.age}, School: {user.school}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
