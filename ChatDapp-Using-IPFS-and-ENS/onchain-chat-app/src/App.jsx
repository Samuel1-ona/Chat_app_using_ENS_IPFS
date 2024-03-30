import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chat";
// import AddFriend from "./components/add-friend";
// import ENSRegistration from "./components/ENSRegistration";
import ENSRegistration from "./components/ENSRegistration";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<ENSRegistration/>} /> */}
        <Route path="/" element={<ENSRegistration />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/add-friend" element={<AddFriend />} /> */}
      </Routes>
    </>
  );
}

export default App;