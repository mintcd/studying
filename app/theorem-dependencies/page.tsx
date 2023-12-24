"use client"

import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function Theorems() {
  return (
    <div>
      <h1 className="text-center font-semibold text-4xl">
        Terminologies
      </h1>



      <div className="border rounded p-4 bg-green-100 m-3">
        <span className="text-lg font-semibold mb-2"> Theorem. </span>
        <Latex>
          {`For given bases $\\beta$ for $V$ and $\\gamma$ for $W$, the mapping 
            $$\\begin{aligned} \\Phi : \\mathcal{L}(V,W) &\\to  \\mathcal{M}_{m\\times n}^\\mathbb{F} \\\\ f &\\mapsto [f]_\\beta^\\gamma \\end{aligned}$$ is an isomorphism.`}
        </Latex>
      </div>
    </div>
  );
}
