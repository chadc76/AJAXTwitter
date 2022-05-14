const FollowToggle = require('./follow_toggle');

$(() => {
  $('button.follow-toggle').each((i, b) => new FollowToggle(b));
})