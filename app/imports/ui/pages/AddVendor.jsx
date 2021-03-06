import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Vendors } from '../../api/vendor/Vendor';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  cuisine: String,
  location: String,
  image: String,
  website: String,
  price: {
    type: String,
    allowedValues: ['$', '$$', '$$$'],
    defaultValue: '$',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVendor extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, cuisine, location, image, website, price } = data;
    const owner = Meteor.user().username;
    Vendors.collection.insert({ name, cuisine, location, image, website, price, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Vendor added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid id='addvendor-page' container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Add Vendor</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField id='add-vendor-form-name' name='name'/>
                <TextField id='add-vendor-form-cuisine' name='cuisine'/>
                <TextField id='add-vendor-form-location' name='location'/>
                <TextField id='add-vendor-form-image' name='image'/>
                <TextField id='add-vendor-form-website' name='website'/>
                <SelectField id='add-vendor-form-price' name='price'/>
                <SubmitField id='add-vendor-form-submit' value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVendor;
