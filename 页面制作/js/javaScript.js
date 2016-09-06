$(function(){
	var Btn=true;
	
	$('.bclick').on('click',function(){
		
		if(Btn==true){
			$('.midliftmid').css({'height':'198'});
			$('.imga').attr('src','../images/midleftshangla.png');
			Btn=false;
		}else if(Btn==false){
			$('.midliftmid').css({'height':'135'});
			$('.imga').attr('src','../images/midxiala.png');
			Btn=true;
		}
	});
	
	/*$('.doing-img').hover(function(){
		$('.doing-img>a').css({'top':'-10'})
	},function(){
		$('.doing-img>b').css({'top':'-5'})
	})*/
	$('.dolinkshow').on('click',function(){
		if(Btn==true){
			$('.foot_linkText').css({'height':'80'});
			$('.dolinkshow').css({'background':'url(../images/xiala.jpg) no-repeat'});
			Btn=false;
		}else if(Btn==false){
			$('.foot_linkText').css({'height':'20'});
			$('.dolinkshow').css({'background':'url(../images/zuola.jpg) no-repeat'});
			Btn=true;
		}
	});
});
