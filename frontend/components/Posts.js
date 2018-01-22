import React from 'react';
import Card from './Card.js';
import Link from 'next/link';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);

    this.state = {
      voteTotal: 0
    };
  }

  componentDidMount() {
    this.setState({ voteTotal: 0 });
  }

  handleUpVote() {
    var voteTotal = this.state.voteTotal;

    this.setState({ voteTotal: voteTotal + 1 });
  }

  handleDownVote() {
    var voteTotal = this.state.voteTotal;

    this.setState({ voteTotal: voteTotal - 1 });
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="posts">
        {posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={post.acf.image.url} />
              </div>
              <div className="card-container">
                <div className="card-content">
                  <h2>{post.title.rendered}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered
                    }}
                  />
                </div>
                <div className="card-functions">
                  <div className="voting">
                    <button className="voting-arrow" onClick={() => this.handleUpVote()}>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.171 512.171"
                      >
                        <g>
                          <g>
                            <path d="M476.723,216.64L263.305,3.115C261.299,1.109,258.59,0,255.753,0c-2.837,0-5.547,1.131-7.552,3.136L35.422,216.64
      c-3.051,3.051-3.947,7.637-2.304,11.627c1.664,3.989,5.547,6.571,9.856,6.571h117.333v266.667c0,5.888,4.779,10.667,10.667,10.667
      h170.667c5.888,0,10.667-4.779,10.667-10.667V234.837h116.885c4.309,0,8.192-2.603,9.856-6.592
      C480.713,224.256,479.774,219.691,476.723,216.64z" />
                          </g>
                        </g>
                      </svg>
                    </button>

                    <span>{this.state.voteTotal}</span>

                    <button
                      className="voting-arrow"
                      onClick={() => this.handleDownVote()}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.171 512.171"
                      >
                        <g>
                          <g>
                            <path d="M35.4,295.5l213.4,213.5c2,2,4.7,3.1,7.6,3.1c2.8,0,5.5-1.1,7.6-3.1l212.8-213.5c3.1-3.1,3.9-7.6,2.3-11.6
        c-1.7-4-5.5-6.6-9.9-6.6H351.9V10.7c0-5.9-4.8-10.7-10.7-10.7H170.5c-5.9,0-10.7,4.8-10.7,10.7v266.7H43c-4.3,0-8.2,2.6-9.9,6.6
        C31.5,287.9,32.4,292.5,35.4,295.5z" />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <Link
                    as={`/post/${post.slug}`}
                    href={`/post?slug=${post.slug}&apiRoute=post`}
                  >
                    <a className="article-link button button-primary">
                      View Full Article
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
