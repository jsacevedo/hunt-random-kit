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

const largeWeapon = document.getElementById('large-weapon');
const mediumWeapon = document.getElementById('medium-weapon');
const smallWeapon = document.getElementById('small-weapon');

let randomLargeWeapon;
let randomMediumWeapon;
let randomSmallWeapon;

// The number of weapon classes - large, medium, and small
const numberOfClasses = 3;

const rollButton = document.getElementById('random-button');

function getRandomItem(itemArray) {
  return Math.floor(Math.random() * itemArray.length);
}

function getLargeWeapon() {
  randomLargeWeapon =
    huntData.weapons.large[getRandomItem(huntData.weapons.large)].name;
}

function getMediumWeapon() {
  randomMediumWeapon =
    huntData.weapons.medium[getRandomItem(huntData.weapons.medium)].name;
}

function getSmallWeapon() {
  randomSmallWeapon =
    huntData.weapons.small[getRandomItem(huntData.weapons.small)].name;
}

function displayLoadout() {
  largeWeapon.textContent = `LARGE WEAPON: ${randomLargeWeapon}`;
  mediumWeapon.textContent = `MEDIUM WEAPON: ${randomMediumWeapon}`;
  smallWeapon.textContent = `SMALL WEAPON: ${randomSmallWeapon}`;
}

function getWeapons() {
  const randomClass = Math.ceil(Math.random() * numberOfClasses);
  let nextWeapon = 0;

  // Large weapon point value = 3
  if (randomClass === 3) {
    getLargeWeapon();
    getSmallWeapon();
  }

  // Medium weapon point value = 3
  if (randomClass === 2) {
    getMediumWeapon();

    nextWeapon = Math.ceil(Math.random() * 2);
    if (nextWeapon === 2) {
      getMediumWeapon();
    } else {
      getSmallWeapon();
      getSmallWeapon();
    }
  }

  // Small weapon point value = 1
  if (randomClass === 1) {
    getSmallWeapon();

    nextWeapon = Math.ceil(Math.random() * 3);
    if (nextWeapon === 2) {
      getLargeWeapon();
    } else {
      getSmallWeapon();
      getSmallWeapon();
    }
  }
}

rollButton.addEventListener('click', () => {
  getLargeWeapon();
  getMediumWeapon();
  getSmallWeapon();
  displayLoadout();
});
