'use client';

import { createContext } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children, sendMessage }) {
  return (
    <ChatContext.Provider value={{ sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}