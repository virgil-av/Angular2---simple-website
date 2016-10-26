"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map