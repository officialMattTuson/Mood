
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/chat"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23575, hash: '5e6432af32f67050970ae5a90c3faad070b229e5c20565e98afa283ab13fd350', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17148, hash: '72dc8d27e88ddadb92ba55beebbd926ca3c56fd169d4e0df851a0de799ce0212', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 45793, hash: 'ac91cb3e3fe44c93f00c6a241ef4ae3dd8883939dc44b12a703ba7e80d2475c9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 23949, hash: '52fed9e05d23c5eb4593a0d60ee95c175f813216dbf5e2f11ccb6c443d46547a', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-B5FB2IRS.css': {size: 7038, hash: '5OYp8eOY5+E', text: () => import('./assets-chunks/styles-B5FB2IRS_css.mjs').then(m => m.default)}
  },
};
