import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");
import frameModule = require("tns-core-modules/ui/frame");

export class DrawerOverNavigationModel {
    get exampleText() {
        return "RadSideDrawer can be shown over the navigation bar/action bar by using DrawerPage instead of Page." +
            " DrawerPage has a sideDrawer property which accepts RadSideDrawer with just drawerContent set. The main content is the child of the page.";
    }

    public onOpenDrawerTap() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>( frameModule.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    }

    public closeDrawer() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>( frameModule.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }

    public goToSecondPage() {
        var navigationEntry = {
            moduleName: "./sidedrawer/over-navigation/second-page/second-drawer-over-navigation",
            context: this,
            animated: true
        };
        
        frameModule.topmost().navigate(navigationEntry);
    }
}
