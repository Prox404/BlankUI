import config from '~/configs';

// Layouts
// import NoLayout from '~/layouts/HeaderOnly';

// Pages
import Home from '~/pages/Home';
import Cards from '~/pages/Cards';
import Form from '~/pages/Form';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.card, component: Cards },
    { path: config.routes.form, component: Form },

    // { path: config.routes.about, component: About, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };