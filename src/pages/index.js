// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  color,
  typography,
  spacing,
  pageMargins,
  pageMargin,
  breakpoint,
  tocEntries,
  shadeColor,
} from '../components/shared';

import Link from '../components/Link';
import Button from '../components/Button';
import CTA from '../components/CTA';
import Subheading from '../components/Subheading';
import { BrandTiles } from '../components/Logo';

const Title = styled.h1`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  letter-spacing: 1.5px;
  color: #c5e9fb;
  line-height: 1;
  text-transform: uppercase;
  padding-bottom: 1rem;
  margin-bottom: 0.2em;
  text-shadow: rgba(0, 135, 220, 0.3) 0 1px 5px;
  @media (min-width: ${breakpoint * 1.5}px) {
    font-size: ${typography.size.s3}px;
  }
`;

const Desc = styled.div`
  letter-spacing: -0.2px;
  text-align: center;
  color: ${color.lightest};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.m3}px;
  line-height: 1.33;
  margin-bottom: 1em;
  text-shadow: rgba(0, 135, 220, 0.3) 0 1px 5px;
  @media (min-width: ${breakpoint * 1}px) {
    font-size: ${typography.size.l1}px;
  }
  @media (min-width: ${breakpoint * 2}px) {
    font-size: ${typography.size.l2}px;
  }
`;

const ActionHeading = styled(Subheading)`
  display: block;
  color: ${color.lighter};
  margin-bottom: 1rem;
`;

const ViewLayerImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 6px;
  display: inline-block;
  vertical-align: top;
`;

const Actions = styled.div`
  > *:not(:only-child) {
    margin: 0 10px
    margin-bottom: 12px;
    @media (min-width: ${breakpoint * 1}px) {
      margin-left: 0;
      margin-right: 20px;
    }
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Pitch = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  @media (min-width: ${breakpoint * 1.5}px) {
    flex: 0 1 65%;
  }
`;

const Content = styled.div`
  ${pageMargins};
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column-reverse;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  @media (min-width: ${breakpoint * 1.5}px) {
    padding-top: 7rem;
    padding-bottom: 3rem;
    flex-direction: row;
    display: flex;
    align-items: center;
    flex: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #58bcc8;
  background-image: linear-gradient(37deg, #58bcc8, #1f88d2);
  @media (min-width: ${breakpoint * 1.5}px) {
    min-height: 40vh;
    display: flex;
    align-items: center;
  }
`;

const Answer = styled.div`
  margin-bottom: 3rem;
  font-size: 18px;
  line-height: 1.65;
  p:first-child {
    margin-top: 0.5em;
  }
  p {
    margin: 1em 0;
  }
  img {
    margin: 1em 0;
    max-width: 100%;
    display: block;
  }
`;

const IntroSection = styled.div`
  text-align: center;
  padding: 4rem ${spacing.padding.medium}px 1rem;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

const IntroSectionTitle = styled.h3`
  font-size: ${typography.size.m3}px;
  font-weight: ${typography.weight.extrabold};
`;

const ClickIntercept = styled(Link)`
  position: absolute;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ChapterTitle = styled.div`
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;
const ChapterDesc = styled.div`
  line-height: 1.5;
  color: ${color.dark};
`;

const ChapterMeta = styled.div`
  display: block;
  overflow: hidden;
`;

const Chapter = styled.li`
  background: ${color.app};
  border-radius: 4px;
  margin-bottom: 0.5rem;
  padding: 20px 30px;
  position: relative;
  &:hover {
    background: ${shadeColor(color.app, 3)};
  }
  &:before {
    float: left;
    vertical-align: top;
    content: counter(counter);
    counter-increment: counter;
    font-size: ${typography.size.m3}px;
    line-height: 40px;
    font-weight: ${typography.weight.bold};
    color: ${color.mediumdark};
    margin-right: 30px;
    margin-top: 8px;
  }
`;
const Chapters = styled.ol`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
  counter-reset: counter;
`;

// const IndexPage = () => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/" isGatsby>
//       Go to page 2
//     </Link>
//   </div>
// );

// export default IndexPage;

type Props = {
  data: {
    site: { siteMetadata: { toc: any, defaultTranslation: any } },
    pages: any,
  },
};

export default ({
  data: {
    site: {
      siteMetadata: { toc, defaultTranslation },
    },
    pages,
  },
}: Props) => {
  const defaultPages = {
    edges: pages.edges.filter((e) =>
      e.node.fields.slug.match(defaultTranslation),
    ),
  };

  const entries = tocEntries(toc, defaultPages);
  const firstChapter = toc[0];

  return (
    <Fragment>
      <Wrapper>
        <Content>
          <Pitch>
            <Title>Storybook Tutorial</Title>
            <Desc>
              Learn Storybook to create bulletproof UI components, along the way
              you&rsquo;ll build an app UI from scratch.
            </Desc>
            <BrandTiles />
          </Pitch>
        </Content>
      </Wrapper>
      <IntroSection>
        <div style={{ marginBottom: '20px' }}>
          <Title style={{ color: color.dark }}>This Weekeend</Title>
          <IntroSectionTitle>
            <span>Building our First Gitbub App with Probot</span>
          </IntroSectionTitle>
          <Actions>
            <Link isGatsby to={`/react/en/${firstChapter}`}>
              <Button inverse>
                <ViewLayerImage src="/logo-react.svg" alt="React" />Get Started
              </Button>
            </Link>
          </Actions>
        </div>
        <img
          src="/probot.svg"
          style={{ width: '50%', margin: '3rem auto', display: 'block' }}
          alt="Probot logo"
        />
        <IntroSectionTitle>What is Storybook?</IntroSectionTitle>
        <Answer>
          <p>
            <Link
              className="primary"
              href="https://storybook.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storybook
            </Link>{' '}
            is the most popular UI component development tool for React, Vue,
            and Angular. It helps you{' '}
            <strong>
              develop and design UI components outside your app in an isolated
              environment
            </strong>.
          </p>
          <p>
            Professional developers at Airbnb, Dropbox, and Lonely Planet use
            Storybook to build durable documented UIs faster.
          </p>
        </Answer>

        <IntroSectionTitle>What you&rsquo;ll build</IntroSectionTitle>
        <Answer>
          <img
            src="/ss-browserchrome-taskbox-learnstorybook.png"
            alt="Taskbox UI"
          />
          <p>
            Taskbox, a task management UI (similar to Asana), complete with
            multiple item types and states. We’ll go from building simple UI
            components to assembling screens. Each chapter illustrates a
            different aspect of developing UIs with Storybook.
          </p>
          <p>
            <span role="img" aria-label="book">
              📖
            </span>{' '}
            Each chapter is linked to a <b>working commit</b> to help you stay
            in sync.
          </p>
        </Answer>

        <IntroSectionTitle>What&rsquo;s inside</IntroSectionTitle>
        <Answer>
          <Chapters>
            {entries.map(({ slug, title, description }) => (
              <Chapter key={slug}>
                <ClickIntercept isGatsby className="primary" to={slug} />
                <ChapterMeta>
                  <ChapterTitle>{title}</ChapterTitle>
                  <ChapterDesc>{description}</ChapterDesc>
                </ChapterMeta>
              </Chapter>
            ))}
          </Chapters>
        </Answer>
        <IntroSectionTitle>Who&rsquo;s this for?</IntroSectionTitle>
        <Answer>
          <p>
            This tutorial is for developers of all skill levels that are new to
            Storybook. If you follow along, you’ll be able to grasp the core
            concepts of isolated UI component development and build a full UI in
            Storybook without issue.
          </p>
          <p>
            We assume that you’re familiar with basic JavaScript, components,
            and web development. If you already use Storybook, checkout the{' '}
            <Link href="https://storybook.js.org/basics/introduction/">
              official docs
            </Link>{' '}
            for API documentation or visit{' '}
            <Link href="https://blog.hichroma.com/" target="_blank">
              Chroma on Medium
            </Link>{' '}
            for more resources like this.
          </p>
        </Answer>

        <IntroSectionTitle>How long does it take?</IntroSectionTitle>
        <Answer>
          <p>
            Developer time is precious. This tutorial covers the key parts of
            Storybook to get you started as quickly as possible. Finish it in
            less than two hours. If you&rsquo;re an experienced developer even
            shorter. Our aim is to be the most efficient way to onboard to
            Storybook.
          </p>
        </Answer>

        <CTA
          text={`Let's learn Storybook!`}
          action={
            <Link isGatsby to={`/react/en/${firstChapter}`}>
              <Button primary>Start tutorial</Button>
            </Link>
          }
        />
      </IntroSection>
    </Fragment>
  );
};

// $FlowFixMe
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        toc
        defaultTranslation
      }
    }
    pages: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tocTitle
            title
            description
          }
          fields {
            slug
            chapter
          }
        }
      }
    }
  }
`;
