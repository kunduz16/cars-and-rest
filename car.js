class Cars {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + "kW";
      this.color = color;
    }

    showInfo() {
        document.write(` <br>
            Model: ${this.model}<br>
            Year: ${this.year}<br>
            Power: ${this.power}<br>
            Color: ${this.color}<br>
        `)}  
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        document.write(`
            Battery: ${this.battery}<br>     
        `);
    }

    promote() {
        document.write(`
           <b> <br> Buy ${this.model} on credit!<br>  <b>
        `)
    }

  }
  
const bmw = new Cars('BMW X5 M50d', 2020, 294, 'black');
bmw.showInfo();

const honda = new ElectroCars("Honda SUV E", 2020, 117, 'blue', 53.6);
honda.showInfo();
honda.promote();