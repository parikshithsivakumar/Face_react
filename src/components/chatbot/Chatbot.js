import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isGreetingDisplayed, setIsGreetingDisplayed] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isGreetingDisplayed) {
      addBotMessage('Hi, How can I help you with FACE (Forum of Computer Aspirants)?');
      displayButtons();
      setIsGreetingDisplayed(true);
    }
  }, [isOpen, isGreetingDisplayed]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      addUserMessage(message);
      // API call can be added here
      setMessage('');
    }
  };

  const addBotMessage = (msg) => {
    setMessages([...messages, { text: msg, isBot: true }]);
  };

  const addUserMessage = (msg) => {
    setMessages([...messages, { text: msg, isBot: false }]);
  };

  const displayButtons = () => {
    addBotMessage(
      <div className="buttons-container">
        <button className="action-button" onClick={() => sendMessageFromButton('About FACE')}>
          About FACE
        </button>
        <button className="action-button" onClick={() => sendMessageFromButton('Events')}>
          Events
        </button>
        <button className="action-button" onClick={() => sendMessageFromButton('Contact')}>
          Contact
        </button>
      </div>
    );
  };

  const sendMessageFromButton = (msg) => {
    if (msg.toLowerCase() === 'about face') {
      addBotMessage(
        'FACE (Forum of Computer Aspirants) is a club dedicated to nurturing computer science enthusiasts. We conduct regular events, workshops, and seminars to help members grow their skills and network. Learn more at <a href="https://www.face-club.com">FACE Club</a>.'
      );
    } else if (msg.toLowerCase() === 'events') {
      addBotMessage(
        'FACE hosts a variety of events throughout the year, including coding competitions, hackathons, and guest lectures. Check our events calendar at <a href="https://www.face-club.com/events">FACE Events</a>.'
      );
    } else if (msg.toLowerCase() === 'contact') {
      addBotMessage(
        'You can reach out to us at <a href="https://www.face-club.com/contact">Contact FACE</a>.'
      );
    }
  };

  useEffect(() => {
    chatbotRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <div className="chat-icon" onClick={toggleChatbot}>
          💬
        </div>
      )}
      {isOpen && (
        <div className="chatbot-container" ref={chatbotRef}>
          <div className="chatbot-header">
            <div className="align">
              <img src="th.jpeg" alt="FACE Logo" height="30px" width="30px" />
              <b>FACE - Forum of Computer Aspirants</b>
            </div>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.isBot ? 'bot-reply' : 'user-input'}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
            <div ref={chatbotRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
