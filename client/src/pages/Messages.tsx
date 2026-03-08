import { useState } from "react";
import { MOCK_MESSAGES, MOCK_USERS } from "@/lib/mockData";
import { Message as MessageType } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Messages() {
  const [messages, setMessages] = useState<MessageType[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: `m${messages.length + 1}`,
          senderId: "me",
          senderName: "You",
          senderAvatar: MOCK_USERS[0].avatar,
          text: newMessage,
          timestamp: new Date(),
        }
      ]);
      setNewMessage("");
    }
  };

  const selectedUser = MOCK_USERS[0];

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex-1 flex overflow-hidden">
        <div className="w-80 border-r border-border bg-white flex flex-col hidden md:flex">
          <div className="p-4 border-b border-border">
            <h2 className="font-extrabold text-xl mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {[MOCK_USERS[0]].map((user) => (
              <button
                key={user.id}
                className="w-full p-4 border-b border-border hover:bg-secondary transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{user.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">Last message preview...</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white">
          <div className="border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={selectedUser.avatar} />
                <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedUser.name}</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Profile</Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => {
              const isOwn = message.senderId === "me";
              return (
                <div
                  key={message.id}
                  className={cn("flex gap-3", isOwn ? "flex-row-reverse" : "")}
                >
                  <Avatar className="w-8 h-8 shrink-0">
                    <AvatarImage src={message.senderAvatar} />
                    <AvatarFallback>{message.senderName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className={cn("max-w-xs", isOwn ? "text-right" : "")}>
                    <p className="text-xs text-muted-foreground mb-1 px-3">
                      {message.senderName} &middot; {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2 inline-block",
                        isOwn
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-secondary text-foreground rounded-bl-none"
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-border p-4 space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
