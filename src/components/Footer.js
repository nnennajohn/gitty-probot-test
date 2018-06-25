import React from 'react';

import styled from 'styled-components';

import Link from './Link';
import Logo from './Logo';
import { color, typography, pageMargins } from './shared';
import Icon from './Icon';

const FooterWrapper = styled.footer`
  ${pageMargins};
  text-align: center;
  padding: 1rem 0 0;
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
      href="https://weekendprojects.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FooterLogo />
    </a>
    <br />
    Made with lots of <Icon icon="heart" className="mh2" fill="red" /> by{' '}
    <FooterLink
      className="secondary"
      href="https://github.com/nnennajohn"
      target="_blank"
    >
      Nnenna John
    </FooterLink>.
  </FooterWrapper>
);

export default Footer;
