"use client"
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function ML() {

  return (
    <div>
      <h1 className='my-3 text-center text-4xl font-semibold'> Linear Regression </h1>
      <div className=''>
        Let the training set contain <Latex>{`$X=\\begin{pmatrix}\\mathbf{x}_1 & \\cdots & \\mathbf{x}_n \\end{pmatrix}^\\top\\in\\mathbb{R}^{n\\times d}$`}</Latex> and <Latex>{`$y\\in\\mathbb{R}^n$`}</Latex>. The model is supposed to be
        <Latex>{`$$f(\\mathbf{x}_i)=\\beta_0+\\sum\\limits_{j=1}^d\\beta_ix_{ij}.$$`}</Latex>
        Let <Latex>{`$\\bm{\\beta}=\\begin{pmatrix} \\beta_0 & \\beta_1 & \\cdots & \\beta_d \\end{pmatrix}$`}</Latex>. The loss function is
        <Latex>{`$$\\mathcal{L}(\\beta) = \\dfrac{1}{n}\\sum\\limits_{i=1}^n \\left[f(\\mathbf{x}_i) - y_i\\right]^2=\\beta_0+.$$`}</Latex>
      </div>
    </div>

  );
}
