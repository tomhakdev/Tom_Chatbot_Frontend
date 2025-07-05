'use client';

import { useContext } from 'react';
import { ChatContext } from './ChatContext';

const quickTopics = [
  {
    emoji: "💼",
    label: "Work Experience",
    query: "Tell me about your work experience and internships in detail"
  },
  {
    emoji: "🛠️", 
    label: "Technical Skills",
    query: "What are your technical skills and what technologies do you work with?"
  },
  {
    emoji: "🚀",
    label: "Projects", 
    query: "Show me your projects and tell me about what you've built"
  },
  {
    emoji: "🎓",
    label: "Education",
    query: "Tell me about your education at Queen's University"
  },
  {
    emoji: "📞",
    label: "Contact Info",
    query: "How can I get in touch with you?"
  },
];

export default function QuickTopics() {
  const { sendMessage } = useContext(ChatContext);

  const handleTopicClick = (query) => {
    sendMessage(query);
  };

  return (
    <div className="space-y-2">
      {quickTopics.map((topic, index) => (
        <div
          key={index}
          onClick={() => handleTopicClick(topic.query)}
          className="quick-topic p-3 rounded-xl cursor-pointer text-sm flex items-center gap-3 group"
        >
          <span className="text-lg group-hover:scale-110 transition-transform duration-200">{topic.emoji}</span>
          <span className="text-chat-text font-medium">{topic.label}</span>
        </div>
      ))}
    </div>
  );
}