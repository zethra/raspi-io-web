#About

A web IO for controlling the GPIO pins of the Raspberry Pi that runs on Javascript, PHP, Apache, and Wiringpi

#Usage
##Basic
Place raspi-ip.js and raspi-io.php in the same folde in the website directory.  Link raspi-io.js to your html page after jquery *_note i have tested the library with jquery version 2.1.1_.

####Mode
To set the mode of a pin use the syntax: 
```javascript
gpio.mode(pin, mode);
```
The pin argument is a number and the mode argument is a string.<br>
Example:
```javascript
gpio.mode(25, out);
```

####Write
To write a value to a pin use the syntax:
```javascript
gpio.write(pin, value);
```
The pin argument is a number and the value argument is a boolean.<br>
Example:
```javascript
gpio.write(25, true);
```

####Read
To read the value to a pin use the syntax:
```javascript
gpio.read(pin);
```
The pin argument is a number and the function returns a boolean.<br>
Example:
```javascript
gpio.read(25);
```
