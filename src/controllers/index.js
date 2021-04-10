import Home from './home.controllers';
import Posts from './posts.controllers';
import notFound from './404.controllers'

const pages = {
    home: Home,
    posts: Posts,
    notFound: notFound
}

export {pages};