const APIUtil = require("./api_util");
const FollowToggle = require("./follow_toggle");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users');

    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {

    APIUtil.searchUsers(this.$input.val())
      .then(users => this.renderResults(users));
  }

  renderResults(users) {
    this.$ul.empty();
    users.forEach(user => {

      let $a = $(`<a></a>`);
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      let $followToggle = $('<button></button>');
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: user.followed ? 'followed' : 'unfollowed'
      });

      let $li = $('<li></li>')
      $li.append($a);
      $li.append($followToggle);
      this.$ul.append($li);
    })
  }
};


module.exports = UsersSearch;