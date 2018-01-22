import Layout from '../components/Layout.js';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper.js';
import Menu from '../components/Menu.js';
import Posts from '../components/Posts.js';
import { Config } from '../config.js';

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50
};

class Index extends Component {
  static async getInitialProps(context) {
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed`);
    const posts = await postsRes.json();
    return { posts };
  }

  render() {
    const posts = this.props.posts;
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <Posts posts={posts} />
      </Layout>
    );
  }
}

export default PageWrapper(Index);
