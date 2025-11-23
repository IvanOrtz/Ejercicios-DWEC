//1
class Persona{
    constructor(name, age){
        this.name= name;
        this.age=age;
        this.stomach = [];
    }
    eat(food){
        if (this.stomach.length<10){
            this.stomach.push(food);
        }
        else{
            console.log("Estomago lleno");
        }
    }
    poop(){
        this.stomach=[]
    }
    toString(){
        return this.name+", "+this.age;
    }
    showStomach(){
        console.log(this.stomach);
    }
}
const antonio = new Persona("Antonio",19);
console.log(antonio.toString());
antonio.eat("Manzana");
antonio.eat("Pera");
antonio.showStomach();
antonio.poop();
antonio.showStomach();

//2
class Car {
    constructor(model, milesPerGallon) {
        this.model=model;
        this.milesPerGallon=milesPerGallon;
        this.tank = 0;
        this. odometer = 0;
        this.fuel=false;
    }
    fill(gallons){
        this.tank+=gallons;
        if (this.tank!=0)
            this.fuel=true;
    }
    drive(distance) {
    const gallonsNeeded = distance / this.milesPerGallon;
    if (this.tank >= gallonsNeeded) {
      // hay suficiente combustible
      this.odometer += distance;
      this.tank -= gallonsNeeded;
      console.log("Has conducido "+distance+" millas. Quedan "+this.tank+" galones.");
    } else if (this.tank > 0) {
      // no hay suficiente: recorrer lo que permita el combustible disponible
      const possibleMiles = this.tank * this.milesPerGallon;
      this.odometer += possibleMiles;
      this.tank = 0;
      console.log("¡Me quedé sin combustible después de "+possibleMiles+" millas!");
    } else {
      // tanque vacío
      console.log("No puedes conducir sin combustible");
    }
  }
}
const coche = new Car("Opel", 20);
coche.fill(6);                     
coche.drive(100);                  
coche.drive(50);  

//3
class Persona{
    constructor(name, age,location){
        this.name= name;
        this.age=age;
        this.location=location;
        this.stomach = [];
    }
}
class Lambdasian{
    constructor(objeto){
        this.name=objeto.name;
        this.age=objeto.age;
        this.location=objeto.location;
    }
    speak(){
        console.log("Hello my name is "+this.name+", I am from "+this.location+".");
    }
}
const antonio2 = new Persona("Antonio",19,"Pinos Puente")
const lambdasian = new Lambdasian(antonio2);
lambdasian.speak();

//4
class Instructor extends Lambdasian{
    constructor(objeto) {
    super (objeto);
    this.specialty = objeto.specialty;
    this.favLanguage = objeto.favLanguage;
    this.catchPhrase = objeto.catchPhrase;
  }

  demo(subject) {
    return "Today we are learning about "+subject+".";
  }

  grade(student, subject) {
    return student.nombre+ "receives a perfect score on "+subject+".";
  }
}
const instructor = new Instructor({name: "Antonio",age: 19,location: "Madrid",specialty: "redux",favLanguage: "JavaScript",catchPhrase: "Don't forget the homies."});
console.log(instructor.speak());
console.log(instructor.demo("React"));