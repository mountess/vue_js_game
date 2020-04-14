new Vue({
    el: '#game',
    data: {
        message: 'Привет! Давай знакомится, как тебя зовут?',
        wellcome: true,
        userName: 'Mountess',
        userHelths: 0,
        monsterName: 'MONSTER',
        monsterHealth: 0,
        dead: true,
        historyItems: [],
    },
    methods: {
        start: function () {
            this.wellcome = false;
        },
        special: function () {
            let userPower = Math.round(Math.random() * 10) + 10;
            this.monsterHealth -= userPower
            this.historyItems.unshift({
                class: "bgBlue",
                from: this.userName,
                to: this.monsterName,
                method: "spacial attack",
                value: userPower
            })
            this.monsterAttack();

        },
        heal: function () {
            let userPower = Math.round(Math.random() * 10) + 5;
            this.userHelths += userPower
            this.historyItems.unshift({
                class: "bgBlue",
                from: this.userName,
                method: "heal",
                value: userPower
            })
            this.monsterAttack();
        },
        giveUp: function () {
            this.dead = true;
        },
        newGame: function () {
            this.dead = false;
            this.userHelths = 100;
            this.monsterHealth = 100;
            this.historyItems = []
        },
        atack: function () {
            let userPower = Math.round(Math.random() * 10);
            this.monsterHealth -= userPower
            this.historyItems.unshift({
                class: "bgBlue",
                from: this.userName,
                to: this.monsterName,
                method: "atack",
                value: userPower
            })
            this.monsterAttack();

        },
        monsterAttack: function () {
            let monsterPower = Math.round(Math.random() * 10);
            this.userHelths -= monsterPower
            this.historyItems.unshift({
                class: "bgRed",
                from: this.monsterName,
                to: this.userName,
                method: "atack",
                value: monsterPower
            })
        }
    },
    computed: {
        userHelthsBar: function () {

            return {
                width: this.userHelths + '%'
            }
        },
        monsterHelthsBar: function () {

            return {
                width: this.monsterHealth + '%'
            }
        },

    },
    watch: {
        userHelths: function () {
            if (this.userHelths < 1 && !this.dead) {
                alert("YOU ARE DEAD!!!")
                this.dead = true;
                this.userHelths = 0;
                return;
            }
        
            if (this.userHelths >= 100) {
                this.userHelths = 100;
            }
        },
        monsterHealth: function () {
            if (this.monsterHealth < 1 && !this.dead) {
                alert("YOU ARE WIN!!!")
                this.dead = true;
this.monsterHealth = 0;
                return;
            }
        }
    }
})