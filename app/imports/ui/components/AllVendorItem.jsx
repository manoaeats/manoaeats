import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MenuItemList from './MenuItemList';
import AddComment from '/imports/ui/components/AddComment';
import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Image src={this.props.vendor.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header as='h2' textAlign='center'>{this.props.vendor.name}</Card.Header>
            <Card.Header>{this.props.vendor.price}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.vendor.cuisine}</span>
            </Card.Meta>
            <Card.Description>
              Location: {this.props.vendor.location}
            </Card.Description>
          </Card.Content>
          <Card.Header textAlign='center'>
            <a href={this.props.vendor.website} target="_blank" rel="noreferrer">{this.props.vendor.name} Details</a>
          </Card.Header>
          <Card.Content extra>
            {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
          </Card.Content>
          <Card.Content extra>
            <AddComment owner={this.props.vendor.owner} vendorId={this.props.vendor._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItem.propTypes = {
  vendor: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

MenuItemList.propTypes = {
  menu: PropTypes.object.isRequired,
  // comments: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorItem);
