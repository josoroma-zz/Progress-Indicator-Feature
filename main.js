$(function() {
  $('.progress-bar').each(function() {
    var bar_value = $(this).attr('aria-valuenow') + '%';
    $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
  });
});
