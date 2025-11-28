import { useState } from "react";
import { MOCK_NOTIFICATIONS, MOCK_USERS } from "@/lib/mockData";
import { Notification } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageSquare, Eye, Check, Trash2 } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filtered = filter === 'unread' ? notifications.filter(n => !n.read) : notifications;
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'connection_request':
        return <Heart className="text-red-500" size={20} />;
      case 'message':
        return <MessageSquare className="text-blue-500" size={20} />;
      case 'profile_viewed':
        return <Eye className="text-purple-500" size={20} />;
      default:
        return null;
    }
  };

  const getRelatedUser = (userId?: string) => {
    return MOCK_USERS.find(u => u.id === userId);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated on connection requests and messages
          </p>
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as 'all' | 'unread')} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="unread">
              Unread {unreadCount > 0 && <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{unreadCount}</span>}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg">No notifications yet</p>
              <p className="text-sm text-muted-foreground mt-2">When people connect with you or message, they'll appear here</p>
            </Card>
          ) : (
            filtered.map(notification => {
              const relatedUser = getRelatedUser(notification.relatedUserId);
              return (
                <Card
                  key={notification.id}
                  className={cn(
                    "p-4 border-l-4 hover:shadow-md transition-shadow",
                    notification.read ? "border-l-border opacity-75" : "border-l-primary"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      {relatedUser && (
                        <Avatar className="w-12 h-12 shrink-0">
                          <AvatarImage src={relatedUser.avatar} />
                          <AvatarFallback>{relatedUser.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getIcon(notification.type)}
                          <h3 className="font-semibold text-sm">{notification.title}</h3>
                          {!notification.read && <span className="w-2 h-2 rounded-full bg-primary" />}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          title="Mark as read"
                        >
                          <Check size={16} />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>

                  {notification.type === 'connection_request' && (
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">Decline</Button>
                      <Button size="sm">Accept</Button>
                    </div>
                  )}
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

function cn(...args: any[]) {
  return args.filter(Boolean).join(' ');
}
