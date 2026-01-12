"use client"
import React, { useState } from 'react';

export default function BingoCard() {
  const [checkedSquares, setCheckedSquares] = useState(new Set());

  const bingoSquares = [
    // Row 1
    ["Support alpha testing", "Fix critical alpha bugs", "Improve app stability", "Deliver launch feature", "Improve performance"],
    // Row 2
    ["Refactor legacy code", "Improve error handling", "Better API integration", "Responsive UI fixes", "Reduce technical debt"],
    // Row 3
    ["Modern Angular patterns", "Improve state management", "Get AZ-900 Azure Fundamentals", "FREE SPACE", "Get AZ-204 Azure Developer"],
    // Row 4
    ["Improve testing practices", "Fix recurring issues", "Collaborate with QA", "Feature ownership", "Production readiness"],
    // Row 5
    ["Improve code quality", "Reduce regressions", "Meet launch deadlines", "Support team success", "Successful web launch"]
  ];

  const toggleSquare = (rowIndex: number, colIndex: number) => {
    const key = `${rowIndex}-${colIndex}`;
    const newChecked = new Set(checkedSquares);
    if (newChecked.has(key)) {
      newChecked.delete(key);

      
    } else {
      newChecked.add(key);
    }
    setCheckedSquares(newChecked);
  };

  const resetCard = () => {
    setCheckedSquares(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">New Year Goals</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">BINGO</h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-600">2026</p>
          <p className="text-sm text-gray-500 mt-2">WorkPAK Web Launch Challenge</p>
        </div>

        {/* Bingo Grid */}
        <div className="grid grid-cols-5 gap-1 md:gap-2 mb-6">
          {bingoSquares.map((row, rowIndex) => (
            row.map((square, colIndex) => {
              const isFreeSpace = square === "FREE SPACE";
              const key = `${rowIndex}-${colIndex}`;
              const isChecked = checkedSquares.has(key) || isFreeSpace;
              
              return (
                <button
                  key={key}
                  onClick={() => !isFreeSpace && toggleSquare(rowIndex, colIndex)}
                  className={`
                    aspect-square border-2 rounded-lg p-1 md:p-2 flex items-center justify-center text-center
                    relative overflow-hidden transition-all duration-200
                    ${isFreeSpace 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-400 border-yellow-500 cursor-default' 
                      : isChecked
                        ? 'bg-green-100 border-green-500'
                        : 'bg-white border-blue-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer'
                    }
                  `}
                >
                  {isChecked && !isFreeSpace && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl text-green-600 opacity-30">✓</span>
                    </div>
                  )}
                  <p className={`
                    text-xs leading-tight relative z-10
                    ${isFreeSpace ? 'text-white font-bold text-sm' : 'text-gray-700 font-medium'}
                    ${isChecked && !isFreeSpace ? 'font-semibold' : ''}
                  `}>
                    {isFreeSpace ? (
                      <span>
                        WorkPAK<br/>Web Launch<br/>
                        <span className="text-xs">🚀</span>
                      </span>
                    ) : square}
                  </p>
                </button>
              );
            })
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            🖨️ Print Card
          </button>
          <button
            onClick={resetCard}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            🔄 Reset
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs md:text-sm text-gray-600 border-t pt-4">
          <p className="font-semibold">TEPCO Home Office •Jmendez New Year Goals Challenge</p>
          <p className="mt-1">Challenge ends: December 31, 2026</p>
        
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-800 mb-1">Prizes:</p>
            <p className="text-xs">🎁 One Line Bingo: Complete any horizontal, vertical, or diagonal line</p>
            <p className="text-xs">🎁 Blackout Bingo: Complete all squares</p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .min-h-screen {
            min-height: 0;
            padding: 0.5in;
          }
          button {
            display: none;
          }
          .border-t {
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
}