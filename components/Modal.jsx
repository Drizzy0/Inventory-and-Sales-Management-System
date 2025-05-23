import React from "react";

export default function Modal({ isOpen, children, title }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl">
        {title && (
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}