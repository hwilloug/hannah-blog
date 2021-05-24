import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: `${process.env.VUE_APP_TITLE} | Home`,
      metaTags: [
        {
          name: 'description',
          content: 'The homepage of poppyland.dev'
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      title: `${process.env.VUE_APP_TITLE} | About`,
      metaTags: [
        {
          name: 'description',
          content: 'About poppyland.dev'
        }
      ]
    }
  },
  {
    path: "/404",
    name: "FileNotFound",
    component: () => import("@/views/FileNotFound.vue"),
    meta: {
      title: `${process.env.VUE_APP_TITLE} | 404 Not Found`,
      metaTags: [
        {
          name: 'description',
          content: '404 Page Not Found'
        }
      ]
    }
  },
  {
    path: "/articles/categories/:category",
    name: "BrowseCategory",
    component: () => import("@/views/Browse.vue"),
    props: true,
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'Browsing articles of poppyland.dev'
        }
      ]
    }
  },
  {
    path: "/articles",
    name: "Browse",
    component: () => import("@/views/Browse.vue"),
    meta: {
      title: `${process.env.VUE_APP_TITLE} | Browse`,
      metaTags: [
        {
          name: 'description',
          content: 'Browsing articles of poppyland.dev'
        }
      ]
    }
  },
  {
    path: "/articles/:articleId",
    name: "Article",
    component: () =>
      import("@/views/Article.vue"),
    props: true,
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'An article on poppyland.dev'
        }
      ]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Taken from https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
