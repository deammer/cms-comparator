import React from 'react';

const Card = ({
  Name,
  Website,
  Type,
  Logo,
  Notes,
  Free_version_limitations,
  Markdown_support,
  Table_support,
  Self_hosted,
}) => (
  <div
    style={{
      boxShadow:
        '0 18px 35px 0 rgba(63, 63, 122, 0.1), 0 5px 15px 0 rgba(58, 50, 140, 0.07)',
      borderRadius: 4,
      background: 'white',
      marginBottom: 15,
      display: 'flex',
    }}
  >
    <div
      style={{
        flex: '1 1 auto',
        padding: 20,
      }}
    >
      <h2
        style={{
          color: '#484a7a',
          marginBottom: 10,
        }}
      >
        {Name}{' '}
        <small
          style={{
            display: 'inline-block',
            fontSize: 10,
            background: '#eee',
            padding: 4,
            borderRadius: 2,
            marginLeft: 10,
            verticalAlign: 'middle',
          }}
        >
          {Type}
        </small>
      </h2>
      {Logo && Logo[0] && (
        <img
          src={Logo[0].url}
          alt={`${Name} Logo`}
          style={{ width: 'auto', height: 40 }}
        />
      )}
      <p>
        <a
          href={Website}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none', color: '#706ce8' }}
        >
          🖥 Website
        </a>
      </p>
    </div>
    <div
      style={{
        background: '#fbfafe',
        flex: '0 1 40%',
        width: 200,
        padding: 20,
      }}
    >
      {Notes && Notes.raw && <p>{Notes.raw}</p>}
      {Free_version_limitations && (
        <div>
          <div style={{ marginBottom: 10 }}>
            <b>Free tier limitations</b>
          </div>
          {Free_version_limitations.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </div>
      )}
      <div>
        <b>Tables support: </b>
        {Table_support}
      </div>
      <div>
        <b>Markdown support:</b>
        {Markdown_support ? ' Yes' : ' No'}
      </div>
      <div>
        <b>Hosting:</b>
        {Self_hosted ? ' Self-hosted' : ' ☁️ SaaS'}
      </div>
    </div>
  </div>
);

export default Card;
