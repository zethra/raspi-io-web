#About

A web IO for controlling the GPIO pins of the Raspberry Pi that runs on Javascript, PHP, Apache, and Wiringpi

#Setup
Required Software:
<ul>
<li>Apache
<li>PHP
<li>Wiring Pi
<li>JQuery
</ul>

##Install Intructions for prerequisites
*_Requires internet connection_
###Apach and PHP
This is the web server the code runs on<br>
To install type the following into the terminal:
```bash
sudo apt-get install apache2 php5 libapache2-mod-php5
```
Web root directory located at:
```
/var/www
```
place all website files here
####Optional FTP
Having an FTP server on your Pi makes moving files to and from your Pi much faster and easier but is not required.<br>
A guid to installing an FTP server follow this <a href="http://www.instantsupportsite.com/self-help/raspberry-pi/raspberry-install-ftp/" target="_blank">guild</a>
###Wiring Pi
This program will add terminal commands the read and write to the gpio.  RasPi-IO exicutes commmands added by this program to function.<br>
To install type the following into the terminal:
```bash
cd ~
git clone git://git.drogon.net/wiringPi
cd wiringPi
./build
./build -lwiringpi
```
To test if it is installed correctly type:
```bash
gpio readall
```
If a table of the gpios comes back it is installed correctly.
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
