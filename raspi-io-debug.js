var fakes = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var elements = [];
var attributes = [];
var pins = [];
var oncolors = [];
var offcolors = [];
var pos = 0;
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
var gpio = {debug:"debug"};
gpio.debug = {nopi : 
	function (fakePins, fakeVals)
		{
			for (x in fakePins)
			{
				fakes[fakePins[x]] = fakeVals[x];
			}
			window.gpio = 
			{
				mode : function (pin, mode){console.log("pin "+pin+"set to "+mode)},
				write : function (pin, state){fakes[pin] = state},
				pwm : function (pin, state){fakes[pin] = state},
				read : function (pin){return fakes[pin]},
				toggle : function (pin)
				{
					gpio.write(pin, !(gpio.read(pin)))
				},
				debug : 
				{
					nopi : function (fakePins, fakeVals)
					{
						for (x in fakePins)
						{
							fakes[fakePins[x]] = fakeVals[x];
						}
					}
				},
				ui:
				{
					set : function (element, attribute, pin, oncolor, offcolor)
					{
						if (element instanceof Array)
						{
							if(pin instanceof Array)
							{
								for (x in element)
								{
									elements[pos] = element[x];
									attributes[pos] = attribute;
									pins[pos] = pin[x];
									oncolors[pos] = oncolor;
									offcolors[pos] = offcolor;
									pos++;
								}
							}
							else
							{
								for (x in element)
								{
									elements[pos] = element[x];
									attributes[pos] = attribute;
									pins[pos] = pin;
									oncolors[pos] = oncolor;
									offcolors[pos] = offcolor;
									pos++;
								}
							}
						}
						else
						{
							elements[pos] = element;
							attributes[pos] = attribute;
							pins[pos] = pin;
							oncolors[pos] = oncolor;
							offcolors[pos] = offcolor;
							pos++;
						}
					},
					
					update : function ()
					{
						for (x in elements)
						{
							if (gpio.read(pins[x]))
							{
								$(elements[x]).css(attributes[x], oncolors[x]);
							}
							else
							{
								$(elements[x]).css(attributes[x], offcolors[x]);
							}
						}
					}
				}
				
			};
		}
};
