
$(function() {
	$('.btn').on('click',function(){ //.on は色んなイベント処理を記述するためのメソッド（方法）
		$('.btn').removeClass('active');//クリックされるとactiveを初期化
		$(this).addClass('active');//クラスを付与
	});
});

$(function(){
	$('btn').on('click',function(){
		$('btn').fadeOut(1500);
	});
});




