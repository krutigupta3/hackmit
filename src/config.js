import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Mother Earth';

const config = {
  initialMessages: [createChatBotMessage(`Hi! Hello there! I've been feeling a bit drained lately, so I appreciate you being willing to talk about this with me.`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {
    // Replaces the default header
//    header: () => <div style={{ backgroundColor: 'grey', padding: "5px", borderRadius: "3px" }}>Chat</div>,
   // Replaces the default bot avatar
   botAvatar: (props) => <img src='/public/earth.png' {...props} alt='World' />,
   // Replaces the default bot chat message container
//    botChatMessage: (props) => <input value="How can I help?" {...props}/>,
   // Replaces the default user icon
//    userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message
//    userChatMessage: (props) => <"How can I help?" {...props} />
  },
};

export default config;