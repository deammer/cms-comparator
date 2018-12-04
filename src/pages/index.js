import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Card from '../components/Card';

const VIEW_LIST = 'List view';
const VIEW_TABLE = 'Table view';

class IndexPage extends Component {
  state = {
    view: VIEW_LIST,
  };

  render() {
    const { allAirtable } = this.props.data;
    const { view } = this.state;

    return (
      <Layout>
        <h1>List view</h1>
        <div style={{ marginBottom: 15 }}>
          <button
            disabled={view === VIEW_LIST}
            style={{ opacity: view === VIEW_LIST ? 0.25 : 1 }}
            onClick={() => {
              this.setState({ view: VIEW_LIST });
            }}
          >
            {VIEW_LIST}
          </button>
          <button
            disabled={view === VIEW_TABLE}
            style={{ opacity: view === VIEW_TABLE ? 0.25 : 1 }}
            onClick={() => {
              this.setState({ view: VIEW_TABLE });
            }}
          >
            {VIEW_TABLE}
          </button>
        </div>
        <main>
          {view === VIEW_LIST &&
            allAirtable.edges.map(x => (
              <Card key={x.node.id} {...x.node.data} />
            ))}
          {view === VIEW_TABLE && (
            <div
              style={{
                boxShadow:
                  '0 18px 35px 0 rgba(63, 63, 122, 0.1), 0 5px 15px 0 rgba(58, 50, 140, 0.07)',
                borderRadius: 4,
                background: 'white',
                marginBottom: 15,
              }}
            >
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Approach</th>
                    <th>Website</th>
                    <th>Markdown</th>
                    <th>Tables</th>
                    <th>Self-hosted</th>
                  </tr>
                </thead>
                <tbody>
                  {allAirtable.edges.map(x => (
                    <tr key={x.node.id}>
                      <td>{x.node.data.Name}</td>
                      <td>{x.node.data.Type}</td>
                      <td>
                        <a
                          href={x.node.data.Website}
                          rel="noopener noreferrer"
                          target="_blank"
                          style={{ textDecoration: 'none', color: '#706ce8' }}
                        >
                          Visit
                        </a>
                      </td>
                      <td>{x.node.data.Markdown_support ? '✅' : '❌'}</td>
                      <td>{x.node.data.Table_support}</td>
                      <td>{x.node.data.Self_hosted ? '✅' : '❌'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </Layout>
    );
  }
}

export default IndexPage;

export const indexQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "Comparison" } }) {
      edges {
        node {
          id
          data {
            Name
            Type
            Website
            Notes
            Free_version_limitations
            Markdown_support
            Table_support
            Self_hosted
            Logo {
              url
            }
          }
        }
      }
    }
  }
`;
