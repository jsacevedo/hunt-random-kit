// Weapon data
const huntData = {
  weapons: {
    large: [
      {
        name: 'Bomb Lance',
      },
      {
        name: 'Caldwell Rival 78',
      },
      {
        name: 'Crossbow',
      },
      {
        name: 'Crossbow Explosive',
      },
      {
        name: 'Crossbow Shotbolt',
      },
      {
        name: 'Crown & King Auto-5',
      },
      {
        name: 'Lebel 1886',
      },
      {
        name: 'Lebel 1886 Marksman',
      },
      {
        name: 'Lebel 1886 Talon',
      },
      {
        name: 'Martini-Henry IC1',
      },
      {
        name: 'Martini-Henry IC1 Deadeye',
      },
      {
        name: 'Martini-Henry IC1 Marksman',
      },
      {
        name: 'Martini-Henry IC1 Riposte',
      },
      {
        name: 'Mosin-Nagant M1891',
      },
      {
        name: 'Mosin-Nagant m1891 Avtomat',
      },
      {
        name: 'Mosin-Nagant M1891 Bayonet',
      },
      {
        name: 'Mosin-Nagant M1891 Sniper',
      },
      {
        name: 'Nagant M1895 Officer Carbine',
      },
      {
        name: 'Nitro Express Rifle',
      },
      {
        name: 'Romero 77',
      },
      {
        name: 'Romero 77 Talon',
      },
      {
        name: 'Sparks LRR',
      },
      {
        name: 'Sparks LRR Silencer',
      },
      {
        name: 'Sparks LRR Sniper',
      },
      {
        name: 'Specter 1882',
      },
      {
        name: 'Specter 1882 Bayonet',
      },
      {
        name: 'Springfield 1886',
      },
      {
        name: 'Springfield 1886 Marksman',
      },
      {
        name: 'Vetterli 71 Karabiner',
      },
      {
        name: 'Vetterli 71 Karabiner Bayonet',
      },
      {
        name: 'Vetterli 71 Karabiner Deadeye',
      },
      {
        name: 'Winfield M1873',
      },
      {
        name: 'Winfield M1873 Aperture',
      },
      {
        name: 'Winfield M1873 Swift',
      },
      {
        name: 'Winfield M1873 Talon',
      },
      {
        name: 'Winfield M1873C',
      },
      {
        name: 'Winfield M1873C Marksman',
      },
      {
        name: 'Winfield M1873C Silencer',
      },
    ],
    medium: [
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Caldwell Rival 78 Handcannon',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Combat Axe',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Dolch 96 Precision',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Hand Crossbow',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Hand Crossbow Poison',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Mosin-Nagant M1891 Obrez',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Mosin-Nagant M1891 Obrez Drum',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Mosin-Nagant M1891 Obrez Mace',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Nagant M1895 Deadeye',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Nagant M1895 Precision',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Romero 77 Handcannon',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Romero 77 Hatchet',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Specter1882 Compact',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Springfield 1866 Compact',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Springfield 1866 Compact Deadeye',
      },
      {
        name: 'Bornheim No. 3 Match',
      },
      {
        name: 'Springfield 1866 Compact Striker',
      },
    ],
    small: [
      {
        name: 'Bornheim No. 3',
      },
      {
        name: 'Bornheim No. 3 Extended',
      },
      {
        name: 'Caldwell Conversion Chain Pistol',
      },
      {
        name: 'Caldwell Conversion Pistol',
      },
      {
        name: 'Caldwell Conversion Uppercut',
      },
      {
        name: 'Caldwell Pax',
      },
      {
        name: 'Caldwell Pax Claw',
      },
      {
        name: 'Cavalry Saber',
      },
      {
        name: 'Dolch 96',
      },
      {
        name: 'LeMat Mark II Revolver',
      },
      {
        name: 'Machete',
      },
      {
        name: 'Nagant M1895',
      },
      {
        name: 'Nagant M1895 Officer',
      },
      {
        name: 'Nagant M1895 Officer Brawler',
      },
      {
        name: 'Nagant M1895 Silencer',
      },
    ],
  },
};

const kitContainer = document.querySelector('.kit-container');
const rollButton = document.getElementById('random-button');

// Get a random item from the object array
function getRandomItem(itemArray) {
  return Math.floor(Math.random() * itemArray.length);
}

// Display the weapon based on the random number
function getWeapon(size, history) {
  if (size === 1) {
    const smallWeapon =
      huntData.weapons.small[getRandomItem(huntData.weapons.small)].name;

    kitContainer.innerHTML += `<div>
        <h2>Small Weapon</h2>
        ${smallWeapon}
      </div>`;

    console.log(smallWeapon);
    history.push(smallWeapon);
  } else if (size === 2) {
    const mediumWeapon =
      huntData.weapons.medium[getRandomItem(huntData.weapons.medium)].name;

    kitContainer.innerHTML += `<div>
        <h2>Medium Weapon</h2>
        ${mediumWeapon}
      </div>`;

    console.log(mediumWeapon);
    history.push(mediumWeapon);
  } else if (size === 3) {
    const largeWeapon =
      huntData.weapons.large[getRandomItem(huntData.weapons.large)].name;

    kitContainer.innerHTML += `<div>
        <h2>Large Weapon</h2>
        ${largeWeapon}
      </div>`;

    console.log(largeWeapon);
    history.push(largeWeapon);
  }
}

function getWeapons() {
  // Clear the kitContainer when an new roll is attempted
  kitContainer.innerHTML = '';

  // the standard number of points for a loadout
  let currentPoints = 4;

  // The initial number of weapon types is 3 - large, medium, and small
  let weaponTypes = 3;

  // Initialize variable for random number for weapon type
  let randomType = 0;
  // Initialize variable to track the previously drawn weapon type
  let previousType = 0;
  // Initialize counter variable for history array
  let counter = 0;
  let history = [];

  while (currentPoints > 0) {
    // Get a random number from 1 - 3 to choose the type
    // 1 - Small Weapon, 2 - Medium Weapon, 3 - Large Weapon
    randomType = Math.ceil(Math.random() * weaponTypes);
    console.log(`------MAIN LOOP COUNT = ${counter} ------`);
    console.log('Initial Type: ' + randomType);
    previousType = randomType;
    console.log('Previous Type: ' + previousType);

    // If the current number of points is less than the number that was randomly generated, restart the while loop
    if (currentPoints < randomType) {
      continue;
    }

    // Get the weapon
    getWeapon(randomType, history);
    // Subtract the random weapon points from the current amount of points
    currentPoints -= randomType;
    console.log('Current Points: ' + currentPoints);

    if (previousType === 1 && currentPoints >= 1) {
      console.log('Previous was a pistol');
      kitContainer.innerHTML += `<div>
        <h2>Small Weapon</h2>
        ${history[counter]}
      </div>`;
      history.push(history[counter]);
      currentPoints -= previousType;
      counter++;
      console.log(history);
      console.log('Current Points: ' + currentPoints);
    }

    // Increment counter for history
    counter++;

    console.log(history);
    console.log('Counter: ' + counter);
  }
}

rollButton.addEventListener('click', () => {
  getWeapons();
});
