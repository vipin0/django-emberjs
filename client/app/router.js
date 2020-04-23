import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// Router.map(function() {
//   this.route('books');
//   this.route('book');
// });

Router.map(function() {
  this.route('books');
  this.route('book', { path: 'books/:book_id' });
  this.route('create-book');
});
