var fakes = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
/*
gpio.debug = "Debug Fucntions";

gpio.debug.readall = function ()
{
	for (x = 1; x = 25; x++)
	{
		console.log("pin " + x + ": " + gpio.read(x));
	}
}
*/

gpio.debug.nopi = function (fakePins, fakeVals)
{
	for (x in fakePins)
	{
		fakes[fakesPins[x]] = fakeVales[x];
	}
	var gpio = 
	{
		mode : function (pin, mode){console.log("pin "+pin+"set to "+mode)},
		write : function (pin, state){fakes[pin] = state},
		pwm : function (pin, state){fakes[pin] = state},
		read : function (pin){return fakes[pin]},
		debug : 
		{
			nopi : function (fakePins, fakeVals)
			{
				for (x in fakePins)
				{
					fakes[fakesPins[x]] = fakeVales[x];
				}
			}
		}
		
	};
}
