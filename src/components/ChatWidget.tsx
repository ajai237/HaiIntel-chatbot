"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { getAIResponse, AIResponse } from "@/data/aiResponses";

// Generate contextual follow-up suggestions based on user input
const generateFollowUpSuggestions = (userInput: string): string[] => {
  const input = userInput.toLowerCase();

  // Contextual suggestions based on what the user asked about
  if (input.includes("haiproduct") || input.includes("product")) {
    return [
      "Tell me about HaiPODs",
      "What is the Unified Intelligence Platform?",
      "How does HaiIntel work with CIOs?",
      "What industries does HaiIntel serve?",
    ];
  }

  if (input.includes("haipod") || input.includes("pod")) {
    return [
      "Tell me about HaiProducts",
      "What is the Domain-Agnostic Methodology?",
      "How does HaiIntel ensure enterprise-grade solutions?",
      "What are the key transformation areas?",
    ];
  }

  if (input.includes("tech") || input.includes("technology")) {
    return [
      "What is HaiIntel's Technology-Agnostic Approach?",
      "Tell me about HaiIntel's tech stack",
      "How does HaiIntel ensure integration-ready solutions?",
      "What makes HaiIntel best-in-class?",
    ];
  }

  if (input.includes("cio") || input.includes("transformation")) {
    return [
      "What are the key transformation areas?",
      "How does HaiIntel work as transformation co-pilots?",
      "Tell me about HaiIntel's mission",
      "What can I expect from working with HaiIntel?",
    ];
  }

  if (
    input.includes("contact") ||
    input.includes("engage") ||
    input.includes("work")
  ) {
    return [
      "Schedule a Strategy Session",
      "Tell me about HaiIntel's services",
      "What are the next steps?",
      "How can I get started?",
    ];
  }

  // Default suggestions
  return [
    "Tell me about HaiProducts",
    "What are HaiPODs?",
    "How does HaiIntel work with CIOs?",
    "What is HaiIntel's mission?",
  ];
};

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentFollowUps, setCurrentFollowUps] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("haiintel-chat-messages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Error loading messages from localStorage:", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("haiintel-chat-messages", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const simulateTyping = () => {
    setIsTyping(true);
    return new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );
  };

  const simulateStreaming = (
    text: string,
    callback: (streamedText: string) => void
  ) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        callback(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30 + Math.random() * 20); // Variable speed for more natural feel
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Call the AI API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
          conversationHistory: messages.slice(-10), // Send last 10 messages for context
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);
      console.log("API Success:", data.success);
      console.log("API Error:", data.error);

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "",
          isUser: false,
          timestamp: new Date(),
          isStreaming: true,
        };

        setMessages((prev) => [...prev, aiMessage]);

        // Simulate streaming response for better UX
        simulateStreaming(data.response, (streamedText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessage.id ? { ...msg, text: streamedText } : msg
            )
          );
        });

        // Set follow-up suggestions after streaming completes
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessage.id ? { ...msg, isStreaming: false } : msg
            )
          );
          // Generate contextual follow-up suggestions
          setCurrentFollowUps(generateFollowUpSuggestions(userMessage.text));
          setIsTyping(false);
        }, data.response.length * 30); // Adjust timing based on response length
      } else {
        throw new Error(data.error || "Failed to get AI response");
      }
    } catch (error) {
      console.error("Error calling AI API:", error);

      // Fallback to static response if AI API fails
      const fallbackResponse = getAIResponse(userMessage.text);

      if (fallbackResponse) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "",
          isUser: false,
          timestamp: new Date(),
          isStreaming: true,
        };

        setMessages((prev) => [...prev, aiMessage]);

        simulateStreaming(fallbackResponse.answer, (streamedText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessage.id ? { ...msg, text: streamedText } : msg
            )
          );
        });

        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessage.id ? { ...msg, isStreaming: false } : msg
            )
          );
          setCurrentFollowUps(fallbackResponse.followUpSuggestions);
          setIsTyping(false);
        }, fallbackResponse.answer.length * 40);
      } else {
        // Ultimate fallback
        const fallbackMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact HaiIntel directly for assistance.",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallbackMessage]);
        setIsTyping(false);
      }
    }
  };

  const handleFollowUpClick = (suggestion: string) => {
    setInputValue(suggestion);
    setCurrentFollowUps([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setCurrentFollowUps([]);
    localStorage.removeItem("haiintel-chat-messages");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-96 h-128 bg-chat-bg border border-chat-border rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-chat-surface border-b border-chat-border p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-linear-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-chat-text font-semibold text-sm">
                    HaiIntel Assistant
                  </h3>
                  <p className="text-chat-textSecondary text-xs">
                    AI-powered support
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearChat}
                  className="text-chat-textSecondary hover:text-chat-text transition-colors text-xs"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-chat-textSecondary hover:text-chat-text transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-chat-textSecondary text-sm">
                  <Bot className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Welcome to HaiIntel Assistant!</p>
                  <p className="text-xs mt-1">
                    Ask me anything about HaiIntel.
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        message.isUser ? "bg-chat-user" : "bg-chat-ai"
                      }`}
                    >
                      {message.isUser ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-chat-text" />
                      )}
                    </div>
                    <div
                      className={`px-3 py-2 rounded-2xl ${
                        message.isUser
                          ? "bg-chat-user text-white"
                          : "bg-chat-surface text-chat-text border border-chat-border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      {message.isStreaming && (
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-1 h-4 bg-current ml-1"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-chat-ai flex items-center justify-center">
                      <Bot className="w-3 h-3 text-chat-text" />
                    </div>
                    <div className="bg-chat-surface border border-chat-border px-3 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-chat-textSecondary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-chat-textSecondary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-chat-textSecondary rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Follow-up Suggestions */}
              {currentFollowUps.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <p className="text-chat-textSecondary text-xs">
                    Suggested questions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentFollowUps.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleFollowUpClick(suggestion)}
                        className="text-xs bg-chat-surface border border-chat-border text-chat-text hover:bg-chat-border transition-colors px-3 py-1 rounded-full"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-chat-border bg-chat-surface">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about HaiIntel..."
                  className="flex-1 bg-chat-bg border border-chat-border text-chat-text placeholder-chat-textSecondary px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-accent-500 hover:bg-accent-600 disabled:bg-chat-border disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Launcher */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-linear-to-br from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
