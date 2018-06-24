import React from 'react';

import styled from 'styled-components';

import Link from './Link';
import Logo from './Logo';
import { color, typography, pageMargins } from './shared';

const FooterWrapper = styled.footer`
  ${pageMargins};
  text-align: center;
  padding: 3rem 0;
  color: ${color.mediumdark};
`;

const FooterLink = styled(Link)`
  font-weight: ${typography.weight.bold};
`;

const FooterLogo = styled(Logo)`
  height: 26px;
  width: auto;
  margin-bottom: 1rem;
`;

const Footer = ({ ...props }) => (
  <FooterWrapper {...props}>
    <a
      href="https://blog.hichroma.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FooterLogo />
    </a>
    <br />
    Made by{' '}
    <FooterLink
      className="secondary"
      href="https://blog.hichroma.com"
      target="_blank"
    >
      Chroma
    </FooterLink>{' '}
    and the awesome Storybook community
  </FooterWrapper>
);

export default Footer;
