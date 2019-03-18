import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState'
import WithLoading from '../../components/WithLoading';
import Table from '../../sub-components/Table';
import axios from 'axios';
import FormEvent from '../../sub-components/FormEvent';
import Search from '../../sub-components/Search';

const PATH_BASE = 'https://jsonplaceholder.typicode.com';
const PATH_SEARCH = '/posts';

class Articles extends Component {

  constructor(props){
    super(props);
    this.state = DEFAULT_STATE
  };

  componentDidMount() {
    this.getArticles()
  }

  validateForm = () => {
    return this.state.title.length > 2
  }

  handleChange = article => {
    this.setState({
      [article.target.id]: article.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const articleForm = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId,
    }
    console.log(this.state.articles)
    this.state.articles.push(articleForm);
    console.log(this.state.articles)
    // this.addArticle(articleForm)
    this.setState({
      articles: this.state.articles,
      id: "",
      title: "",
      body: "",
      userId: "",
    })

  };

  deleteArticle = id => {
    console.log(`${PATH_BASE}${PATH_SEARCH}/${id}`);
    axios.delete(`${PATH_BASE}${PATH_SEARCH}/${id}`)
    .then(() => {

      this.getArticles()
    })
    .catch(error => this.setState({ error }))

  }

  addArticle = article => {

    axios(`${PATH_BASE}${PATH_SEARCH}`,article)
    .then(() => {
      this.getArticles()
    })
    .catch(error => this.setState({ error }))

  }

  getArticles = () => {
    axios(`${PATH_BASE}${PATH_SEARCH}`)
    .then(result => {
      this.setState({
        articles: result.data
      })
    })
    .catch(error => this.setState({ error }))
  }

  onSearchChange = event => this.setState({
    searchTerm: event.target.value
  })

  isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())

  getArticle = id => {
    axios(`${PATH_BASE}${PATH_SEARCH}/${id}`)
    .then(result => {
      console.log(result.data)
      this.getComments(id)
      this.setState({
        article: result.data
      })
    })
    .catch(error => this.setState({ error }))
  }

  getComments = id => {
    axios(`${PATH_BASE}${PATH_SEARCH}/${id}/comments`)
    .then(result => {
      this.setState({
        article_comments: result.data
      })
    })
    .catch(error => this.setState({ error }))
  }

  render() {
    const { article, article_comments, articles,id,title } = this.state
    const TableWithLoading = WithLoading(Table);

    if (!articles) {
      return null;
    }

    return (
      <div>
        <FormEvent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          validateForm={!this.validateForm()}
          id={id}
          title={title}
        />
        <Search
          className="inputSearch"
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
        >
        Filtrer
        </Search>
        <TableWithLoading
          articles={articles}
          nbrelement="10"
          pattern={this.state.searchTerm}
          isSearched={this.isSearched}
          isLoading ={this.state.isLoading}
          deleteArticle={this.deleteArticle}
          clickDetail={this.getArticle}
        />
      {article &&
        <div>
          <div>{article.title}</div>
          <div>{article.body}</div>
            {article_comments &&
              article_comments.slice(0, 10).map( comment =>
                <div>
                  <div>Commentaire ({comment.id})</div>
                    <div>{comment.name}</div>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>
              )
            }
        </div>
      }
      </div>
    );
  }
}



export default Articles;
