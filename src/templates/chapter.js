// @flow

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Highlight from '../components/Highlight';
import Link from '../components/Link';
import CTA from '../components/CTA';
import Button from '../components/Button';
import Subheading from '../components/Subheading';
import LogoTwitter from '../components/LogoTwitter';
import IconCommit from '../components/IconCommit';

import {
  color,
  formatting,
  typography,
  pageMargins,
  breakpoint,
  shadeColor,
  tocEntries,
} from '../components/shared';

const Heading = styled(Subheading)`
  display: block;
  font-size: ${typography.size.s1}px;
  line-height: 1rem;
  color: ${color.medium};
  margin-bottom: 0.5rem;
  @media (min-width: ${breakpoint * 1}px) {
    margin-bottom: 1rem;
  }
`;

const DocsItem = styled.li`
  a.selected {
    font-weight: ${typography.weight.extrabold};
  }
`;

const DocsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
`;

const Sidebar = styled.div`
  flex: 0 1 240px;
  padding-right: 20px;
  @media (max-width: ${breakpoint - 1}px) {
    flex: none;
    margin: 1rem 0 2rem;
    width: 100%;
    border-bottom: 1px solid ${color.mediumlight};
  }
  ${DocsList} {
    list-style: none;
    padding: 0;
    margin: 0 0 0 0;
    position: relative;
    @media screen and (min-width: ${breakpoint}px) {
      margin: 0 0 2rem 24px;
      position: sticky;
      top: 50px;
      &:after {
        position: absolute;
        top: 12px;
        right: auto;
        bottom: 12px;
        left: -20px;
        width: auto;
        height: auto;
        border-left: 1px solid ${color.light};
        content: '';
        z-index: 0;
      }
    }
    @media (max-width: ${breakpoint - 1}px) {
      margin-bottom: 1rem;
      li {
        display: inline-block;
        margin-right: 15px;
      }
    }
    a {
      line-height: 1rem;
      padding: 8px 0;
      line-height: 1.5;
      position: relative;
      z-index: 1;
      @media screen and (min-width: ${breakpoint}px) {
        &:after {
          position: absolute;
          top: 15px;
          right: auto;
          bottom: auto;
          left: -23px;
          width: auto;
          height: auto;
          background: ${color.mediumlight};
          box-shadow: white 0 0 0 4px;
          height: 8px;
          width: 8px;
          border-radius: 1em;
          text-decoration: none !important;
          content: '';
        }
        &.selected:after {
          background: ${color.primary};
        }
      }
    }
  }
`;

const Markdown = styled.div`
  margin-bottom: 3rem;
`;

const Content = styled.div`
  ${formatting};
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  ${'' /* Allows Flexbox to overflow  */};
  min-width: 0;
`;

const DocsWrapper = styled.div`
  ${pageMargins};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoint}px) {
    flex-direction: row;
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

const NextChapterSubtitle = styled.div`
  display: block;
  margin-top: 0.5rem;
  font-size: 18px;
  line-height: 1.65;
  font-weight: ${typography.weight.regular};
`;

const GithubLink = styled(Link)`
  font-weight: ${typography.weight.bold};
`;
const GithubLinkWrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const CTAMessage = styled.div`
  overflow: hidden;
`;

const CTAWrapper = styled.a`
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s3}px;
  @media screen and (min-width: ${breakpoint}px) {
    font-size: ${typography.size.m1}px;
  }
  line-height: 1.2;
  background: ${color.app};
  color: ${color.dark};
  border-radius: 4px;
  padding: 30px 20px;
  margin-bottom: 1rem;
  display: block;
  transition: all 150ms ease-out;
  text-decoration: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  &:hover {
    background: ${shadeColor(color.app, 3)};
  }
  ${CTAMessage} {
    flex: 1;
  }
  svg {
    flex: 0 1 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 30px;
  }
`;

const Pagination = styled(CTA)`
  margin-top: 3rem;
`;

type Props = {
  data: {
    currentPage: any,
    pages: any,
    site: {
      siteMetadata: {
        title: any,
        toc: any,
        languages: any,
        githubUrl: string,
        codeGithubUrl: string,
        siteUrl: string,
      },
    },
  },
  location: any,
};

export default ({
  data: {
    currentPage,
    pages,
    site: {
      siteMetadata: {
        title: siteTitle,
        toc,
        languages,
        githubUrl,
        codeGithubUrl,
        siteUrl,
      },
    },
  },
  location,
}: Props) => {
  const entries = tocEntries(toc, pages);
  const {
    frontmatter: { commit, title, description },
    fields: { slug, chapter, framework, language },
  } = currentPage;
  const githubFileUrl = `${githubUrl}/blob/master/content${slug.replace(
    /\/$/,
    '',
  )}.md`;

  const nextEntry = entries[toc.indexOf(chapter) + 1];

  const otherLanguages = languages.filter((l) => l !== language);

  return (
    <DocsWrapper>
      <Helmet
        title={`${title} | ${siteTitle}`}
        meta={[{ name: 'description', content: description }]}
      >
        {otherLanguages.map((otherLanguage) => (
          <link
            key={otherLanguage}
            rel="alternate"
            hrefLang={otherLanguage}
            href={`${siteUrl}/${framework}/${otherLanguage}/${chapter}`}
          />
        ))}
      </Helmet>
      <Sidebar>
        <Heading>Table of Contents</Heading>
        <DocsList>
          {entries.map((entry) => (
            <DocsItem key={entry.slug}>
              <Link
                isGatsby
                strict
                className={slug !== entry.slug ? 'tertiary' : 'selected'}
                to={entry.slug}
              >
                {entry.title}
              </Link>
            </DocsItem>
          ))}
        </DocsList>
      </Sidebar>
      <Content>
        <Markdown>
          <Highlight>{currentPage.html}</Highlight>
        </Markdown>

        {commit && (
          <CTAWrapper target="_blank" href={`${githubFileUrl}`}>
            <IconCommit />
            <CTAMessage>
              Keep your code in sync with this chapter. View file on GitHub.
            </CTAMessage>
          </CTAWrapper>
        )}

        <CTAWrapper
          target="_blank"
          href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fweekendprojects.io%2F&ref_src=twsrc%5Etfw&text=I%E2%80%99m%20learning%20Probot!%20It%E2%80%99s%20a%20simple%20framework%20for%20building%20Github%20Apps.%20&tw_p=tweetbutton&url=https%3A%2F%2Fweekendprojects.io&via=nnennajohn"
        >
          <LogoTwitter />
          <CTAMessage>
            Tweet "I&rsquo;m learning Probot! It’s a simple framework for
            building Github Apps."
          </CTAMessage>
        </CTAWrapper>

        {nextEntry && (
          <Pagination
            text={
              <div>
                {nextEntry.title}
                <NextChapterSubtitle>
                  {nextEntry.description}
                </NextChapterSubtitle>
              </div>
            }
            action={
              <Link isGatsby to={nextEntry.slug}>
                <Button primary>Next chapter</Button>
              </Link>
            }
          />
        )}
        <GithubLinkWrapper>
          <GithubLink
            className="secondary"
            href={githubFileUrl}
            target="_blank"
          >
            <span role="img" aria-label="write">
              ✍️
            </span>{' '}
            Edit on GitHub
          </GithubLink>
        </GithubLinkWrapper>
      </Content>
    </DocsWrapper>
  );
};

// $FlowFixMe
export const query = graphql`
  query PageQuery($framework: String!, $language: String!, $slug: String!) {
    currentPage: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        commit
      }
      fields {
        slug
        chapter
        framework
        language
      }
    }
    site {
      siteMetadata {
        title
        toc
        languages
        githubUrl
        codeGithubUrl
        siteUrl
      }
    }
    pages: allMarkdownRemark(
      filter: {
        fields: { framework: { eq: $framework }, language: { eq: $language } }
      }
    ) {
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
