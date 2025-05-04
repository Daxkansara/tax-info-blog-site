
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "Jane Cooper",
    date: new Date("2025-04-28T09:12:33"),
    content: "This article was incredibly insightful! I've been looking for clear information on this topic for a while, and this really helped clarify things for me.",
    replies: []
  },
  {
    id: 2,
    author: "Robert Johnson",
    date: new Date("2025-04-27T14:23:15"),
    content: "I disagree with some points in this article. While the overall information is good, I think there are some important considerations that weren't addressed.",
    replies: [
      {
        id: 3,
        author: "Sarah Williams",
        date: new Date("2025-04-27T16:45:22"),
        content: "I see your point, Robert, but I think the article was meant to be an introduction to the topic rather than a comprehensive analysis."
      }
    ]
  }
];

const CommentSection = () => {
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const comment = {
        id: Date.now(),
        author: "Guest User",
        date: new Date(),
        content: newComment,
        replies: []
      };
      
      setComments([comment, ...comments]);
      setNewComment("");
      setIsSubmitting(false);
      
      toast({
        title: "Comment posted!",
        description: "Your comment has been successfully posted.",
      });
    }, 1000);
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3 min-h-[120px]"
        />
        <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
      
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">{comment.author}</div>
              <div className="text-sm text-muted-foreground">
                {format(comment.date, "MMM d, yyyy 'at' h:mm a")}
              </div>
            </div>
            <p className="mb-4">{comment.content}</p>
            
            {comment.replies.length > 0 && (
              <div className="pl-6 border-l-2 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold">{reply.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {format(reply.date, "MMM d, yyyy 'at' h:mm a")}
                      </div>
                    </div>
                    <p>{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
