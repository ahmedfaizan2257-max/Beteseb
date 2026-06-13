import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, ChevronUp, User, Sparkles, Loader, BookmarkCheck } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

const QUICK_PROMPTS = [
  "Does Alberta Blue Cross fund this?",
  "How does Language Matching work?",
  "Tell me about NCLEX & IEN mentorship.",
  "Do you serve Calgary surrounding areas?",
];

export default function AdvisorChat() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content:
        "Warm greetings! I am your **BETESEB Concierge Care Advisor**. Aligned with our core mission, I am here to help you navigate our caregiver Match program, healthcare advocacy, and Alberta Blue Cross Direct Billing pathways. How can I assist your family today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: textToSend } as Message];
    setMessages(updatedMessages);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/guidance/advise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const resData = await response.json();
      if (resData.success && resData.text) {
        setMessages((prev) => [...prev, { role: "model", content: resData.text }]);
      } else {
        throw new Error("Assistant response failed.");
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "A temporary connection variance occurred. However, you can reach our physical Calgary care intake offices directly at **(587)-555-0143** or fill out our Consultation Form! We are active and ready to support.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
  };

  return (
    <>
      {/* Floating Action Circle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#10243E] shadow-2xl border-2 border-[#C9A35E] flex items-center justify-center text-white cursor-pointer hover:bg-[#1c3e66] transition duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Advisor Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#C9A35E]" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6 text-[#C9A35E]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border border-white text-[9px] font-mono font-bold flex items-center justify-center text-white animate-bounce">
                1
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Expanded Chat Box Pane */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-[92vw] sm:w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-50 font-sans"
          >
            {/* Box Header */}
            <div className="bg-[#10243E] text-white px-4 py-4 flex items-center justify-between border-b border-[#C9A35E]/30 relative">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C9A35E]/10 border border-[#C9A35E] flex items-center justify-center text-[#C9A35E]">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#F7F4EE]">Concierge Care Advisor</h4>
                  <p className="text-[10px] text-slate-300 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Live Cultural Advice
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History Column */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, index) => {
                const isModel = msg.role === "model";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 max-w-[85%] ${isModel ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                  >
                    {/* Icon */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border mt-0.5 ${
                      isModel ? "bg-[#10243E] border-[#C9A35E] text-white" : "bg-[#C9A35E] border-[#C9A35E]/30 text-[#10243E]"
                    }`}>
                      {isModel ? <Sparkles className="w-3.5 h-3.5 text-[#C9A35E]" /> : <User className="w-3.5 h-3.5" />}
                    </div>

                    {/* text Bubble */}
                    <div className={`rounded-2xl px-3.5 py-2.5 text-xs font-sans leading-relaxed ${
                      isModel
                        ? "bg-white text-gray-800 border border-slate-100 shadow-sm"
                        : "bg-[#10243E] text-white"
                    }`}>
                      {/* Very basic custom markdown simulation parser to handle bold text and headers */}
                      {msg.content.split("\n\n").map((para, pIdx) => (
                        <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
                          {para.split("**").map((textPart, tpIdx) => {
                            if (tpIdx % 2 === 1) {
                              return <strong key={tpIdx} className="font-semibold text-[#C9A35E]">{textPart}</strong>;
                            }
                            return textPart;
                          })}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start gap-2.5 max-w-[85%] mr-auto">
                  <div className="w-7 h-7 rounded-full bg-[#10243E] border border-[#C9A35E] text-white flex items-center justify-center shrink-0">
                    <Loader className="w-3.5 h-3.5 text-[#C9A35E] animate-spin" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 border border-slate-100 shadow-sm text-xs text-gray-400 italic">
                    Analyzing match parameters...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Prompt Chips Footer */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex flex-nowrap overflow-x-auto gap-2 scrollbar-none shrink-0">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="shrink-0 px-3 py-1.5 bg-white border border-slate-200 text-[#10243E] hover:border-[#C9A35E] transition rounded-full text-[10px] font-sans font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form Footer */}
            <form onSubmit={handleFormSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2 shrink-0">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about languages, Blue Cross, NCLEX..."
                className="flex-1 rounded-xl border border-gray-200 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                className="w-8 h-8 rounded-xl bg-[#10243E] text-white flex items-center justify-center hover:bg-[#1a3d66] disabled:bg-slate-100 disabled:text-gray-300 transition shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-[#C9A35E]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
