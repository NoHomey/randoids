import output = require('./driver/output/output');
import input = require('./driver/input/input');

const chips: number = 8;
const data: number = 0;
const clock: number = 2;
const latch: number = 3;
var buttons: number = input();
var out: output.Output = new output.Output(chips, data, clock, latch);
out.setup();
/*for(var i: number = 0; i < 64; ++i) {
    out.setRGBLED(i, new Uint16Array([0, 0, 4000]));
}
out.write();
*/
out.setRGBLED(70, [5000, 0, 0]);