import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState'
import WithLoading from '../../components/WithLoading';
import Table from '../../sub-components/Table';
import axios from 'axios';
import FormEvent from '../../sub-components/FormEvent';
import Search from '../../sub-components/Search';
import { func } from "prop-types";

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

  //Formulaire
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
    this.addArticle(articleForm)

  };

  //Requete API
  deleteArticle = article => {

    var index = this.state.articles.indexOf(article);
    this.state.articles.splice(index, 1);
    this.setState({
      articles: this.state.articles
    })

  }

  addArticle = article => {


    this.state.articles.push(article);

    const notification = {type: 'success', message: "Ajout d'un article"}
    this.setState({buttonLoading: true})

    var state = this;
    setTimeout(function(){
      state.state.notifications.push(notification)

      state.setState({
        articles: state.state.articles,
        id: "",
        title: "",
        body: "",
        userId: "",
        notifications: state.state.notifications,
        buttonLoading: false
      })

    }, 3000)


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

  getArticle = id => {
    axios(`${PATH_BASE}${PATH_SEARCH}/${id}`)
    .then(result => {
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

  // Filtre
  isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())

  onSearchChange = event => this.setState({
    searchTerm: event.target.value
  })

  render() {
    const { notifications, article, article_comments, articles,id,title,buttonLoading } = this.state
    const TableWithLoading = WithLoading(Table);

    // if (this.props.data.isconnect) {
    //   return null;
    // }

    if (!articles) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col">
            <Search
              className="inputSearch"
              value={this.state.searchTerm}
              onChange={this.onSearchChange}
            >
            Filtrer par titre
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
          </div>
          <div className="col">
            <div>
                { notifications.map( (notification)  =>
                  <div className="alert alert-success" role="alert">
                    {notification.message}
                  </div>
                ) }
            </div>
            <FormEvent
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              validateForm={!this.validateForm()}
              id={id}
              title={title}
              buttonLoading={buttonLoading}
            />
          </div>
        </div>
        <div className="row margin-top">
          <div className="col">
            {article.title &&
              <div className="jumbotron">
                <h2>{article.title}</h2>
                <div>{article.body}</div>
                <h3 className="text-left">Commentaires :</h3>
                  {article_comments &&
                    article_comments.slice(0, 10).map( comment =>
                      <div key={comment.id} className="card">
                        <div className="card-body">
                          <h5 className="card-title">Commentaire de {comment.name})</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
                          <div className="card-text">{comment.body}</div>
                        </div>
                      </div>
                    )
                  }
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}



export default Articles;
