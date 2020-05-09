import { css } from 'styled-components';

const sizes = {
  small: 376,
  smallmed: 415,
  medium: 801,
  large: 1025,
  medlarge: 1366,
  xlarge: 1440,
  xxlarge: 1680
};

const media = Object.keys(sizes).reduce((acc, label) => {
  const accumulator = acc;
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export { media, sizes };
