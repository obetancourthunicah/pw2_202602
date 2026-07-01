import indexContext from './pages/index_page';

export default (page)=>{
    switch(page){
        case '/index.html':
            return indexContext;
        case '/productos.html':
            return {};
        default:
            return {};
    }
};