import catalog from './catalog.js';
import generateHeader from './generate-header.js';
import generateFooter from './generate-footer.js';
import generateCatalog from './generate-catalog.js';
import generateSubCatalog from './generate-subcatalog.js';
import { loadData } from './loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
catalog();
loadData();
