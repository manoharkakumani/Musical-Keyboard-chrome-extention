function getswitch(callback){
	chrome.storage.sync.get("switch1",callback);
}
var i=0;
var m= ["sine","square","sawtooth","triangle"];
var k=m[0];    
getswitch(function(switch1)
{
var switchOption;
switchOption = switch1['switch1'];
if(switchOption===true)
	{var o = null;
var g = null;   
var context = new AudioContext();
var chord = {
	'A': [250,440,622.254],
	'B': [250,550,654.155],
	'C': [250,660,450],
	'D': [270,639,721],
	'E': [342,690,830],
	'F': [342,852,942],
	'G': [342,720,524],
	'H': [270,558.015,880],
	'I': [270,682.251,890],
	'J': [415.3, 523.251,342],
	'K': [554.365, 466.2,359],
	'L': [493.9, 587.330,372],
	'M': [466.2, 587.330,395],
	'N': [523.251, 622.254,345],
	'O': [554.365, 659.255,352],
	'P': [523.251, 654.155,445],
	'Q': [587.330, 698.456,492],
	'R': [622.254, 739.989,642],
	'S': [587.330, 739.989,374],
	'T': [554.365, 466.2,390],
	'U': [ 193.9, 587.330,344],
	'V': [ 466.2, 987.330,458],
	'W': [ 523.251, 624.25,592],
	'X': [ 754.365, 659.255,682],
	'Y': [ 523.251, 639.255,784],
	'Z': [ 507.330, 698.456,478],
	'1': [ 602.254, 739.989,184],
	'2': [ 587.330, 719.989,155],
	'3': [ 657.365, 466.2,253],
	'4': [ 493.9, 577.330,260],
	'5': [ 466.2, 587.330,268],
	'6': [ 527.251, 625,356],
	'7': [ 554.365, 359.255,360],
	'8': [ 223.251, 659.255,542],
	'9': [ 587.330, 998.456,620],
	'0': [ 622.254, 439.989,256]
}
var duration=1.3;
function playTone (frequency){
	completeChord(frequency[0]);
	completeChord(frequency[1]);
	completeChord(frequency[2]);

}
function completeChord(frequency){
	osc = context.createOscillator();
	gn = context.createGain();
	osc.connect(gn);
	osc.type =k;
	osc.frequency.value = frequency;
	gn.connect(context.destination);
	osc.start(0);
	gn.gain.exponentialRampToValueAtTime(0.0001,context.currentTime + duration);
}
document.onkeypress = function(evt) {
    var key = evt.keyCode;
    var c = String.fromCharCode(key);
	 c=c.toUpperCase();
	 if(c==' '){
	        if(i>3){i=0;}
			k=m[i++];
			}
			playTone(chord[c]);
};
}
});