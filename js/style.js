window.onload=function(){
	var yanse=["#f5278b","#e6e6e6","#eb0e3a","#e6e6e6","#c2b6a7","#662de0"];

	var quan=document.getElementById('lunbo-img');
	var fshuzi = document.getElementById('shuzi');
	var shuzi= fshuzi.getElementsByTagName('li');
	var a=1;
	function gun(){
		quan.style.background=yanse[a];
		a++;
		if(a==6)
		a=0;
		}
	var t=setInterval(gun,4010);


	for(var j=0;j<shuzi.length;j++){
		shuzi[j].index=j;
		shuzi[j].onmouseover=function(){
		quan.style.background=yanse[this.index];
		clearInterval(t);
		}
		shuzi[j].onmouseout=function(){
		t=setInterval(gun,4010);
		}
	}
}

// window.onload = function(){
// 	var ul = document.getElementById('lunbo-fenlei');
// 	var li = ul.getElementsByTagName('li');
// 	var center = getClass('lunbo-center');
// 	for(var i = 0; i < li.length; i++){
// 		for(var j = 0; j<center.length; j++){
// 			li[i] == center[j];
// 			li[i].onmouseover = function(){
// 				center[j].style.display = 'block';
// 			}
// 			li[i].onmouseout = function(){
// 				center[j].style.display = 'none';
// 			}
// 		}
// 	}
// };
function show(){
	$('#center1').css('display', 'block');
};
function hide(){
	$('#center1').css('display', 'none');
};
function show1(){
	$('#center2').css('display', 'block');
};

function hide1(){
	$('#center2').css('display', 'none');
};
function show2(){
	$('#center3').css('display', 'block');
};
function hide2(){
	$('#center3').css('display', 'none');
};
function show3(){
	$('#center4').css('display', 'block');
};
function hide3(){
	$('#center4').css('display', 'none');
};
function show4(){
	$('#center5').css('display', 'block');
};
function hide4(){
	$('#center5').css('display', 'none');
};
function show5(){
	$('#center6').css('display', 'block');
};
function hide5(){
	$('#center6').css('display', 'none');
};
function show6(){
	$('#center7').css('display', 'block');
};
function hide6(){
	$('#center7').css('display', 'none');
};
function show7(){
	$('#center8').css('display', 'block');
};
function hide7(){
	$('#center8').css('display', 'none');
};
function show8s(){
	$('#center9').css('display', 'block');
};
function hide8s(){
	$('#center9').css('display', 'none');
};
function show9(){
	$('#center10').css('display', 'block');
};
function hide9(){
	$('#center10').css('display', 'none');
};
function show10(){
	$('#center11').css('display', 'block');
};
function hide10(){
	$('#center11').css('display', 'none');
};
function show11(){
	$('#center12').css('display', 'block');
};
function hide11(){
	$('#center12').css('display', 'none');
};
function show12(){
	$('#center13').css('display', 'block');
};
function hide12(){
	$('#center13').css('display', 'none');
};
function show13(){
	$('#center14').css('display', 'block');
};
function hide13(){
	$('#center14').css('display', 'none');
};
function show14(){
	$('#center15').css('display', 'block');
};
function hide14(){
	$('#center15').css('display', 'none');
};
function show15(){
	$('#center16').css('display', 'block');
};
function hide15(){
	$('#center16').css('display', 'none');
};