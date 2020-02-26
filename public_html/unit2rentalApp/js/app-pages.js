/*
 * Pages/views need variables to reference the component
 * but are otherwise treated the same as components.
 * Again... think components, not templates/views
*/

const Home = Vue.component('Home', {
    props: {
        authUser: {required: true},
    },


    data() {
        return {
            shoppingList: [
                // 10-12 months preloaded checklist
                {name: 'Youre engaged- Take time to celebrate!', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Pick a wedding date!', done: false, category: 'TenMonths', bouquet: '5'},
                {
                    name: 'Make it official! Sign your venue contract!',
                    done: false,
                    category: 'TenMonths',
                    bouquet: '100'
                },
                {name: 'Follow Terrace 167 on Pinterest', done: false, category: 'TenMonths', bouquet: '50'},
                {name: 'Follow Terrace 167 on Facebook', done: false, category: 'TenMonths', bouquet: '50'},
                {name: 'Follow Terrace 167 on Instagram', done: false, category: 'TenMonths', bouquet: '50'},
                {name: 'Create preliminary guest list', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Whos by your side? Choose Wedding Party!', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Set ceremony times at Terrace 167', done: false, category: 'TenMonths', bouquet: '200'},
                {name: 'Make down payment on venue rental', done: false, category: 'TenMonths', bouquet: '100'},
                {name: 'Create preliminary guest list', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Set and keep a budget', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Meet with Photographers', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Meet with Florists', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Meet with Bakeries for that wedding cake!', done: false, category: 'TenMonths', bouquet: '5'},
                {name: 'Book engagement shoot at Terrace 167', done: false, category: 'TenMonths', bouquet: '150'},


                // 6-9 months preloaded checklist
                {name: 'Visit a Terrace 167 Open House', done: false, category: 'SixMonths', bouquet: '75'},
                {name: 'Create gift registries', done: false, category: 'SixMonths', bouquet: '5'},
                {name: 'Book tastings with caterers (yum!)', done: false, category: 'SixMonths', bouquet: '20'},
                {name: 'Shop for dresses! (yours + bridesmaids)', done: false, category: 'SixMonths', bouquet: '5'},
                {name: 'Book room blocks with preferred hotels', done: false, category: 'SixMonths', bouquet: '200'},
                {name: 'Plan floral for tables, bouquets, etc..', done: false, category: 'SixMonths', bouquet: '10'},
                {name: 'Book your DJ!', done: false, category: 'SixMonths', bouquet: '40'},
                {name: 'Book your caterer!', done: false, category: 'SixMonths', bouquet: '40'},
                {name: 'Choose your wedding cake!', done: false, category: 'SixMonths', bouquet: '40'},
                {name: 'Hire wedding photographer!', done: false, category: 'SixMonths', bouquet: '40'},
                {name: 'Hire your florist!', done: false, category: 'SixMonths', bouquet: '40'},
                {name: 'Decide on ceremony/reception decorations', done: false, category: 'SixMonths', bouquet: '5'},


                // 3-5 months preloaded checklist
                {name: 'Order wedding favors for guests', done: false, category: 'ThreeMonths', bouquet: '5'},
                {name: 'Shop/reserve mens formalwear', done: false, category: 'ThreeMonths', bouquet: '5'},
                {
                    name: 'Get guests addresses for invites/thank yous',
                    done: false,
                    category: 'ThreeMonths',
                    bouquet: '5'
                },
                {name: 'Makeup & Hair trials!', done: false, category: 'ThreeMonths', bouquet: '10'},
                {name: 'Purchase wedding bands/rings', done: false, category: 'ThreeMonths', bouquet: '5'},
                {
                    name: 'Finalize honeymoon plans! (you guys deserve it!)', done: false, category: 'ThreeMonths',
                    bouquet: '5'
                },
                {
                    name: 'Create playlist for ceremony, dinner, dancing etc..', done: false, category: 'ThreeMonths',
                    bouquet: '5'
                },
                {name: 'Time to send Save the Dates!', done: false, category: 'ThreeMonths', bouquet: '5'},
                {name: 'Who is giving a toast? Make a list!', done: false, category: 'ThreeMonths', bouquet: '5'},
                {name: 'Say YES to the dress!', done: false, category: 'SixMonths', bouquet: '5'},


                // 6-8 weeks preloaded checklist
                {name: 'Mail out invitations', done: false, category: 'SixWeeks', bouquet: '10'},
                {name: 'Terrace 167 2 Month Meeting', done: false, category: 'SixWeeks', bouquet: '100'},
                {name: 'Confirm dates with vendors', done: false, category: 'SixWeeks', bouquet: '40'},
                {name: 'Research marriage license requirements', done: false, category: 'SixWeeks', bouquet: '5'},
                {name: 'Begin your wedding dress fittings', done: false, category: 'SixWeeks', bouquet: '5'},
                {name: 'Write your wedding vows', done: false, category: 'SixWeeks', bouquet: '5'},
                {name: 'Confirm shotlist with photographer', done: false, category: 'SixWeeks', bouquet: '10'},
                {name: 'Buy gift for wedding party', done: false, category: 'SixWeeks', bouquet: '5'},
                {name: 'Buy wedding gift for your groom!', done: false, category: 'SixWeeks', bouquet: '5'},
                {name: 'Hunt down who hasnt RSVPd!', done: false, category: 'SixWeeks', bouquet: '10'},
                {name: 'Organize traditions/games', done: false, category: 'SixWeeks', bouquet: '5'},


                // 3-5 weeks preloaded checklist
                {name: 'Give Terrace 167 Ceterer info', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Give Terrace 167 DJ Info', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Set time for venue entry', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Give Terrace 167 Photographer Info', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Give Terrace 167 final guest count', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Set Wedding Day Timeline!', done: false, category: 'ThreeWeeks', bouquet: '20'},
                {name: 'Book rehearsal space', done: false, category: 'ThreeWeeks', bouquet: '5'},
                {name: 'Send Rehearsal Invites!', done: false, category: 'ThreeWeeks', bouquet: '5'},
                {name: 'Set Wedding Day Timeline!', done: false, category: 'ThreeWeeks', bouquet: '5'},
                {name: 'Final dress fittings!', done: false, category: 'ThreeWeeks', bouquet: '5'},

                {name: 'Copper Bar Package', done: false, category: 'ThreeWeeks', bouquet: '50', pick1: false},
                {name: 'Silver Bar Package', done: false, category: 'ThreeWeeks', bouquet: '60', pick1: false},
                {name: 'Gold Bar Package', done: false, category: 'ThreeWeeks', bouquet: '100', pick1: false},
                {name: 'Platinum Bar Package', done: false, category: 'ThreeWeeks', bouquet: '200', pick1: false},
                {name: 'Diamond Bar Package', done: false, category: 'ThreeWeeks', bouquet: '300', pick1: false},


                {name: 'Bronze Shuttle Package', done: false, category: 'ThreeWeeks', bouquet: '100'},
                {name: 'Silver Shuttle Package', done: false, category: 'ThreeWeeks', bouquet: '200'},
                {name: 'Gold Shuttle Package', done: false, category: 'ThreeWeeks', bouquet: '300'},


                // 1-2 weeks preloaded checklist
                {name: 'Terrace 167 Two Weeks meeting', done: false, category: 'TwoWeeks', bouquet: '75'},
                {name: 'Pick up your wedding dress. Swoon!', done: false, category: 'TwoWeeks', bouquet: '10'},
                {name: 'Finalize timeline with family/wedding party', done: false, category: 'TwoWeeks', bouquet: '10'},
                {name: 'Keep an eye on the weather', done: false, category: 'TwoWeeks', bouquet: '5'},
                {name: 'Pamper yourself- facial, mani, pedi!', done: false, category: 'TwoWeeks', bouquet: '10'},
                {name: 'Put together bag of bridal essentials!', done: false, category: 'TwoWeeks', bouquet: '5'},
                {
                    name: 'Most importantly- keep relaxed and enjoy this time!',
                    done: false,
                    category: 'TwoWeeks',
                    bouquet: '10'
                },

            ]
        }

    },

    computed: {
        tenmonthsList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'TenMonths';

            });
        },
        tenMonthsRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'TenMonths') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        tenMonthsCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'TenMonths') {
                    total ++;
                }
            }
            return total;
        },
        sixmonthsList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'SixMonths';
            });
        },
        sixMonthsRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'SixMonths') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        sixMonthsCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'SixMonths') {
                    total ++;
                }
            }
            return total;
        },
        threemonthsList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'ThreeMonths';
            });
        },
        threeMonthsRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'ThreeMonths') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        threeMonthsCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'ThreeMonths') {
                    total ++;
                }
            }
            return total;
        },
        sixweeksList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'SixWeeks';
            });
        },
        sixWeeksRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'SixWeeks') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        sixWeeksCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'SixWeeks') {
                    total ++;
                }
            }
            return total;
        },
        threeweeksList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'ThreeWeeks';
            });
        },
        threeWeeksRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'ThreeWeeks') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        threeWeeksCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'ThreeWeeks') {
                    total ++;
                }
            }
            return total;
        },
        twoweeksList: function () {
            return this.shoppingList.filter(function (item) {
                return !item.done && item.category === 'TwoWeeks';
            });
        },
        twoWeeksRemaining: function () {
            let total = 0;
            let completed = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'TwoWeeks') {
                    if(this.shoppingList[i].done){
                        completed++;
                    }
                    total++;
                }
            }
            const remaining = total - completed;
            return remaining;
        },
        twoWeeksCount: function () {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].category === 'TwoWeeks') {
                    total ++;
                }
            }
            return total;
        },
        doneList: function () {
            return this.shoppingList.filter(function (item) {
                return item.done;
            });
        },
        // totalBoquets: function () {
        //     this.shoppingList.filter(function (item) {
        //         var total = 0;
        //         total = total + item.bouquet;
        //         return total;
        //     });
        // }

        totalBoquets: function () {
            let total = 0;
            itemBoquets = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                if (this.shoppingList[i].done) {
                    itemBoquets = parseInt(this.shoppingList[i].bouquet);
                    total += itemBoquets;
                    // if (this.shoppingList[i].name === 'Copper Bar Package' && this.shoppinList[i].pick1 == false){
                    //     this.shoppingList[i].pick1 = true;
                    //     //this.shoppingList[i+1].done = false;
                    //     this.shoppingList[i+1].pick1 = false;
                    //     //this.shoppingList[i+2].done = false;
                    //     this.shoppingList[i+2].pick1 = false;
                    //     //this.shoppingList[i+3].done = false;
                    //     this.shoppingList[i+3].pick1 = false;
                    //     //this.shoppingList[i+4].done = false;
                    //     this.shoppingList[i+4].pick1 = false;
                    // }else if(this.shoppingList[i].name === 'Silver Bar Package'&& this.shoppinList[i].pick1 == false){
                    //     this.shoppingList[i].pick1 = true;
                    //
                    //     //this.shoppingList[i-1].done = false;
                    //     this.shoppingList[i-1].pick1 = false;
                    //     //this.shoppingList[i+1].done = false;
                    //     this.shoppingList[i+1].pick1 = false;
                    //     //this.shoppingList[i+2].done = false;
                    //     this.shoppingList[i+2].pick1 = false;
                    //    // this.shoppingList[i+3].done = false;
                    //     this.shoppingList[i+3].pick1 = false;
                    // }else if(this.shoppingList[i].name === 'Gold Bar Package'&& this.shoppinList[i].pick1 == false){
                    //     this.shoppingList[i].pick1 = true;
                    //
                    //     //this.shoppingList[i-2].done = false;
                    //     this.shoppingList[i-2].pick1 = false;
                    //     //this.shoppingList[i-1].done = false;
                    //     this.shoppingList[i-1].pick1 = false;
                    //     //this.shoppingList[i+1].done = false;
                    //     this.shoppingList[i+1].pick1 = false;
                    //     //this.shoppingList[i+2].done = false;
                    //     this.shoppingList[i+2].pick1 = false;
                    // }else if(this.shoppingList[i].name === 'Platinum Bar Package'&& this.shoppinList[i].pick1 == false){
                    //     this.shoppingList[i].pick1 = true;
                    //
                    //     this.shoppingList[i-3].done = false;
                    //     this.shoppingList[i-3].pick1 = false;
                    //     this.shoppingList[i-2].done = false;
                    //     this.shoppingList[i-2].pick1 = false;
                    //     this.shoppingList[i-1].done = false;
                    //     this.shoppingList[i-1].pick1 = false;
                    //     this.shoppingList[i+1].done = false;
                    //     this.shoppingList[i-1].pick1 = false;
                    // }else if(this.shoppingList[i].name === 'Diamond Bar Package'&& this.shoppinList[i].pick1 == false){
                    //     this.shoppingList[i].pick1 = true;
                    //
                    //     this.shoppingList[i-4].done = false;
                    //     this.shoppingList[i-4].pick1 = false;
                    //     this.shoppingList[i-3].done = false;
                    //     this.shoppingList[i-3].pick1 = false;
                    //     this.shoppingList[i-2].done = false;
                    //     this.shoppingList[i-2].pick1 = false;
                    //     this.shoppingList[i-1].done = false;
                    //     this.shoppingList[i-1].pick1 = false;
                    // }
                    // if(this.shoppingList[i].pick1 == true){
                    //     itemBoquets = parseInt(this.shoppingList[i].bouquet);
                    //     total += itemBoquets;
                    // }

                }
            }
            return total;
        }
    },


    methods: {
        addItem: function () {
            this.shoppingList.push(this.newItem);

            this.newItem = {
                name: '',
                category: ''
            }

            $('#addItemModal').modal('hide');
        },

        removeItem(item) {
            this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
        },


    },

    template: `
        <div class="appPage">
        <br><br>
            <div class="row">
        <div class="col-1"></div>
        <div class="col-6">
            <h2>Your Wedding Checklist</h2>
            <p>Welcome to the Terrace 167 Rental App! This isn't your average app or wedding checklist - here you can catch bouquets one last time!</p>
            <p>Complete items on the checklist in the timeline given and collect(catch) the bouquet value of them. Some items are worth more 
            than others! Once you've caught enough bouquets you can redeem them for rewards below!</p>
           <h5>Stay on track with your wedding planning - <br>
           catch bouquets, redeem for rewards, celebrate! </h5>
           </div>
           <div class="col-5"><img src="https://images.squarespace-cdn.com/content/v1/5c7dad75b10f25bdb570b9e6/1560531676551-HQFJWAABUXRVPHLF2601/ke17ZwdGBToddI8pDm48kGXoD000J7kx3NE7W-LXpdwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSHIBb6yNmvYkAyvF3loIw6LWPhmq3jJqr-f9nvyP7bW--NA7--1aw0mnW_uWXk87/frontbardone.jpg?format=1000w" width="450" height="300" alt=""> </div>
            
        </div>
        
        <h3>Total Bouquets {{totalBoquets}} 💐 </h3><br>
        
<!--      <v-card class="progress">-->
<!--         <v-card class="progress-bar" role="progressbar" v-bind:style="{width: 75%}" aria-valuenow="25" -->
<!--        aria-valuemin="0" aria-valuemax="100"></v-card>-->
<!--        </v-card>-->

<br>

<!-- <leaderboard :auth-user="authUser"></leaderboard>-->

<!--<div id="timer" class="timer">-->
<!--&lt;!&ndash;  Timer Component  &ndash;&gt;-->
<!--  <Timer -->
<!--         starttime="Nov 5, 2018 15:37:25" -->
<!--         endtime="Nov 8, 2020 16:37:25" -->
<!--         trans='{  -->
<!--         "day":"Day",-->
<!--         "hours":"Hours",-->
<!--         "minutes":"Minutes",-->
<!--         "seconds":"Seconds",-->
<!--         "status": {-->
<!--            "expired":"Expired",-->
<!--            "running":"Running",-->
<!--            "upcoming":"Future"-->
<!--           }}'-->
<!--         ></Timer>-->
<!--&lt;!&ndash;  End! Timer Component  &ndash;&gt;-->
<!--</div>-->
 
        
        

        <!-- Checklist/ ACCORDION -->
        <div class="customCard justify-content-center">
            <div class="accordion" id="accordionExample">
            
            <!-- 10-12 Month Checklist -->
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                10 - 12 Months Out 
                               ({{tenMonthsRemaining}} / {{tenMonthsCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            <list name="TenMonths" :items="tenmonthsList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>
                
                <!-- 6-9 Month Checklist -->
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                6 - 9 Months Out 
                                ({{sixMonthsRemaining}} / {{sixMonthsCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <list name="SixMonths" :items="sixmonthsList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>
                
                
                <!-- 3 -5 Month Checklist -->
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3 - 5 Months Out
                                ({{threeMonthsRemaining}} / {{threeMonthsCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="row get-it-lists">
                                <list name="ThreeMonths" :items="threemonthsList" @remove-item="removeItem"></list>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <!-- 6-8 WEEK Checklist -->
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="true" aria-controls="collapseFour">
                                6 - 8 Weeks Out
                                ({{sixMonthsRemaining}} / {{sixMonthsCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"data-parent="#accordionExample">
                        <div class="card-body">
                            <list name="SixWeeks" :items="sixweeksList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>
                
                
                <!-- 3 - 5 WEEK Checklist -->
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="true" aria-controls="collapseFive">
                                3 - 5 Weeks Out
                                ({{threeWeeksRemaining}} / {{threeWeeksCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            <list name="ThreeWeeks" :items="threeweeksList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>
                
                
                <!-- 1-2 WEEK Checklist -->
                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="true" aria-controls="collapseSix">
                                1 - 2 Weeks Out
                                ({{twoWeeksRemaining}} / {{twoWeeksCount}} completed)
                            </button>
                        </h2>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            <list name="TwoWeeks" :items="twoweeksList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="card">
                    <div class="card-header" id="headingSeven">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                                    data-target="#collapseSeven"
                                    aria-expanded="true" aria-controls="collapseSeven">
                                Completed
                            </button>
                        </h2>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            <!-- Completed -->
                            <list name="Done" :items="doneList" @remove-item="removeItem"></list>
                        </div>
                    </div>
                </div>

            </div>
        </div>   
        </div>  
        </div>
    `,
});

const Profile = Vue.component('Profile', {
    props: {
        authUser: {required: true},
    },

    computed: {
        loggedIn() {
            return (this.authUser && this.authUser.uid);
        },
    },

    methods: {},

    template: `
        <div class="appPage">
            <h3>Your Profile</h3>

        <div class="pageContent">
            <p>This Terrace 167 app will guide you along the way! Check your items off one by one to ease the
                stress and keep track of every important detail! This Terrace 167 app will guide you along the way!
                Check your items off one by one to ease the
                stress and keep track of every important detail! </p>
               
                <leaderboard :auth-user="authUser"></leaderboard>
                
                <p><h4>Contacts</h4>
                Terrace 167</h5><br>
                Venue Info<br>
                📞 262-262-2266 <br>
                💌 events@terrace167.com <br><br>
                
                Terrace 167</h5><br>
                Event Coordinator- Stephanie<br>
                📞 262-226-6622 <br>
                💌 stephanie@terrace167.com <br><br>
                
                
                
         <form>
       <div class="row">
       <div class="col-1"></div>
       <div class="col-5">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>
        </div>
        </div>
    `,
});

const Vendors = Vue.component('Vendors', {
    props: {
        authUser: {required: true},
    },

    computed: {
        loggedIn() {
            return (this.authUser && this.authUser.uid);
        },
    },

    template: `
        <div id="app" class="container-fluid">
        <h3>Caterers</h3>

        <div class="appPage">
            <p>Our goal is to ensure that your wedding exceeds your expectations and creates memories that last a
                lifetime. Terrace 167 has partnered with a top-notch group of experienced and dedicated Caterers in
                which clients must choose from. </p>
        </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Saz's Catering </h4>
                            <p class="card-text">Saz's Catering is a Milwaukee favorite offering many different styles
                                of serving and cusine </p>
                            <a href="https://sazs.com/catering/" class="card-link">Read More</a><br>
                            <input type="radio" aria-label="pick" name="caterer"> <label>Choose Caterer</label>
                        </div>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Bubb’s Texas BBQ</h4>
                            <p class="card-text">Ranging from sit-down to buffet they have a wide-variety for every
                                occassion!</p>
                            <a href="http://www.bubbs.com/" class="card-link">Read More</a><br>
                            <input type="radio" aria-label="pick" name="caterer"> <label>Choose Caterer</label>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Catering Craftmen</h4>
                            <p class="card-text">Whatever the occasion, we want to make your event as memorable as you
                                have envisioned it to be.</p>
                            <a href="http://cateringcraftsmen.com/" class="card-link">Read More</a><br>
                            <input type="radio" aria-label="pick" name="caterer"> <label>Choose Caterer</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Prime Minister</h4>
                            <p class="card-text">From our succulent steaks to our fresh, green salads and our
                                mouth-watering desserts.</p>
                            <a href="http://www.pmcatering.com/" class="card-link">Read More</a><br>
                            <input type="radio" aria-label="pick" name="caterer"> <label>Choose Caterer</label>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    `,

});

const Rewards = Vue.component('Rewards', {
    props: {
        authUser: {required: true},
        // totalBoquets: {type: Number, default: '0'},
        bouquets: bouquet = "totalBouquets",
    },

    template: `
        <div class="appPage">
        <br><br>
        <div class="row">
        <div class="col-1"></div>
        <div class="col-6">
            <h2>Your Rewards</h2>
            <p>Do you have your eye on a specific Terrace 167 rental item?
            Complimentary mimosas the morning of your wedding?
            Even though you won't be catching anymore bouquets at weddings - you still can with Terrace 167!</p>
            <p>Complete items on the checklist in the timeline given and collect(catch) the bouquet value of them. Some items are worth more 
            than others! Once you've caught enough bouquets you can redeem them for rewards below!
           Stay on track with your wedding planning, catch bouquets, redeem, get rewards, celebrate! </p>
           </div>
           <div class="col-5"><img src="https://images.squarespace-cdn.com/content/v1/5c7dad75b10f25bdb570b9e6/1552427749817-8RCL8Y7ABPXRR0WTR7PN/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_4942RachelRicklefsPhotography.jpg?format=750w" width="400" height="300" alt=""> </div>
            </div>
            
            <p> {{totalBouquets}}</p>
           
           <hr>
          
          <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/5c7dad75b10f25bdb570b9e6/1560538403882-C46TDWVN9HP3ZZ4J4X3P/ke17ZwdGBToddI8pDm48kFM992AsNdCk8v2MxIJ5cU1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyRAdtysO2ewlvOD4d6S0-FHXHIEuxUu4sBhnxV072gFHhZKiVhelC4dnEzwEPVkBs/ChristaCdesign+Photography+%26+Graphic+Design.jpg?format=1000w" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Free Tickets to <br>Venue Event</h5>
    <p class="card-text">250 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
           <div class="col-1"></div>
           <div class="col-3">
          <div class="card" style="width: 18rem;">
<img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnGC7LEBtPt0r7EHY1zStZs6sZTf1C6Ui63sW0NaiOHYfrNOv&s"  ><div class="card-body">
    <h5 class="card-title">Ceremony Lanters</h5>
    <p class="card-text">300 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
         
<div class="col-sm-1"></div>
<div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Smores Bar</h5>
    <p class="card-text">400 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
<div class="col-sm-1"></div>

</div>
          
       <hr>
          
          <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Dessert Fondue Bar</h5>
    <p class="card-text">600 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
           <div class="col-1"></div>
          <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Seating Chart</h5>
    <p class="card-text">500 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
<div class="col-sm-1"></div>
 <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://cdn.vox-cdn.com/thumbor/C1htV8l1pF7Hz65LyZOY0LS9cTc=/0x264:2000x1862/1200x900/filters:focal(843x840:1163x1160)/cdn.vox-cdn.com/uploads/chorus_image/image/65698698/shutterstock_786731671.0.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Wedding Day Mimosas</h5>
    <p class="card-text">400 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
<div class="col-sm-1"></div>

</div>


 <hr>
          
          <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Head Table Sign</h5>
    <p class="card-text">600 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
           <div class="col-1"></div>
          <div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://i.ebayimg.com/thumbs/images/m/m89JRMsF03wsJFtyKUEn8AA/s-l225.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Small Easel</h5>
    <p class="card-text">400 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
<div class="col-sm-1"></div>
<div class="col-3">
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-709207993-1528489743.jpg?crop=1xw:0.84375xh;center,top&resize=480:*" alt="Card image cap">  <div class="card-body">
    <h5 class="card-title">Signature Cocktail</h5>
    <p class="card-text">800 Bouquets 💐</p>
    <a href="#" class="btn btn-primary">Redeem Reward</a>
  </div>
</div>
</div>
<div class="col-sm-1"></div>

</div>
          
          
           </div>
        </div>
    `,

});
