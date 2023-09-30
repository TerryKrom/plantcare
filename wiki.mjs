const createObject = (icon, commonTypes, description, basicCare) => {
    return {
        icon, 
        commonTypes,
        description,
        basicCare
    }
}
const flower = createObject(
    './icons/flower.png',
    ['Orchid', 'Rose', 'Daisy', 'Sunflower'],
    'A beautiful type of plant!',
    'They need water, sunlight, and proper care to bloom.'
);

const fruitplant = createObject(
    './icons/fruit.png',
    ['Apple', 'Pear', 'Banana', 'Orange'],
    'Delicious fruit-bearing plants!',
    'They need water, sunlight, and regular pruning for healthy fruit production.'
);

const tree = createObject(
    './icons/tree.png',
    ['Oak', 'Pine', 'Maple', 'Palm'],
    'Tall and woody plants!',
    'They provide shade and require occasional trimming and maintenance. Take a lot time to a tree to grow'
);

const cactus = createObject(
    './icons/cactus.png',
    ['Saguaro Cactus', 'Barrel Cactus', 'Opuntia', 'Echinopsis'],
    'Hardy desert plants!',
    'They thrive in arid conditions and require very little water.'
);

const herbs = createObject(
    './icons/herbs.png',
    ['Basil', 'Parsley', 'Mint', 'Thyme'],
    'Aromatic and culinary plants!',
    'They are great for cooking and need well-drained soil and sunlight.'
);

const tuber = createObject(
    './icons/tuber.png',
    ['Potato', 'Carrot', 'Beet', 'Yam'],
    'Plants with edible underground parts!',
    'They need loose soil and consistent watering for optimal tuber growth.'
);

const grains = createObject(
    './icons/grains.png',
    ['Wheat', 'Corn', 'Rice', 'Oats'],
    'Crops grown for their grains!',
    'They require fertile soil, adequate irrigation, and careful cultivation.'
);

export { flower, fruitplant, tree, cactus, herbs, tuber, grains };
