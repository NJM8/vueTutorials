const app = new Vue({
  el: '#app',
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    playing: false,
    specialAttacks: 0,
    attackCount: 0,
    attackLog: [],
    heals: 0
  },
  methods: {
    startGame: function(){
      this.playing = true;
      this.yourHealth = 100;
      this.monsterHealth = 100;
      this.specialAttacks = 0;
      this.attackCount = 0;
      this.attackLog = [];
    },
    attack: function(special, heal){
      if (heal && this.heals === 0 || special && this.specialAttacks === 0) {
        return;
      }
      
      if (!special && !heal) {
        this.attackCount += 1;
      }

      if (this.attackCount === 3) {
        this.specialAttacks += 1;
        this.heals += 1;
        this.attackCount = 0;
      }

      let yourAttack = this.getRandVal(3, 10);

      if (special) {
        yourAttack += this.getRandVal(5, 10);
        this.specialAttacks -= 1;
      }

      if (heal) {
        this.heals -= 1;
        yourAttack += this.getRandVal(5, 10);
        this.yourHealth += yourAttack;
        this.attackLog.unshift({'attacker': 'heal', 'value': yourAttack});
      } else {
        this.monsterHealth -= yourAttack;
        this.attackLog.unshift({'attacker': 'you', 'value': yourAttack});
      }

      const monsterAttack = this.getRandVal(5, 12);
      this.yourHealth -= monsterAttack;
      this.attackLog.unshift({'attacker':'monster', 'value': monsterAttack});
      this.checkForGameEnd(false);
    },
    getRandVal: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkForGameEnd(quitting){
      if (this.yourHealth <= 0 || this.monsterHealth <= 0 || quitting) {
        let msg = '';
        if (!quitting) {
          const winner = this.yourHealth < this.monsterHealth ? 'Monster' : 'You';
          msg = `Game Over, the winner is ${winner}!\n Hit ok to start a new game or cancel to review the fight.`;
        } else {
          msg = 'We will remember you in the quitters hall of fame!\n Hit ok to start a new game or cancel to review the fight.';
        }
        let input = confirm(msg);
        if (!input) {
          this.playing = false;
        } else {
          this.playing = false;
          this.yourHealth = 100;
          this.monsterHealth = 100;
          this.specialAttacks = 0;
          this.attackCount = 0;
          this.attackLog = [];
        }
      }
    }
  }
})