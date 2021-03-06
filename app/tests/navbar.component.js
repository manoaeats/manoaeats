import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to List All Vendor page. */
  async gotoListAllVendorPage(testController) {
    await testController.click('#navbar-all-vendors');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to Today Top Pick page. */
  async gotoTodayTopPickPage(testController) {
    await testController.click('#navbar-today-top-pick');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to List Vendor Admin page. */
  async gotoListVendorAdminPage(testController) {
    await testController.click('#navbar-admin');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to List Vendor page. */
  async gotoListVendorPage(testController) {
    await testController.click('#navbar-my-vendor');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to Add Vendor page. */
  async gotoAddVendorPage(testController) {
    await testController.click('#navbar-admin-add-vendor');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to Foods Available page. */
  async gotoFoodsAvailablePage(testController) {
    await testController.click('#navbar-foods-available');
    // await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to Add Food page. */
  async gotoAddFoodPage(testController) {
    await testController.click('#navbar-admin-add-food');
    // await testController.click('#login-dropdown-sign-up');
  }
}

export const navBar = new NavBar();
