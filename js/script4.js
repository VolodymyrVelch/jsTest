const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line

  removePotion(potionName) {
    for (let i = 0; i <= this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
        // return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
};

console.log(atTheOldToad.removePotion('Dragon breath'));
