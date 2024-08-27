const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mb-3">
      <img
        className="h-8"
        alt="comments image"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      ></img>
      <span className="font-bold ">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
