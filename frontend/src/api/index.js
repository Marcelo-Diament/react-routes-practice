import articlesPlaceholderJson from './articles-placeholder.json'
import topicsPlaceholderJson from './topics-placeholder.json'
import {cleanString} from '../utils'

const placeholder = {
  articles: articlesPlaceholderJson,
  topics: topicsPlaceholderJson
}

const getArticles = () => placeholder.articles

const getArticlesById = id => placeholder.articles.filter(article => article.id === id)

const getArticleByName = name => placeholder.articles.filter(article => cleanString(article.title, false, false) === cleanString(name, false, false))

const getArticlesByCategoryId = categoryId => placeholder.articles.filter(article => article.categoryId === categoryId)

const getArticlesByCategoryName = categoryName => placeholder.articles.filter(article => cleanString(article.categoryName, false, false) === cleanString(categoryName, false, false))

const getTopics = () => placeholder.topics

const getTopicsById = id => placeholder.topics.filter(topic => topic.id === id)

const getTopicsByName = name => placeholder.topics.filter(topic => cleanString(topic.title, false, false) === cleanString(name, false, false))

export { placeholder, cleanString, getArticles, getArticlesById, getArticleByName, getArticlesByCategoryId, getArticlesByCategoryName, getTopics, getTopicsById, getTopicsByName }