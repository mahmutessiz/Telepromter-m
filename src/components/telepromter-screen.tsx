import React, { useState, useRef, useEffect } from 'react';

const TeleprompterScreen = () => {
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [visibleLines, setVisibleLines] = useState(3);
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const togglePlay = () => {
    if (!isPlaying) {
      scrollIntervalRef.current = setInterval(() => {
        scrollRef.current?.scrollBy({
          top: speed,
          behavior: 'auto'
        });
      }, 50);
    } else {
      clearInterval(scrollIntervalRef.current);
    }
    setIsPlaying(!isPlaying);
  };

  const resetScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    if (isPlaying) {
      clearInterval(scrollIntervalRef.current);
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white p-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button
          onClick={resetScroll}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
        >
          Reset
        </button>

        <div className="flex items-center gap-2">
          <label>Speed:</label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-32"
          />
          <span>{speed}</span>
        </div>

        <div className="flex items-center gap-2">
          <label>Lines:</label>
          <input
            type="range"
            min="1"
            max="7"
            value={visibleLines}
            onChange={(e) => setVisibleLines(Number(e.target.value))}
            className="w-32"
          />
          <span>{visibleLines}</span>
        </div>
      </div>

      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Paste your text here..."
        className="w-full h-32 mb-4 p-2 bg-gray-800 text-white rounded resize-none"
      />

      <div className="relative flex-1">
        {/* Top overlay */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-black/80 z-10" />
        
        {/* Reading window */}
        <div 
          className="absolute left-0 right-0 z-10"
          style={{
            top: '33.33%',
            height: `${visibleLines * 2}rem`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/80 z-10" />

        <div
          ref={scrollRef}
          className="absolute inset-0 overflow-auto"
        >
          <div className="pt-[33vh] pb-[33vh]">
            {text.split('\n').map((line, index) => (
              <p
                key={index}
                className="text-center mb-4 text-2xl px-4"
              >
                {line || ' '}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeleprompterScreen;