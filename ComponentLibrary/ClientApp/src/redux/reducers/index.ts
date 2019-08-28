import { reduceLayout } from './layout';
import { reduceHome } from './home';
import { reduceProduct } from './product';

const rootReducer = {
    layout: reduceLayout,
    products: reduceHome,
    product: reduceProduct
};

export default rootReducer;