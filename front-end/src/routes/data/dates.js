// function generator() {
//   this.num = Math.round(Math.random() * 1);
// }

// Date.prototype.addDay = function(d) {
//   this.setTime(this.getTime() + );
//   return this;
// }

const now = Date.now();
const Dates = [...new Array(365)].map((obj, i) => (
  {
    date: new Date(now + i*24*60*60*1000),
    room1: false,
    room2: true,
    room3: true,
  }
));

export default Dates;
