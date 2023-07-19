// components/mdxComponents.js

import Dropdown from './Dropdown';
import Image from './Image';
import { CodeBlock, InlineCode } from './Code';
import StepHeader from './StepHeader';

const mdxComponents = {
  Dropdown,
  img: Image,
  pre: CodeBlock,
  inlineCode: InlineCode,
  h2: StepHeader
};

export default mdxComponents;
