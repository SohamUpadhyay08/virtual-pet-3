class Food{
    constructor(){
      this.foodStock = 0
      this.image = loadImage("Milk.png")
      this.lastFed
    }
    getFoodStock(){
     return this.foodStock
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }

    updateFoodStock(fooodStock){
     this.foodStock = foodStock
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
           }
          }
    

    display(){
        var x = 80,y = 100

        imageMode(CENTER)
        image(this.image,720,220,70,70)

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }

    bedroom(){
        
       background(bedroom,200,400,width,height);
    }

    garden(){
        
        background(garden,200,400,width,height);
    }

    washroom(){
        
        background(washroom,200,400);
    }

}