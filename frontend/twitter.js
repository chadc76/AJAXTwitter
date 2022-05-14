const FollowToggle = require('./follow_toggle');

$(() => {
  $('button.follow-toggle').forEach((i, b) => new FollowToggle(b));
})