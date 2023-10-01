const createObject = (icon, commonTypes, description, basicCare) => {
    return {
        icon, 
        commonTypes,
        description,
        basicCare
    }
}
const flower = createObject(
    '../assets/icons/flower.png',
    ['Orchid', 'Rose', 'Daisy', 'Sunflower'],
    'A beautiful type of plant!',
    'Flowers require regular watering, typically once a week. They thrive in bright, indirect sunlight and prefer moderate humidity. Fertilize them during the growing season for best results.'
);

const fruitplant = createObject(
    '../assets/icons/fruit.png',
    ['Apple', 'Pear', 'Banana', 'Orange'],
    'Delicious fruit-bearing plants!',
    'Fruit plants need consistent watering, especially during the fruiting season. They thrive in full sunlight and benefit from regular pruning to encourage healthy fruit production. Mulching can help retain soil moisture.'
);

const tree = createObject(
    '../assets/icons/tree.png',
    ['Oak', 'Pine', 'Maple', 'Palm'],
    'Tall and woody plants!',
    'Trees require deep, infrequent watering to establish deep roots. They prefer full sunlight and should be pruned periodically to remove dead branches. Protect them from pests and diseases for long-term health.'
);

const cactus = createObject(
    '../assets/icons/cactus.png',
    ['Saguaro Cactus', 'Barrel Cactus', 'Opuntia', 'Echinopsis'],
    'Hardy desert plants!',
    'Cacti thrive in arid conditions and need infrequent watering, typically every 2-4 weeks. They require full sunlight and well-draining soil. Avoid overwatering, as it can lead to root rot.'
);

const herbs = createObject(
    '../assets/icons/herbs.png',
    ['Basil', 'Parsley', 'Mint', 'Thyme'],
    'Aromatic and culinary plants!',
    'Herbs prefer consistent moisture, so water them when the soil surface feels dry. They thrive in sunlight, and you can harvest their leaves for culinary use. Pruning helps maintain their shape and flavor.'
);

const tuber = createObject(
    '../assets/icons/tuber.png',
    ['Potato', 'Carrot', 'Beet', 'Yam'],
    'Plants with edible underground parts!',
    'Tuber plants need well-draining soil and regular watering to ensure proper tuber development. They prefer full sunlight and benefit from mulching to conserve soil moisture.'
);

const grains = createObject(
    '../assets/icons/grains.png',
    ['Wheat', 'Corn', 'Rice', 'Oats'],
    'Crops grown for their grains!',
    'Grain crops require fertile soil and consistent irrigation, especially during their growth stages. They benefit from full sunlight and may need pest control measures to protect the harvest.'
);

export { flower, fruitplant, tree, cactus, herbs, tuber, grains };
