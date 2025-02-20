"use client";

import React, { useState, useEffect } from "react";
import { XCircle, CheckCircle, AlertCircle, Info } from "lucide-react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number; // Tempo para desaparecer (ms)
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const typeConfig = {
    success: {
      icon: <CheckCircle className="text-green-500" size={20} />,
      bg: "bg-green-100 border-green-400 text-green-700",
    },
    error: {
      icon: <XCircle className="text-red-500" size={20} />,
      bg: "bg-red-100 border-red-400 text-red-700",
    },
    warning: {
      icon: <AlertCircle className="text-yellow-500" size={20} />,
      bg: "bg-yellow-100 border-yellow-400 text-yellow-700",
    },
    info: {
      icon: <Info className="text-blue-500" size={20} />,
      bg: "bg-blue-100 border-blue-400 text-blue-700",
    },
  };

  return (
    <div
      className={`fixed top-5 right-5 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-md transition-opacity duration-300 ${typeConfig[type].bg}`}
    >
      {typeConfig[type].icon}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={() => setVisible(false)} className="ml-auto text-gray-500 hover:text-gray-700">
        ✖
      </button>
    </div>
  );
};

export default Notification;
