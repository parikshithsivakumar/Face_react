import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import Fuse from 'fuse.js';
import './Chatbot.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Change the URL according to the server url

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [qaData, setQaData] = useState({});
  const [fuse, setFuse] = useState(null);
  const [context, setContext] = useState(null);
  const chatbotRef = useRef(null);

  useEffect(() => {
    loadQAData();
  }, []);

  const loadQAData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/qa_data`);
      const csvString = await response.text();
      const results = Papa.parse(csvString, { header: false, skipEmptyLines: true });

      const data = {};
      results.data.forEach(([question, answer]) => {
        if (question && answer) {
          data[question.toLowerCase()] = answer;
        }
      });

      setQaData(data);
      addBotMessage("Hi! How may I assist you today?");
    } catch (error) {
      console.error('Error loading CSV file:', error);
      addBotMessage("Hi! How may I assist you today?");
    }
  };

  useEffect(() => {
    if (Object.keys(qaData).length > 0) {
      const options = {
        includeScore: true,
        threshold: 0.4,
        keys: ['question']
      };
      setFuse(new Fuse(Object.entries(qaData).map(([q, a]) => ({ question: q, answer: a })), options));
    }
  }, [qaData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      addUserMessage(inputMessage);
      processUserMessage(inputMessage);
      setInputMessage('');
    }
  };

  const addBotMessage = (msg) => {
    setMessages(prevMessages => [...prevMessages, { 
      text: msg, 
      isBot: true,
      id: Date.now(),
      feedback: null 
    }]);
  };

  const addUserMessage = (msg) => {
    setMessages(prevMessages => [...prevMessages, { text: msg, isBot: false, id: Date.now() }]);
  };

  const recognizeIntent = (msg) => {
    const greetings = ['hi', 'hello', 'hey'];
    const farewells = ['bye', 'goodbye', 'see you'];
    const thanks = ['thank you', 'thanks'];
    const events = ['events', 'registrations', 'registration', 'event'];
    const contact = ['contact', 'us'];
    const blogs = ['blogs', 'blog', 'read'];
    const about = ['about', 'about us', 'about face' , 'face'];

    msg = msg.toLowerCase();

    if (greetings.some(g => msg.includes(g))) return 'greeting';
    if (farewells.some(f => msg.includes(f))) return 'farewell';
    if (thanks.some(t => msg.includes(t))) return 'thanks';
    if (events.some(e => msg.includes(e))) return 'events';
    if (contact.some(c => msg.includes(c))) return 'contact';
    if (blogs.some(b => msg.includes(b))) return 'blogs';
    if (about.some(a => msg.includes(a))) return 'about';

    return 'question';
  };

  const processUserMessage = (msg) => {
    const intent = recognizeIntent(msg);

    switch (intent) {
      case 'greeting':
        addBotMessage("Hello! How can I assist you today?");
        break;
      case 'farewell':
        addBotMessage("Goodbye! Feel free to come back if you have more questions.");
        break;
      case 'thanks':
        addBotMessage("You're welcome! Is there anything else I can help you with?");
        break;
      case 'events':
        addBotMessage("Please go to the Events page for Registration.");
        break;
      case 'contact':
        addBotMessage("Please go to Contact Us Page to know more.");
        break;
      case 'blogs':
        addBotMessage("Please go to our Blog page to read more about our Technical Knowledgeable Blogs!");
        break;
      case 'about':
        addBotMessage("Please Go to our About page to read more about FACE and our Achievements!");
        break;
      default:
        if (!fuse) {
          addBotMessage("I'm sorry, I won't be able to answer that. Please contact us for more information!");
          return;
        }

        const results = fuse.search(msg);
        if (results.length > 0) {
          const answer = results[0].item.answer;
          addBotMessage(answer);
          setContext(results[0].item.question);
        } else if (context) {
          const contextResults = fuse.search(`${context} ${msg}`);
          if (contextResults.length > 0) {
            addBotMessage(contextResults[0].item.answer);
          } else {
            addBotMessage("I'm sorry, I won't be able to answer that. Please contact us for more information!");
            setContext(null);
          }
        } else {
          addBotMessage("I'm sorry, I won't be able to answer that. Please contact us for more information!");
        }
    }
  };

  const handleFeedback = async (messageId, isPositive) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg.id === messageId ? { ...msg, feedback: isPositive } : msg
      )
    );

    const questionMsg = messages.find(msg => msg.id === messageId);
    const feedbackData = {
      timestamp: new Date().toISOString(),
      question: questionMsg?.text,
      feedback: isPositive ? 'positive' : 'negative'
    };

    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error('Failed to save feedback');
      }
    } catch (error) {
      console.error('Error saving feedback:', error);
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
            <h3>FACE Chatbot</h3>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={msg.isBot ? 'bot-reply' : 'user-input'}>
                {msg.text}
                {msg.isBot && msg.feedback === null && (
                  <div className="feedback-buttons">
                    <button onClick={() => handleFeedback(msg.id, true)}>👍</button>
                    <button onClick={() => handleFeedback(msg.id, false)}>👎</button>
                  </div>
                )}
              </div>
            ))}
            <div ref={chatbotRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question..."
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
