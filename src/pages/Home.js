import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomID, setRoomID] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomID(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomID || !username) {
      toast.error("Room Id and Username is required");
      return;
    }
    navigate(`/editor/${roomID}`, {
      state: {
        roomID: { roomID },
        username: { username },
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <div className="register-page" id="registerPage">
        <div className="glass-container" id="glass">
          <div className="register-flex-1">
            <h1>Code Xerox</h1>
          </div>
          <div>
            <h3>Paste invitation Room ID: </h3>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              id="handle"
              placeholder="ROOM ID"
              value={roomID}
              onChange={(e) => {
                setRoomID(e.target.value);
              }}
              onKeyUp={handleInputEnter}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              id="handle"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onKeyUp={handleInputEnter}
            />
          </div>
          <button onClick={joinRoom} type="button" className="btn joinBtn">
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create{" "}
            <a onClick={createNewRoom} href="#" className="createNewBtn">
              Click here
            </a>
          </span>
        </div>
        <footer className="footer">
          <h4>
            {" "}
            Build with ❤️ &nbsp;{" "}
            <a
              href="https://github.com/RaviPandey2002/Code-Xerox-v2"
              className="createNewBtn"
            >
              Code_Xerox
            </a>{" "}
          </h4>
        </footer>
      </div>
    </>
  );
};

export default Home;

