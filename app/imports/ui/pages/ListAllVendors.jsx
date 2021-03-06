import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import AllVendorItem from '../components/AllVendorItem';
import { Comments } from '../../api/comment/Comment';
// import VendorItemAdmin from '../components/VendorItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAllVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div id='listallvendor-page' className="vendor-list"><Container>
          <Header as="h2" textAlign="center" inverted>All Vendors</Header>
          <Card.Group>
            {this.props.vendors.map((vendor) => <AllVendorItem key={vendor._id} vendor={vendor} comments={this.props.comments.filter(comment => (comment.vendorId === vendor._id))}/>)}
          </Card.Group>
        </Container></div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAllVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.allPublicationName);
  const subscription2 = Meteor.subscribe(Comments.allPublicationName);

  return {
    vendors: Vendors.collection.find({}).fetch(),
    comments: Comments.collection.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(ListAllVendors);
