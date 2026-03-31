"use client";

import { useEffect, useState } from "react";

export default function AutoVoice() {
  const [hasSpoken, setHasSpoken] = useState(false);

  const speak = () => {
    if (hasSpoken) return;

    const text =
      "my name is Achraf Por, I'm a passionate backend developer with over 5 years of experience. I specialize in building robust and scalable web applications using Node.js, Express, and various databases. I'm open to new opportunities and collaborations, so feel free to reach out!";

    const utterance = new SpeechSynthesisUtterance(text);

    // 🔥 CONFIG VOICE
    utterance.lang = "en-US"; // change to "fr-FR" if needed
    utterance.rate = 1;
    utterance.pitch = 1;

    // Optional: select better voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((v) =>
      v.name.toLowerCase().includes("google")
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
    setHasSpoken(true);
  };

  useEffect(() => {
    // 🔊 Auto trigger (may be delayed depending on browser)
    const timer = setTimeout(() => {
      speak();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={speak}
        className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
      >
        🗣️ Play Voice
      </button>
    </div>
  );
}