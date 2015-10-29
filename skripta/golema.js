var brPom;//za opstaUpotreba



function smeniPozadinaKopce(x,y)
{
	if(y==1)
	{
	$(x).css({
	'background':'url(Sliki/granceGif.gif) no-repeat',
	});
	}
	else
	{
	$(x).css({
	'background':'url(Sliki/grance1.png) no-repeat'
	});
	}
	
}
function postaviNaslov(id)
{
	document.title=Naslov[id];
	$("#Naslov").html("<I>" + Naslov[id] + "</I>");
}
function postaviSlika(num)
{
	if(num==0)
	{
		$("#Centar").css({
		'background':'url(Sliki/centar1.jpg) no-repeat',
		});
	}
	else if (num==1)
	{
		$("#Centar").css({
		'background':'url(Sliki/about.jpg) no-repeat',
		});
	}
	else if (num==2)
	{
		$("#Centar").css({
		'background':'url(Sliki/hobi.jpg) no-repeat',
		});
	
	}
	else
	{
		$("#Centar").css({
		'background':'url(Sliki/slikiGal.jpg) no-repeat',
		});
		postaviGalerija();
		$("#Sodrzina img").bind("mouseover",function(){
		  var img = $(this).attr('Slika');
			$("#Centar").html(" <img src='" + img + "' style='height:290px; width:800px;'/>");
			$(this).addClass("selektImg");
		});
		$("#Sodrzina img").bind("mouseout",function(){
			$(".selektImg").removeClass("selektImg");
			$("#Centar").html(" <img src='Sliki/slikiGal.jpg' style='height:290px; width:800px;'/>");
		});
	}
}
function initStrana(x)
{
	postaviNaslov(x);
	postaviSlika(x); 
}
function postaviGalerija()
{
	$("#Sodrzina").css("padding-left","30px");
	for(i=0;i<Sliki.length;i++)
	{
	    var pret = $("#Sodrzina").html();
		$("#Sodrzina").html( pret + " <img src='" + Sliki[i] + "' Slika='" + Sliki[i] + "' style='height:100px; width:100px; cursor:crosshair;'/>");
	}
}
function proveriBrowser()
{
	var ie= jQuery.browser.msie;
	if(ie)
	{
		var ver = jQuery.browser.version;
		if(ver<8)
		{
			
            $('#Info').css({
                position: 'fixed',
                top: 200 + 'px',
                left: 250 + 'px',
                width: '200px',
                border: '1px solid black',
                display:'block'
            });
            $('#Info').css('z-index', '10');
            $('#Info').css('background-color', '#AAAAAA');
            $('#Info').show();
			$("#Info").html("Verzijata na browserot ne e podrzana");
		}
	}
}
function napolniNovosti()
{
	for(i=0;i<NovostNaslov.length;i++)
	{
	    var pret = $("#Sodrzina").html();
		$("#Sodrzina").html( pret + "<div id=\"Novosti\"><p br=\"" + i +"\" class=\"Naslov\"><img class=\"ekoSlika\" src=\"Sliki/eko.png\"/>" + NovostNaslov[i] + "</p><p br=\"" + i +"\" class=\"NovostText\">"
		 + NovostText[i] + "</p></div>");
	}
	$("#Sodrzina").html( $("#Sodrzina").html())// + "<br/>" + pogovorka);
	$('#Novosti p').bind("click",function(){
			var txtbr = $(this).attr('br');
			var txt = "<div id=\"NovostiGolemo\"><p br=\"" + i +"\" class=\"Naslov\">" + NovostNaslov[txtbr] + "</p><p br=\"" + i +"\" class=\"NovostText\">"
		 + NovostText[txtbr] + "</p></div><br/><br/><p class=\"Zatvori\">Затвори(X)</p>";
			prikaziShadow(txt);
				
	});
	$('#Novosti p').bind("mouseover",function(){
				$(this).addClass('Potenciraj');					
	});
	$('#Novosti p').bind("mouseout",function(){
				$(this).removeClass('Potenciraj');					
	});
	
}

function prikaziShadow(txt)
{
	
	$('#Shadow').css('background-color', '#000000');//#E0E8E8
			$('#Shadow').css({
            position: 'absolute',
            top:'0px',
            left:'0px',
            width: '100%',
            height: $(document).height(),
            opacity: '.90',
            filter: 'alpha(opacity = 90)'
			});
			$('#Shadow').show();
			$('#Info').css({
                position: 'fixed',
				top: '10%',
                width: '500px',
				left:'27%',
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
			$('#Info').html(txt);
			
			$('.Zatvori').bind("click",function(){
			 $('#Info').html("");
			 $('#Info').hide();
			 $('#Shadow').hide();	 
			});
			$('.Zatvori').bind("mouseover",function(){
				$(this).addClass('Potenciraj');					
			});
			$('.Zatvori').bind("mouseout",function(){
						$(this).removeClass('Potenciraj');					
			});
}