import React from 'react'


const Editor = () => {
  return (
    <div id="editor-block">
      <div class="editor-flex-1">
        <h1>Code Xerox</h1>
      </div>

      <div class="card">
        <ul class="list-group list-group-flush" id="editors"></ul>
      </div>

      <div class="editor-chat">
        <div id="editor">
          <textarea id="textarea" class="form-control" rows="3"></textarea>
        </div>
        <div class="main__right">
          <div class="main__chat_window">
            <div class="messages"></div>
          </div>
          <div class="main__message_container">
            <input
              id="chat_message"
              type="text"
              autocomplete="off"
              placeholder="Type message here..."
            />
            <div id="send" class="send__button">
              <i class="fab fa-telegram-plane" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="main__left">
          <div class="videos__group">
            <div id="video-grid"></div>
          </div>
          <div class="options">
            <div class="options__left">
              <div id="stopVideo" class="options__button">
                <i class="fa fa-video-camera"></i>
              </div>
              <div id="muteButton" class="options__button">
                <i class="fa fa-microphone"></i>
              </div>
              <div class="options__right">
                <div id="inviteButton" class="options__button">
                  <i class="fas fa-copy"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
