function block_img_update() {
    fabric.Image.fromURL("player.png",function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);
        block_img_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_img_object);
    });   
}