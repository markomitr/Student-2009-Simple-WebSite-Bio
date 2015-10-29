$(document).ready(function(){
	var ie= jQuery.browser.msie;
	if(ie)
	{
		var ver = jQuery.browser.version;
		if(ver<8)
		{
			$("#Flash").hide();
			$('#Shadow').css('background-color', '#E0E8E8');
			$('#Shadow').css({
            position: 'absolute',
            top:'0px',
            left:'0px',
            width: '100%',
            height: $(document).height(),
            opacity: '.25',
            filter: 'alpha(opacity = 90)'
			});
			
			$('#Info').css({
                position: 'fixed',
				top: '10%',
                width: '500px',
				height: '150px',
                margin: 'auto',				
                border: '2px solid Green',
				color: 'Olive',
				padding: '3px'
            });
			$('#Info').css('font-size', '0.8em');
			$('#Info').css('font-family', 'Verdana');
            $('#Info').css('z-index', '100');
            $('#Info').css('background-color', '#FFFFFF');
            $('#Info').show();
			$("#Info").html("Веб сајтот е тестиран и оптимизиран за следниве прелистувачи: <ul><li>- IE 8.0</li><li>- Mozilla 3.0</li><li>- Google Chrome</li></ul> <br/><p style='font-family:Verdana; font-size: 1em;color:Maroon;'> <b>Верзијата на овој прелистувач не е подржана и некои од фукционалностите можат да не работат!</b></p><br /> <div id='Prodolzi' style='font-size:0.9em;color: Green; cursor:pointer; float:right;'>Продолжи</div>");
            
		}
	}
	$("#Prodolzi").bind("click",function(){
		$('#Info').hide();
		$('#Shadow').hide();
		$("#Info").html("");
		$("#Flash").css("display","block");
	});
	$('#MeniUl li').mouseover(function(){
		smeniPozadinaKopce(this,1);
	});
	$('#MeniUl li').mouseout(function(){
		smeniPozadinaKopce(this,0);
	});
	$('#Footer').html('Интернет програмирање 2010');
	
});