import CodeHighlight from ".";
import { ReactNode, isValidElement } from "react";

interface PreBlockProps {
  children?: ReactNode;
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock: React.FC<PreBlockProps> = ({ children }) => {
  if (isValidElement(children)) {
    const element = children as React.ReactElement;
    if (element.type === 'code') {
      return <CodeHighlight {...element.props} />;
    }
  }

  return <pre>{children}</pre>;
};

export default PreBlock;
