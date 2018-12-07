import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Card from '../components/Card';
import Table from '../components/Table';

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
        <div style={{ margin: '15px auto', textAlign: 'center' }}>
          <button
            disabled={view === VIEW_LIST}
            style={{
              opacity: view === VIEW_LIST ? 0.25 : 1,
              background: '#2C2B59',
              color: '#fff',
              border: 0,
              cursor: 'pointer',
              padding: '5px 15px',
              borderRadius: '20px 0 0 20px',
            }}
            onClick={() => {
              this.setState({ view: VIEW_LIST });
            }}
          >
            {VIEW_LIST}
          </button>
          <button
            disabled={view === VIEW_TABLE}
            style={{
              opacity: view === VIEW_TABLE ? 0.25 : 1,
              background: '#2C2B59',
              color: '#fff',
              border: 0,
              cursor: 'pointer',
              padding: '5px 15px',
              borderRadius: '0 20px 20px 0',
            }}
            onClick={() => {
              this.setState({ view: VIEW_TABLE });
            }}
          >
            {VIEW_TABLE}
          </button>
        </div>
        <main>
          {view === VIEW_LIST && (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {allAirtable.edges.map(x => (
                <Card key={x.node.id} {...x.node.data} />
              ))}
            </div>
          )}
          {view === VIEW_TABLE && (
            <Table nodes={allAirtable.edges.map(x => x.node)} />
          )}
        </main>
      </Layout>
    );
  }
}

export default IndexPage;

export const indexQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Comparison" } }
      sort: { order: ASC, fields: data___Name }
    ) {
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
            Import
            Environments
            Logo {
              url
            }
          }
        }
      }
    }
  }
`;
