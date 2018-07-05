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
    padding-top: 8rem;
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

const IntroSectionDescription = styled.div`
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
const WeekendIntro = styled('div')`
  margin-bottom: 20px;
  background: ${color.purpleTint};
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const IntroSection = styled.div`
  text-align: center;
  padding: 0 ${spacing.padding.medium}px 1rem;
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
  flex: 0 0 50%;
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
  display: flex;
  flex-wrap: wrap;
`;

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
            <Title>Bite-Sized Learning</Title>
            <Desc>
              "Weekendly" Fun Projects to grow your <br />TECNICAL CHOPS.
            </Desc>
            <BrandTiles />
          </Pitch>
        </Content>
      </Wrapper>
      <WeekendIntro>
        <Title style={{ color: color.dark }}>This Weekeend</Title>
        <IntroSectionTitle>
          <span>Building our First Gitbub App with Probot</span>
        </IntroSectionTitle>
      </WeekendIntro>
      <IntroSection>
        <Actions>
          <Link isGatsby to={`/probot/en/${firstChapter}`}>
            <Button inverse style={{ border: '1px solid' }}>
              Get Started
            </Button>
          </Link>
        </Actions>
        <img
          src="/probot.svg"
          style={{ width: '50%', margin: '3rem auto', display: 'block' }}
          alt="Probot logo"
        />
        <IntroSectionTitle className="pt4">What is Probot?</IntroSectionTitle>
        <IntroSectionDescription>
          <p>
            <Link
              className="primary"
              href="https://probot.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Probot
            </Link>{' '}
            is a framework for building{' '}
            <Link
              className="primary"
              href="http://developer.github.com/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>GitHub Apps</strong>
            </Link>{' '}
            in{' '}
            <Link
              className="primary"
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Node.js</strong>
            </Link>. It aims to eliminate all the drudgery–like receiving and
            validating webhooks, and doing authentication handstands–so you can
            focus on the features you want to build.
          </p>
          <p>
            From the website, it says "Probot apps are easy to write, deploy,
            and share. Many of the most popular Probot apps are hosted, so
            there's nothing for you to deploy and manage."
          </p>
          <p>
            Let's take it for a test run by building a Github App that posts a
            comment to a PR when our tests fail on a CI Server.
          </p>
        </IntroSectionDescription>

        <IntroSectionTitle className="pt4">
          What&rsquo;s inside
        </IntroSectionTitle>
        <IntroSectionDescription>
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
        </IntroSectionDescription>
        <IntroSectionTitle className="pt4">
          How long did this take?
        </IntroSectionTitle>
        <IntroSectionDescription>
          <p>
            This weekend project should, you guessed it, take no more than a
            weekend to cover all the basic and build a small functional bot. My
            guess is, if you&rsquo;re an experienced developer, it would
            probably take you no more than a few hours. Either way, I am super
            excited to learn all about building robots for Github;
          </p>
        </IntroSectionDescription>

        <CTA
          className="pt4"
          text={`Let's get Building!`}
          action={
            <Link isGatsby to={`/probot/en/${firstChapter}`}>
              <Button primary>Start Guide</Button>
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
