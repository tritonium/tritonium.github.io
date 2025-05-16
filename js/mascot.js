var mascotList = 27;
var t = 0;

function setMascot() {
	var combo = "url(\"https://hataonline.github.io/mascots/image" + Math.floor(Math.random() * mascotList) + ".png\")";
	console.log(combo);
	document.getElementById("mascot").style.backgroundImage = combo;
}

function removeMascot() {
	document.getElementById("mascot").style.backgroundImage = "none";
}


function changeMascot() {
	setMascot();
}

function hoverLinks(string) {
	var d = document.getElementsByClassName(""+string);
	for(var i = 0; i < d.length; i++) {
		if(d[i].style.opacity == 0) {
			d[i].style.opacity = 1;
		}
		d[i].style.opacity == 0;
	}
}

/*function hoverLinks(string) {
	var c = document.getElementsByClassName(""+string);
	for(var i = 0; i < c.length; i++) c[i].style.opacity = 1;

}*/

function interjection() {
/*I'd just like to interject for moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.
Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.
There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!
*/
	if(t == 0) {
		t = 1;
		document.getElementById("pagetitle").style.fontSize = "16px";
		document.getElementById("pagetitle").style.padding = "10px 10px";
		document.getElementById("pagetitle").innerHTML = "ちょっと横槍を刺させてもらうのん。今お兄ちゃんがLinuxと呼んでいる物は実は正しく言うとGNU/Linuxって言うのん。最近はGNUプラスLinuxとも言うのん。Linux単体は実はOSじゃなくて、GNUと言う完成されたシステムのフリーコンポーネントの一つとしてGNUのcorelib、shellユティリティ、その他バイタルシステムと一緒にPOSIXの定義上OSとして実装可能になってるん。パソコンの利用者は皆知らずい毎日改変されたGNUシステムを使ってるのん。とある経緯を経て、昨今よく使われるGNUがLinuxと呼ばれるようになっているのん。なのに、GNU Projectに作られたGNUシステムと知らずにいるのん。Linux自体は実際存在していて、皆も使ってるん。ただ、それはシステムの一部としてなのん。Linuxはkernalと言って、他のプログラムにパソコンのリソースを振り分ける役目を持つのん。KernalはOSの大事な一部だけど、単体では意味が無いのん。完成されたシステムの一部の中でしか機能できないのん。Linuxはよく、GNU OSの一部と一緒に使われるのん、いや、GNU/Linuxなのん。Linuxデストリは実は皆GNU/Linuxのデストリなのん!";
	} else if(t==1) {
		t = 2;
		document.getElementById("pagetitle").style.fontSize = "16px";
		document.getElementById("pagetitle").style.padding = "5px 2%";
		document.getElementById("pagetitle").innerHTML = "I'd just like to interject for moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!";
	} else {
		t = 0;
		document.getElementById("pagetitle").style.fontSize = "200%";
		document.getElementById("pagetitle").style.padding = "5px 5%";
		document.getElementById("pagetitle").innerHTML = "triX5's Homepage";
	}
}
