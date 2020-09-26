export function loadImages(scene: Phaser.Scene){
    let load = scene.load;
    load.image('TestImage','assets/test_image.png');
    load.image('car','assets/car.png');
    load.image('kit','assets/kit.png');
    load.json('car_shape','assets/car_shape.json');
}