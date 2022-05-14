class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
  }

  render() {
    let text = this.followState === 'followed' ? 'Followed!' : 'Unfollowed!';
    this.$el.html(text);
  }
};

module.exports = FollowToggle;