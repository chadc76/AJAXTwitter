class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.ul = this.$el.find('.users');
  }
};


module.exports = UsersSearch;