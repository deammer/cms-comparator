import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import GithubIcon from '../images/GithubIcon';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background:
        'linear-gradient(-45deg, #403D93 0%, #5246BD 43%, #6367CE 100%)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <a
          target="_blank"
          href="https://github.com/deammer/cms-comparator"
          rel="noreferrer noopener"
          style={{ color: '#caccff', float: 'right', textDecoration: 'none' }}
        >
          Contribute{' '}
          <GithubIcon
            style={{ verticalAlign: 'top', display: 'inline-block' }}
            fill="#caccff"
            width={24}
          />
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
