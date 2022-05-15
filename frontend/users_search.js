const APIUtil = require("./api_util");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users');

    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {

    APIUtil.searchUsers(this.$input.val())
      .then(users => this.render(users));
  }

  render(users) {
    console.log(users)
  }
};


module.exports = UsersSearch;