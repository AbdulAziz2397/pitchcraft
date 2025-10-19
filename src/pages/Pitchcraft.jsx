import React from "react";
import { GoogleGenAI } from "@google/genai";

const Pitchcraft = () => {


    const ai = new GoogleGenAI({});

    async function main() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Explain how AI works in a few words",
        });
        console.log(response.text);
    }

    await main();


    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Header */}
            <div className="flex justify-center items-center py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Pitchcraft AI
                </h1>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto pt-6 pb-28 md:pb-36">
                <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
                    {/* AI Message */}
                    <div className="flex justify-start">
                        <div className="w-8 h-8 mr-3 mt-1 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 dark:bg-blue-900 dark:text-blue-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-2a2 2 0 11-4 0 2 2 0 014 0zm-2 4a2 2 0 100 4 2 2 0 000-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="max-w-[85%] p-4 rounded-xl bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                            <p>Hello! How can I help you today?</p>
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[85%] p-4 rounded-xl bg-blue-600 text-white rounded-br-sm">
                            <p>What is React?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Input */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-3xl mx-auto flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
                    <textarea
                        rows="1"
                        placeholder="Message Pitchcraft AI..."
                        className="w-full resize-none p-3.5 pl-5 bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                        className="p-3 m-2 bg-blue-600 text-white rounded-lg cursor-pointer"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 transform rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pitchcraft;
