'use client';

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import { getWelcomeMessage } from '../utils/chatResponses';

const ChatInterface = forwardRef((props, ref) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Add welcome message on mount
    const welcomeMessage = getWelcomeMessage();
    setMessages([{ text: welcomeMessage, isUser: false, timestamp: Date.now() }]);
  }, []);

  const sendMessage = async (messageText = null) => {
    const userMessage = messageText || inputValue.trim();
    if (!userMessage || isLoading) return;

    if (!messageText) {
      setInputValue('');
    }
    setIsLoading(true);

    // Add user message
    const newUserMessage = {
      text: userMessage,
      isUser: true,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Show typing indicator
    setIsTyping(true);

    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Simulate typing delay
      setTimeout(() => {
        setIsTyping(false);
        const aiMessage = {
          text: data.response,
          isUser: false,
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000); // 1-2 second delay

    } catch (error) {
      console.error('Error:', error);
      setIsTyping(false);
      const errorMessage = {
        text: "I apologize, but I'm having trouble responding right now. Please try asking your question again!",
        isUser: false,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // Expose sendMessage function to parent component
  useImperativeHandle(ref, () => ({
    sendMessage
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="space-y-4 py-4">
          {messages.map((message, index) => (
            <Message
              key={`${message.timestamp}-${index}`}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-chat-border bg-white/80 backdrop-blur-sm p-4 flex-shrink-0">
        <form onSubmit={handleSubmit} className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my background, skills, projects, or anything else..."
              className="chat-input w-full resize-none rounded-2xl border-2 border-chat-border bg-white text-chat-text placeholder-chat-text-secondary px-4 py-3 transition-all duration-200 focus:border-primary shadow-soft"
              rows="1"
              style={{
                minHeight: '48px',
                maxHeight: '100px',
                overflowY: inputValue.length > 100 ? 'auto' : 'hidden'
              }}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="send-button flex items-center justify-center w-12 h-12 rounded-2xl text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11L12 6L17 11M12 18V7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(90 12 12)"
              />
            </svg>
          </button>
        </form>
        <div className="mt-2 text-xs text-chat-text-secondary text-center flex items-center justify-center gap-2">
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
          <span>Press Enter to send, Shift+Enter for new line</span>
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
});

ChatInterface.displayName = 'ChatInterface';

export default ChatInterface;