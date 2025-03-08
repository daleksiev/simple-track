interface ChatBubbleProps {
  message: string;
  sender?: string;
  time?: string;
  isUser?: boolean;
  avatar?: string;
  className?: string;
}

export function ChatBubble({
  message,
  sender,
  time,
  isUser = false,
  avatar,
  className = "",
}: ChatBubbleProps) {
  return (
    <div className={`chat ${isUser ? "chat-end" : "chat-start"} ${className}`}>
      {avatar && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} alt={sender} />
          </div>
        </div>
      )}
      {sender && (
        <div className="chat-header">
          {sender}
          {time && <time className="text-xs opacity-50 ml-1">{time}</time>}
        </div>
      )}
      <div className={`chat-bubble ${isUser ? "chat-bubble-primary" : ""}`}>
        {message}
      </div>
    </div>
  );
}
