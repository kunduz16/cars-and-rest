class Restaurant {
    name;
    cusineType;
    served = 0;

    constructor(name, cusineType) {
      this.name = name,
      this.cusineType = cusineType;
    }
  
    showInfo() {
        document.write(`<br> <br>
         ${this.name} is a restaurant of ${this.cusineType} meal. <br>
        `);
    }

    isOpen(){
        let currentHour = new Date().getHours();
        let currentDay = 5;

        if (currentDay < 7) {
            document.write(` <br>${this.name} is open. <br>`);
        }
        else {
            if ( currentHour >= 9 && currentHour <= 23) {
                document.write(`<br> ${this.name} is open <br>`);
            } else {
                document.write(`<br> ${this.name} is closed <br>`);  
            }   
        }
    }


    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
        this.served += numberOfServed;
    }

    showTotalServed(){
        document.write(` <br>Total served: ${this.served}<br>`);
    }
}
  
const tudor = new Restaurant('TUDOR', 'european');


tudor.showInfo();
tudor.isOpen();
tudor.serve();
tudor.showTotalServed();
tudor.serve();
tudor.showTotalServed();
tudor.setServed(5);
tudor.showTotalServed();
