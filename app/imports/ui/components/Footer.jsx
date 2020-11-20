import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'white' };
    return (
          <footer>
            <Menu borderless className="footerMenu">
              <Container>
                <Menu.Item fitted position="centered"><Icon name="facebook f"/></Menu.Item>
                <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
                <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
              </Container>
            </Menu>
            <div style={divStyle} className="ui center aligned container">
              Email: manoaeats@hawaii.edu <br/>
              Phone: (808) 123-4567<br/>
            </div>
          </footer>
    );
  }
}

export default Footer;
