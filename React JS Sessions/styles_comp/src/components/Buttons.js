import styled from 'styled-components';

const color = '#f15025';
const padding = 'padding:1rem;';
const margin = 'margin:1rem;';
const border = (width) => {
  return `border:solid ${width} red`;
}

export const Button = styled.button`
color:${color};
background: blue;
text-transform: uppercase;
${padding}
${margin}
${border("5px")}
`

export const SecondButton = styled.button`
color:blue;
background: var(--primaryColor);
text-transform: uppercase;
${padding}
${border("10px")}
`
