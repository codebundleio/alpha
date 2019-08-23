// Import the main Sass file
import 'scss/base.scss';

$(() => {
  $(document).trigger('dom-update');
  console.log('Common bundle loaded.');
});
