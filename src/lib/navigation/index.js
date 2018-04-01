const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

// Routes
const route = {
  SIGNIN_SCREEN: {
    title: 'Acesso',
    route: { routeName: 'SignIn', key: 'SignIn' },
    iosIcon: '',
    mdIcon: '',
    screen: 'SignIn',
  },
  SIGNUP_SCREEN: {
    title: 'Cadastro',
    route: { routeName: 'SignUp', key: 'SignUp' },
    iosIcon: '',
    mdIcon: '',
    screen: 'SignUp',
  },
  MAIN_SCREEN: {
    title: 'Minhas Compras',
    route: { routeName: 'MainScreen', key: 'MainScreen' },
    iosIcon: 'ios-clipboard',
    mdIcon: 'md-clipboard',
    screen: 'Main',
  },
  PRODUCT_SCREEN: {
    title: 'Produtos',
    route: { routeName: 'ProductScreen', key: 'ProductScreen' },
    iosIcon: 'ios-barcode',
    mdIcon: 'md-barcode',
    screen: 'Product',
  },
  CATEGORY_SCREEN: {
    title: 'Categorias',
    route: { routeName: 'CategoryScreen', key: 'CategoryScreen' },
    iosIcon: 'ios-list',
    mdIcon: 'md-list',
    screen: 'Category',
  },
}


export { getCurrentRouteName, route }
