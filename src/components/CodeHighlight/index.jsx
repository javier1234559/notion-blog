import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark as CodeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeHighlight = ({ className, children }) => {
  let language = 'text'; // Change "lang" to "language"
  if (className && className.startsWith('lang-')) {
    language = className.replace('lang-', ''); // Change "lang" to "language"
  }
  return (
    <SyntaxHighlighter language={language} style={CodeStyle}>
      {children} {/* Remove the <code> wrapper */}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight; // Change "CodeBlock" to "CodeHighlight"
