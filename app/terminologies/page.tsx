"use client"

import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import terminologies from "@models/terminologies";
import Latex from 'react-latex-next';

export default function Terminologies() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const groupedTerminologies: { [key: string]: Terminology[] } = terminologies.reduce(
    (
      acc: { [key: string]: Terminology[] },
      term: Terminology
    ) => {
      const firstLetter = term.name.charAt(0).toUpperCase();
      acc[firstLetter] = [...(acc[firstLetter] || []), term];
      return acc;
    },
    {} as { [key: string]: Terminology[] } // Explicitly define the initial value type
  );

  // Sort keys alphabetically
  const sortedKeys = Object.keys(groupedTerminologies).sort();

  const toggleList = (letter: string) => {
    setExpanded((prev) => ({ ...prev, [letter]: !prev[letter] }));
  };

  return (
    <div>
      <h1 className='my-3 text-center text-4xl font-semibold'> Terminologies </h1>
      <div className='grid grid-cols-3'>
        {sortedKeys.map((letter) => (
          <div key={letter}>
            <button onClick={() => toggleList(letter)} className="font-semibold">
              {letter} ({groupedTerminologies[letter].length})
            </button>
            {expanded[letter] && (
              <ul>
                {groupedTerminologies[letter].map((term) => (term.definition &&
                  <li key={term.name}>
                    <Latex>
                      {term.definition}
                    </Latex>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>

  );
}
