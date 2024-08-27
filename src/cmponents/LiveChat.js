import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages) || [];
  useEffect(() => {
    const i = setInterval(() => {
      console.log("APi pollings");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "write a message",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  console.log(chatMessages);

  return (
    <div className="border border-black w-full p-2 h-[700px]  rounded-xl bg-slate-100 overflow-y-scroll  flex flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
