class Ninja {
    constructor(firstName, health, strength, speed ) { //Constructor is the function
        this.firstName = firstName
        this.health = health
        this.strength = strength
        this.speed = speed
    }
    showName(){ //function
        console.log('Name is', this.firstName )
    }
    showAttributes(){
        console.log('Health is', this.health ,'Strength is', this.strength ,'Speed is', this.speed, )
    }
    drinkSake(){
        console.log(this.firstName, " HP is :", this.health)
        this.health+=10;
        console.log(this.firstName, " Drank Sake! ")
        console.log(this.firstName, " New HP is :", this.health)
    }
}



const ninjaOne = new Ninja('Chris', 100, 3, 3); //const = variable
console.log(ninjaOne.health)
ninjaOne.showName(); //methods
ninjaOne.showAttributes();
ninjaOne.drinkSake();


class Sensei extends Ninja{
    constructor(fullname,health=200,speed=10, strength=10, wisdom= 10){
        super(fullname,health,speed,strength)
        this.wisdom = wisdom;
    }
    showStats(){
        super.showAttributes()
        console.log("This is the wisdom stat",this.wisdom)
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const newSensei = new Sensei("Master Obi Wan");
newSensei.showName();
newSensei.showAttributes();
newSensei.drinkSake();
// newSensei.speakWisdom();
console.log(newSensei)