import { portfolioData } from '../data/portfolioData';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center py-6 px-6 border-b border-chat-border bg-gradient-to-b from-white to-chat-sidebar flex-shrink-0">
      <div className="relative mb-6">
        <img
          src="/profile.jpg"
          alt={portfolioData.personal.name}
          className="w-32 h-32 rounded-full object-cover profile-image"
        />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white shadow-lg animate-bounce-subtle">
          <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
        </div>
      </div>
      
      <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
        {portfolioData.personal.name}
      </h1>
      
      <p className="text-chat-text-secondary text-sm font-medium mb-2">
        {portfolioData.personal.title}
      </p>
      
      <div className="flex items-center gap-2 text-chat-text-secondary text-xs mb-3">
        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
        <span>📍 {portfolioData.personal.location}</span>
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1.5 rounded-full border border-primary/20">
          <span className="text-lg animate-bounce-subtle">💬</span>
          <span className="text-xs font-medium text-chat-text">Ready to chat!</span>
        </div>
      </div>
    </div>
  );
}