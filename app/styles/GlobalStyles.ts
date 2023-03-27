import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

	:root {
    --color-primary: #51987F;
    --color-primary-light: #E6EDEA;
    --color-primary-dark: #0F3D3E;

    --color-secondary: #A5A5A5;
    --color-secondary-light: #F7F7F7;
    --color-secondary-dark :#5F5F5F;

    --font-size-8: 8px;
		--font-size-10: 10px;
		--font-size-12: 12px;
		--font-size-14: 14px;
		--font-size-16: 16px;
		--font-size-18: 18px;
		--font-size-20: 20px;
		--font-size-22: 22px;
    --font-size-24: 24px;
  }
`;

export default GlobalStyles;
