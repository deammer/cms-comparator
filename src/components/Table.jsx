import React, { Component } from 'react';

const palette = {
  blue: ['#d1f7c4', '#0b1d05'],
  green: ['#cfdfff', '#102046'],
  salmon: ['#fee2d5', '#6b2613'],
  yellow: ['#ffeab6', '#3b2501'],
  grey: ['#eee', '#040404'],
};

const ColoredLabel = ({ children, color }) => (
  <span
    style={{
      background: color && palette[color] ? palette[color][0] : palette.grey[0],
      color: color && palette[color] ? palette[color][1] : palette.grey[1],
      padding: '0 8px',
      borderRadius: 50,
      display: 'inline-block',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const No = () => <ColoredLabel color="blue">No</ColoredLabel>;

const Yes = () => <ColoredLabel color="green">Yes</ColoredLabel>;

const tableStyle = {
  overflowX: 'scroll',
  width: '100%',
};

class Table extends Component {
  render() {
    const { nodes } = this.props;

    return (
      <div
        style={{
          boxShadow:
            '0 18px 35px 0 rgba(63, 63, 122, 0.1), 0 5px 15px 0 rgba(58, 50, 140, 0.07)',
          borderRadius: 4,
          background: 'white',
          marginBottom: 15,
          overflowX: 'scroll',
          margin: '0 auto',
          maxWidth: 'calc(100% - 30px)',
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Approach</th>
              <th>Markdown</th>
              <th>Tables</th>
              <th>Self-hosted</th>
              <th>Import</th>
              <th>Environments</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map(x => (
              <tr key={x.id}>
                <td>
                  <a
                    href={x.data.Website}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: 'none', color: '#706ce8' }}
                  >
                    {x.data.Name}
                  </a>
                </td>
                <td>
                  <ColoredLabel>{x.data.Type}</ColoredLabel>
                </td>
                <td>{x.data.Markdown_support ? <Yes /> : <No />}</td>
                <td>{x.data.Table_support}</td>
                <td>{x.data.Self_hosted ? <Yes /> : <No />}</td>
                <td>{x.data.Import}</td>
                <td>{x.data.Environments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
