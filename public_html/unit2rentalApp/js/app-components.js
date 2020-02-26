Vue.component('list', {
    props: {
        name: {
            type: String,
            default: 'Terrace'
        },
        items: {
            type: Array,
            required: true
        }
    },

    methods: {},

    template: '<div class="card-body">\n' +
        '                <ul class="list-group list-group-flush">\n' +
        '                    <li v-for="(item, i) in items" class="list-group-item">\n' +
        '                        <div v-if="item.items" >{{item.name}}</div>' +
        '                        <div v-else class="custom-control custom-checkbox">\n' +
        '                            <input type="checkbox" :id="`${name}-${i}`" ' +
        '                                   v-model="item.done" class="custom-control-input">\n' +
        '                            <label :for="`${name}-${i}`" class="custom-control-label">{{item.name}}</label>\n' +
        '                            <br><p>{{item.bouquet}} bouquets 💐</p>\n' +
        '                        </div>' +
        '                       <list v-if="item.items" :items="item.items"></list>\n' +
        '                        <div class=" d-flex justify-content-between">\n' +
        '                        </div>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>',

    computed: {}
});


// Vue.component('modal', {
//
//     template: '<script type="text/x-template" id="modal-template">\n' +
//         '  <transition name="modal">\n' +
//         '    <div class="modal-mask">\n' +
//         '      <div class="modal-wrapper">\n' +
//         '        <div class="modal-container">\n' +
//         '\n' +
//         '          <div class="modal-header">\n' +
//         '            <slot name="header">\n' +
//         '              default header\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '\n' +
//         '          <div class="modal-body">\n' +
//         '            <slot name="body">\n' +
//         '              default body\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '\n' +
//         '          <div class="modal-footer">\n' +
//         '            <slot name="footer">\n' +
//         '              default footer\n' +
//         '              <button class="modal-default-button" @click="$emit(\'close\')">\n' +
//         '                OK\n' +
//         '              </button>\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '        </div>\n' +
//         '      </div>\n' +
//         '    </div>\n' +
//         '  </transition>\n' +
//         '</script>',
// });

Vue.component('navigation', {
    props: {
        authUser: {required: true},
    },

    methods: {
        login() {

            // google auth provider, facebook, twitter etc..
            let provider = new firebase.auth.GoogleAuthProvider();

            // TODO: login with google
            // in class we took 44-52 auth method from app-models
            // doing sign in with google
            firebase.auth()
            // .signInWithEmailAndPassword(email, password)
                .signInWithPopup(provider)
                .then(function (result) {
                    let token = result.credential.accessToken;
                })
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    console.log(error);
                    // document.getElementById('message').innerHTML =  'Error: ' + errorMessage;
                });
        },

        logout() {
            // TODO: logout
            firebase.auth().signOut();
        },
    },

    template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo" href="#">
   <img src="http://lzache.bitlampsites.com/js2/unit2rentalApp/images/transparentlogo2.png" width="290" height="85" alt="logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    
    </ul>
    <span class="navbar-text">
    <ul class="navbar-nav mr-auto">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/vendors">Vendors</router-link></li>
            <li><router-link to="/rewards">Rewards</router-link></li>
            <li><a href="#" @click.prevent="login">Login</a></li>
      </ul>
    </span>
  </div>
 
</nav>

    `,

});

Vue.component('authnav', {
    props: {
        authUser: {required: true},
    },

    methods: {
        login() {

            // google auth provider, facebook, twitter etc..
            let provider = new firebase.auth.GoogleAuthProvider();

            // TODO: login with google
            // in class we took 44-52 auth method from app-models
            // doing sign in with google
            firebase.auth()
            // .signInWithEmailAndPassword(email, password)
                .signInWithPopup(provider)
                .then(function (result) {
                    let token = result.credential.accessToken;
                })
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    console.log(error);
                    // document.getElementById('message').innerHTML =  'Error: ' + errorMessage;
                });
        },

        logout() {
            // TODO: logout
            firebase.auth().signOut();
        },
    },

    template: `
<div class="authNav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo" href="#">
   <img src="http://lzache.bitlampsites.com/js2/unit2rentalApp/images/transparentlogo2.png" width="290" height="85" alt="logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    </ul>
    <span class="navbar-text">
    <ul class="navbar-nav mr-auto">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/vendors">Vendors</router-link></li>
            <li><router-link to="/rewards">Rewards</router-link></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>

            <div>
            <b-img :src="authUser.photoURL" class="avatar"></b-img>
            </div>
      </ul>
    </span>
  </div>
</nav>
</div>
    `,

});


Vue.component('Timer',{
    props: ['starttime','endtime','trans'] ,
    data: function(){
        return{
            timer:"",
            wordString: {},
            start: "",
            end: "",
            interval: "",
            days:"",
            minutes:"",
            hours:"",
            seconds:"",
            statusText: "",

        };
    },
    created: function () {
        this.wordString = JSON.parse(this.trans);
    },
    mounted(){
        this.start = new Date(this.starttime).getTime();
        this.end = new Date(this.endtime).getTime();
        // Update the count down every 1 second
        this.timerCount(this.start,this.end);
        this.interval = setInterval(() => {
            this.timerCount(this.start,this.end);
        }, 1000);
    },
    methods: {
        timerCount: function(start,end){
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = start - now;
            var passTime =  end - now;

            if(distance < 0 && passTime < 0){
                this.message = this.wordString.expired;
                this.statusType = "expired";
                this.statusText = this.wordString.status.expired;
                clearInterval(this.interval);
                return;

            }else if(distance < 0 && passTime > 0){
                this.calcTime(passTime);
                this.message = this.wordString.running;
                this.statusType = "running";
                this.statusText = this.wordString.status.running;

            } else if( distance > 0 && passTime > 0 ){
                this.calcTime(distance);
                this.message = this.wordString.upcoming;
                this.statusType = "upcoming";
                this.statusText = this.wordString.status.upcoming;
            }
        },
        calcTime: function(dist){
            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        }

    },

    template: `
  	<div>
      <div v-show ="statusType !== 'expired'">
        <div class="day">
          <span class="number">{{ days }}</span>
          <div class="format">{{ wordString.day }}</div>
        </div>
        <div class="hour">
          <span class="number">{{ hours }}</span>
          <div class="format">{{ wordString.hours }}</div>
        </div>
        <div class="min">
          <span class="number">{{ minutes }}</span>
          <div class="format">{{ wordString.minutes }}</div>
        </div>
        <div class="sec">
          <span class="number">{{ seconds }}</span>
          <div class="format">{{ wordString.seconds }}</div>
        </div>
      </div>
      <div class="message">{{ message }}</div>
      <div class="status-tag" :class="statusType">{{ statusText }}</div>
    </div>
  `,
});

// new Vue({
//     el: "#timer",
// });

Vue.component('progress', {

    props: {
        authUser: {type: Object},
        totalbouquets: {totalBoquets(){

            }}
},

    methods: {
        progressBar: function(){
            return 75;
        }
    },

    template: ' '

});

// Vue.component('leaderboard', {
//     props: {
//         authUser: {type: Object},
//         items: {
//             type: Array,
//             required: true
//         }
//     },
//
//
//     data: function(){
//         return {
//
//         };
//     },
//
//     firestore: function(){
//         return {
//
//         };
//     },
//
//
//     template: `
//         <div>
//             <h3>Bouquets</h3>
//             <b-container v-if="board">
//                 <b-row v-for="item in board" :key="item.id" :class="{'text-success font-weight-bold': (authUser && authUser.uid == item.id)}">
//                     <p></p>
//                     <b-col>{{item.bouquet}</b-col>
//                 </b-row>
//             </b-container>
//         </div>
//
//     `,
//
// });

