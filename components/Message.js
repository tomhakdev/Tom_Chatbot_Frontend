export default function Message({ message, isUser }) {
  return (
    <div className={`flex items-start space-x-3 px-6 py-4 animate-fade-in ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-message ${
        isUser 
          ? 'bg-gradient-to-r from-chat-blue to-primary text-white' 
          : 'bg-gradient-to-r from-chat-tom to-primary-dark text-white'
      }`}>
        <span className="text-sm font-bold">
          {isUser ? 'Y' : 'T'}
        </span>
      </div>
      <div className="flex-1 max-w-4xl">
        <div className={`rounded-2xl px-5 py-4 shadow-message ${
          isUser 
            ? 'bg-gradient-to-r from-chat-blue to-primary text-white ml-auto' 
            : 'bg-white text-chat-text border border-chat-border'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}