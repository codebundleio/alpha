const $search_input = $(
  '<div class="Navigation-search"><input id="search-input" type="text" placeholder="Search..." data-clear="true"></div>'
);

function search(list, key) {
  let childTree, $li, i;
  const li = $(list).children('li');
  let match = false;

  for (i = 0; i < li.length; i++) {
    $li = $(li[i]);
    childTree = $(li[i]).children('ul');

    if (
      $li
        .parents('.Tree-collection')
        .find('> .Tree-collectionLabel')
        .text()
        .toUpperCase()
        .indexOf(key) !== -1 ||
      $li
        .text()
        .toUpperCase()
        .indexOf(key) !== -1 ||
      ($li.find('[data-tags]').length > 0 &&
        $li
          .find('[data-tags]')
          .attr('data-tags')
          .toUpperCase()
          .indexOf(key) !== -1)
    ) {
      match = true;
      $li.parents('.Tree-collection').removeClass('is-closed');
      $li.show();
      search(childTree, key);
    } else {
      match = false;
      $li.hide();
    }
  }
  return match;
}

$(document).on('keyup blur change', '#search-input', function () {
  const key = this.value.toUpperCase();
  $('.Navigation ul').each(function () {
    search(this, key);
  });
});

$(() => {
  $('.Navigation').prepend($search_input);
});
