const app = new Vue({
  el: '#app',
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    playing: false,
    attackCount: 0,
    specialAttacks: 0,
    heals: 0,
    attackLog: []
  },
  methods: {
    startGame: function(){
      this.endGame(true);
      this.playing = true;
    },
    attack: function(){
      let yourAttack = this.getRandVal(3, 10);
      this.monsterHealth -= yourAttack;
      this.attackLog.unshift({message: `You attack Monster for ${yourAttack}`, isPlayer: true});
      this.countRound();      
      this.monsterAttack();
    },
    specialAttack: function(){
      if (this.specialAttacks === 0) {
        return;
      }
      let yourAttack = this.getRandVal(7, 20);
      this.monsterHealth -= yourAttack;
      this.attackLog.unshift({message: `You special attack Monster for ${yourAttack}`, isPlayer: true});
      this.countRound('special');      
      this.monsterAttack();
    },
    monsterAttack: function(){
      const monsterDamage = this.getRandVal(5, 12);
      this.yourHealth -= monsterDamage;
      this.attackLog.unshift({message:`Monster attacks You for ${monsterDamage}`, isPlayer: false});
      this.checkForGameEnd(false);
    },
    heal: function(){
      if (this.heals === 0) {
        return;
      }
      let yourHeal = this.getRandVal(6, 15);
      this.yourHealth += yourHeal;
      this.attackLog.unshift({message: `You heal yourself for ${yourHeal}`, isPlayer: true});
      this.countRound('heal');
      this.monsterAttack();
    },
    countRound: function(type){
      if (type) {
        if (type === 'special') {
          this.specialAttacks -= 1;
        }
        if (type === 'heal') {
          this.heals -= 1;
        }
      } else {
        this.attackCount++;
        if (this.attackCount === 3) {
          this.specialAttacks++;
          this.heals++;
          this.attackCount = 0;
        }
      }
    },
    getRandVal: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkForGameEnd(){
      if (this.yourHealth <= 0 || this.monsterHealth <= 0) {
        const winner = this.yourHealth < this.monsterHealth ? 'Monster' : 'You';
        let choice = confirm(`Game Over, the winner is ${winner}!\n Hit ok to start a new game or cancel to review the fight.`);
        this.endGame(choice);
      }
    },
    quit: function(){
      let choice = confirm('We will remember you in the quitters hall of fame!\n Hit ok to start a new game or cancel to review the fight.');
      this.endGame(choice);
    },
    endGame: function(choice){
      if (choice) {
        this.yourHealth = 100;
        this.monsterHealth = 100;
        this.specialAttacks = 0;
        this.heals = 0;
        this.attackCount = 0;
        this.attackLog = [];
      }
      this.playing = false;
    }
  }
})
