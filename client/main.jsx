import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Routes from '/imports/ui/routes.jsx';

Meteor.startup(() => {
  render(Routes(), document.getElementById('react-target'));
});
