// >> dataform-getting-started
import viewModel = require("./../view-models/person-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonViewModel();
}
// << dataform-getting-started