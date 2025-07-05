export default function TypingIndicator() {
  return (
    <div className="flex items-start space-x-3 px-6 py-4 animate-fade-in">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-chat-tom to-primary-dark flex items-center justify-center flex-shrink-0 shadow-message">
        <span className="text-white text-sm font-bold">T</span>
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-2xl px-5 py-4 max-w-xs shadow-message border border-chat-border">
          <div className="flex items-center space-x-1">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}