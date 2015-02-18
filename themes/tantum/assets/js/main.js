(function($) {
  window.filters = {};

  $(function() {
    var body = $('body');

    if (body.hasClass('post-template') || body.hasClass('page-template')) {
      var detail = $('.tantum-post-detail');
      var image = detail.find('.post-content').find('> p').first().find('img').first();
      var title = detail.find('.post-title').text();

      var header = $('#tantum-header');

      if (image && image.length > 0) {
        var paragraph = image.parents('p').first();

        if (paragraph.text() == '') {
          paragraph.addClass('hidden');
        } else {
          image.addClass('hidden');
        }

        header.css({
          backgroundImage: 'url(\'' + image.attr('src') + '\')'
        });
      }

      header.find('h1').text(title);
      header.find('h3').hide();
    } else if (body.hasClass('home-template') || body.hasClass('archive-template') || body.hasClass('tag-template')) {
      $('.tantum-post-preview').find('time').each(function() {
        var $this = $(this);
        $this.text(moment($this.text()).fromNow());
      });
    }

    if ($.fn.fitVids) {
      $("#tantum-content").fitVids();
    }

    $('#tantum-header h3').click(playStream);
  });

  function playStream() {
    console.log('happy days');
    AV.Player.device
  }

})(jQuery);
