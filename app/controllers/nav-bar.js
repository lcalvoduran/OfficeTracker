export default Ember.Controller.extend({
  actions: {
    toggleBody() {
      this.toggleProperty('isLogged', true);
    },
  },
});
