'use client';

import { useRef } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ChatInterface from '../components/ChatInterface';
import QuickTopics from '../components/QuickTopics';
import { ChatProvider } from '../components/ChatContext';

export default function Home() {
  const chatRef = useRef();

  const handleSendMessage = (message) => {
    if (chatRef.current) {
      chatRef.current.sendMessage(message);
    }
  };

  return (
    <ChatProvider sendMessage={handleSendMessage}>
      <div className="h-screen flex items-center justify-center p-4">
        <div className="flex h-full max-h-[95vh] w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl shadow-soft overflow-hidden">
          {/* Sidebar - Profile */}
          <div className="w-80 bg-gradient-to-b from-chat-sidebar to-white border-r border-chat-border flex-shrink-0 hidden md:flex flex-col">
            <ProfileHeader />
            <div className="flex-1 overflow-y-auto p-4">
              <div className="text-sm text-chat-text-secondary space-y-4">
                <div>
                  <h3 className="font-semibold text-chat-text mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Quick Topics
                  </h3>
                  <QuickTopics />
                </div>
                <div className="pt-4 border-t border-chat-border">
                  <p className="text-xs leading-relaxed bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                    💬 This is an AI-powered portfolio where you can ask questions about my background, 
                    experience, and skills. Feel free to ask anything!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-chat-bg min-w-0">
            {/* Mobile Header */}
            <div className="md:hidden border-b border-chat-border bg-white flex-shrink-0">
              <ProfileHeader />
            </div>
            
            {/* Chat Interface */}
            <div className="flex-1 flex flex-col min-h-0">
              <ChatInterface ref={chatRef} />
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}