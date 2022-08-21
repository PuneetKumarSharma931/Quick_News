import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 5,
    country: "in",
    category: "general"
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    upDateProgress: PropTypes.func,
    apiKey: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.props.category} - Quick News`;
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.props.upDateProgress(10);
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    );
    this.props.upDateProgress(30);
    const newsData = await data.json();
    this.props.upDateProgress(60);

    this.setState({
      articles: newsData.articles,
      loading: false,
      totalResults: newsData.totalResults
    });
    this.props.upDateProgress(100);
  }

  fetchMoreData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apikey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );

    const newsData = await data.json();

    this.setState({
      articles: this.state.articles.concat(newsData.articles),
      page: this.state.page + 1
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center" style={{marginTop: '100px'}}>{`Top Headlines for ${
          this.props.country === "in"
            ? "India"
            : this.props.country === "us"
            ? "United States"
            : this.props.country === "jp"
            ? "Japan"
            : "India"
        } in ${this.props.category} brought to you by Quick News`}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg"
                      }
                      url={element.url}
                      author={element.author}
                      published={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
