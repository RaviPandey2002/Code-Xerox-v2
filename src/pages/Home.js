import React from "react";
const Home = () => {
  return (
    <>
      <div class="register-page" id="registerPage">
        <div class="glass-container" id="glass">
          <div class="register-flex-1">
            <h1>Code Xerox</h1>
          </div>
          <div>
            <h3>Paste invitation Room ID: </h3>
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              id="handle"
              placeholder="ROOM ID"
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              id="handle"
              placeholder="USERNAME"
            />
          </div>
          <button type="button" id="register">
            Register
          </button>
          <div>
            <h5>If you don't have an invite then create </h5>
          </div>
        </div>
      </div>
      <footer>
        <h4> Build with  </h4>
      </footer>
    </>
  );
};

export default Home;

// <!-- Editor page -->
// <div id="editor-block" style="display: none;">

//   <!-- logo text -->
//    <div class="editor-flex-1">
//          <h1>Code Xerox</h1>
//       </div>

//       <!-- user-card -->
//        <div class="card">
//            <ul class="list-group list-group-flush" id="editors">
//            </ul>
//      </div>

//      <div class="editor-chat">

//     <!-- text ediotr -->
//       <div id="editor">
//         <textarea id="textarea" class="form-control"  rows="3"></textarea>

//       </div>
//        <div class="main__right">
//       <div class="main__chat_window">
//           <div class="messages">

//           </div>
//       </div>
//       <div class="main__message_container">
//         <input id="chat_message" type="text" autocomplete="off" placeholder="Type message here...">
//         <div id="send" class="send__button">
//           <i class="fab fa-telegram-plane" aria-hidden="true"></i>
//         </div>
//       </div>
//   </div>

//   </div>

//   <div class="main">
//   <div class="main__left">
//     <div class="videos__group">
//       <div id="video-grid">

//       </div>
//     </div>
//     <div class="options">
//       <div class="options__left">
//         <div id="stopVideo" class="options__button">
//           <i class="fa fa-video-camera"></i>
//         </div>
//         <div id="muteButton" class="options__button">
//           <i class="fa fa-microphone"></i>
//         </div>
//         <div class="options__right">
//           <div id="inviteButton" class="options__button">
//             <i class="fas fa-copy"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//  </div>
//         <!-- <script>
//           var Codeeditor = CodeMirror.fromTextArea(document.getElementById("textarea"), {
//           styleActiveLine: true,
//           lineNumbers: true,
//           matchBrackets: true
//       }); -->
//         <!-- </script> -->
//   </div>

// </div>
