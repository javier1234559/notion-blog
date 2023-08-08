"use client"
import React from 'react'
import Markdown from "markdown-to-jsx";
import PreBlock from './CodeHighlight/PreBlock';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Paragragh from './Paragragh';

type Props = {
    content :string;
}

const CustomizeMarkdown = ({
    content
}: Props) => {

console.log(typeof content);

  return (
    <Markdown
      options={{
        overrides: {
          pre: { component: PreBlock },
          h1: { component: Heading1},
          h2: { component: Heading2},
          p: { component: Paragragh},
          // table: { component: Heading1},

        }
      }}
      >{content}</Markdown>
  )
}

export default CustomizeMarkdown