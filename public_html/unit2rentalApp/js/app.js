Vue.use(Vuefire);

const router = new VueRouter({
    routes: [
        {path: '/', component: Home}, // default page
        // name is what outputs in URL
        {name: 'home', path: '/home', component: Home},
        {name: 'profile', path: '/profile', component: Profile},
        {name: 'vendors', path: '/vendors', component: Vendors},
        {name: 'rewards', path: '/rewards', component: Rewards},
    ],
});

var app = new Vue({
    el: '#app',
    router: router,
    data: {

        newItem: {
            name: '',
            category: ''
        },
        authUser: null,
    },

    methods: {},

    computed: {},

    created: function () {
        // took auth from text.html
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // var displayName = user.displayName;
                // var email = user.email;
                // var emailVerified = user.emailVerified;
                // var photoURL = user.photoURL;
                // var isAnonymous = user.isAnonymous;
                // var uid = user.uid;
                // var providerData = user.providerData;

                console.log('Signed in as: ', user);

                // added next line in class
                // app.authUser = new User(user);

                app.authUser = new User(user);

            } else {
                // User is signed out.
                console.log('Not signed in.');

                app.authUser = null;

            }
        });
    },


    mounted: function () {
        // if(localStorage.getItem('shoppingList')){
        //     this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        // }
    },

    watch: {
        // shoppingList: {
        //     handler: function(newList){
        //         localStorage.setItem('shoppingList', JSON.stringify(newList));
        //     },
        //     deep: true
        // }
    }
});