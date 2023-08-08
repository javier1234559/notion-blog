import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as CodeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeHighlight = ({ className, children }) => {
  if (className && className.startsWith('lang-')) {
    const language = className.replace('lang-', '');
    return (
      <SyntaxHighlighter language={language} style={CodeStyle}>
        {children}
      </SyntaxHighlighter>
    );
  } else {
    // Render inline code without specifying a language
    return (
      <code style={{ fontSize: '20px' ,color:"white" ,backgroundColor:"gray" }}>
        {children}
      </code>
    );
  }
};

export default CodeHighlight; // Change "CodeBlock" to "CodeHighlight"
