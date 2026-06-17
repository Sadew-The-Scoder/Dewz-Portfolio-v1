import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_INFO, TERMINAL_COMMANDS } from '../constants/'; // Adjust path if needed

function TerminalPage() {
  const [history, setHistory] = useState([...TERMINAL_INFO.welcomeMessage]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when terminal output updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keep terminal input focused when clicking anywhere inside the terminal container
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    // Clear terminal shortcut: Ctrl + L
    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      setHistory([]);
      return;
    }

    // Command autocomplete: Tab
    if (e.key === 'Tab') {
      e.preventDefault();
      const trimmedInput = input.trim().toLowerCase();
      if (!trimmedInput) return;

      const matches = Object.keys(TERMINAL_COMMANDS).filter((cmd) =>
        cmd.startsWith(trimmedInput)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const executeCommand = (e) => {
    e.preventDefault();
    const cleanInput = input.trim();
    const command = cleanInput.toLowerCase();

    if (!cleanInput) return;

    // Create prompt line to show what the user typed
    const promptLine = `${TERMINAL_INFO.promptUser}:${TERMINAL_INFO.promptPath}$ ${cleanInput}`;
    let output = [];

    if (command === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (command === 'banner') {
      output = [...TERMINAL_INFO.welcomeMessage];
    } else if (TERMINAL_COMMANDS[command]) {
      output = TERMINAL_COMMANDS[command].action();
    } else {
      output = [`command not found: ${cleanInput}. Type 'help' for options.`];
    }

    setHistory((prev) => [...prev, promptLine, ...output]);
    setInput('');
  };

  return (
    <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] bg-base-300 p-4 md:p-8 font-mono text-sm selection:bg-success selection:text-base-300">
      {/* Terminal Window Frame */}
      <div 
        onClick={focusInput}
        className="mx-auto max-w-4xl rounded-lg border border-neutral bg-black shadow-2xl overflow-hidden cursor-text"
      >
        {/* Top Window Bar */}
        <div className="flex items-center justify-between bg-neutral px-4 py-2 select-none">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-warning inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-success inline-block"></span>
          </div>
          <div className="text-neutral-content text-xs font-semibold">
            {TERMINAL_INFO.promptUser} — bash
          </div>
          <div className="w-12"></div> {/* Spacer to center the title */}
        </div>

        {/* Terminal Screen Output Area */}
        <div className="p-4 min-h-[450px] max-h-[600px] overflow-y-auto text-success space-y-1 custom-scrollbar">
          {history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap leading-relaxed">
              {line.startsWith(`${TERMINAL_INFO.promptUser}:`) ? (
                <span>
                  <span className="text-info">{TERMINAL_INFO.promptUser}</span>
                  <span className="text-neutral-content">:</span>
                  <span className="text-warning">{TERMINAL_INFO.promptPath}</span>
                  <span className="text-neutral-content">$</span>{' '}
                  <span className="text-neutral-content font-bold">{line.split('$ ')[1]}</span>
                </span>
              ) : (
                line
              )}
            </div>
          ))}
          
          {/* Dynamic Input Prompt Line */}
          <form onSubmit={executeCommand} className="flex items-center pt-1">
            <span className="text-info shrink-0">{TERMINAL_INFO.promptUser}</span>
            <span className="text-neutral-content shrink-0">:</span>
            <span className="text-warning shrink-0">{TERMINAL_INFO.promptPath}</span>
            <span className="text-neutral-content shrink-0 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-neutral-content focus:outline-none grow caret-success border-none p-0 m-0 focus:ring-0"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}

export default TerminalPage;