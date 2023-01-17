import config from '~/configs';

// Layouts
// import NoLayout from '~/layouts/HeaderOnly';

// Pages
import Home from '~/pages/Home';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    // { path: config.routes.about, component: About, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };