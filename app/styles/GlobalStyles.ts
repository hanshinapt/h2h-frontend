import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

	:root {
    --color-primary: #000000;
  }
`;

export default GlobalStyles;
