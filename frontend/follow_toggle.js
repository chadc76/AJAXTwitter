class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
    
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    let requestType = this.followState === 'followed' ? "DELETE" : "POST";

    $.ajax({
      type: requestType,
      url: `${this.userId}/follow`,
      dataType: "json",
      data: this.$el.serialize(),
      success: function(r) {
        this.toggleFollow();
        this.render();
      }.bind(this)
    })
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