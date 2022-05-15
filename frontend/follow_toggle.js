const APIUtil = require("./api_util");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
    
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    const followToggle = this;
    e.preventDefault();

    if (this.followState === 'followed') {
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    } else if (this.followState === 'unfollowed') {
      APIUtil.followUser(this.userId).then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
    };
  }

  render() {
    let text = this.followState === 'followed' ? 'Unfollow!' : 'Follow!';
    this.$el.html(text);
  }

  toggleFollow() {
    this.followState = this.followState === 'followed' ? 'unfollowed' : 'followed';
  }
};

module.exports = FollowToggle;