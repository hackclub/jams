// components/mdxComponents.js

import Dropdown from './Dropdown';
import Blockquote from './Blockquote';
import Grid from './Grid';
import GridItem from './GridItem';
import Image from './Image';
import { CodeBlock, InlineCode } from './Code';
import StepHeader from './StepHeader';

const mdxComponents = {
  Dropdown,
  Grid,
  GridItem,
  img: Image,
  pre: CodeBlock,
  inlineCode: InlineCode,
  h2: StepHeader,
  blockquote: Blockquote,
};

export default mdxComponents;
