import generateHeader from './generate-header.js';
import generateFooter from './generate-footer.js';
import generateCatalog from './generate-catalog.js';
import generateGoodsPage from './generate-goods-page.js';
import { loadData } from './loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
loadData();
