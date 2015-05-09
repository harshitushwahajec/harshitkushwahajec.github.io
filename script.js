$(document).ready(function(){
	$('.box-2').hide();
	$('#prev').css({"opacity":"0.3"});
	$('.option li:nth-child(2)').css({"font-size":"16","opacity":"0.3"});
	$('.option li:nth-child(1)').css({"text-align":"center"});

	function changeToTwo()
	{
		$('.box-1').hide('slide', {direction: 'left'}, 500);
		$('.box-2').show('slide', {direction: 'right'}, 500);
		$('.option li:nth-child(1)').animate({fontSize:'16',opacity:'0.3'});
		$('.option li:nth-child(2)').animate({fontSize:'24',opacity:'1'});
		$('#next').animate({opacity:'0.3'});
		$('#prev').animate({opacity:'1'});
	}

	function changeToOne()
	{
		$('.box-2').hide('slide', {direction: 'right'}, 500);
		$('.box-1').show('slide', {direction: 'left'}, 500);
		$('.option li:nth-child(2)').animate({fontSize:'16',opacity:'0.3'});
		$('.option li:nth-child(1)').animate({fontSize:'24',opacity:'1'});
		$('#prev').animate({opacity:'0.3'});
		$('#next').animate({opacity:'1'});
	}

	$('#next').click(function(){
		changeToTwo();
	});
	$('.option li:nth-child(2)').click(function(){
		changeToTwo();
	});

	$('#prev').click(function(){
		changeToOne();
	});
	$('.option li:nth-child(1)').click(function(){
		changeToOne();
	});

	$(document).keydown(function(e) {
	    switch(e.which) {

	    	case 37: changeToOne();
	    	break;

	        case 38: $('html, body').animate({scrollTop: 0}, 800);
	        break;

	        case 39: changeToTwo(); 
	        break;

	        case 40: $('html, body').animate({scrollTop: ($(document).height()*0.5)}, 800);
	        break;

	        default: return; 
	    }
	    e.preventDefault(); 
	});

	$(".button").click(function(){
		 $('html, body').animate({scrollTop: ($(document).height()*0.5)}, 800);
	});

	$(this).scroll(function(){
		if($(this).scrollTop() >($(document).height())*0.75/2) 
		{
			$('.jumbo-bottom-fixed').css({"visibility":"visible"});

		}
		if($(this).scrollTop() < ($(document).height())*0.75/2) 
		{
			$('.jumbo-bottom-fixed').css({"visibility":"hidden"});
		}
	});
	
	$('#o').on('click', function(event){     
   		 event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
var brnch = null;
var ssem = null;

function selectSub(brnch,sem)
{


	if(brnch == "ce"||brnch == "mech"||brnch == "cse")
	{	
		if(sem==1){
		console.log("if 1");
		$('#subject').empty();
		$('#subject').append(new Option('Select Subject','null'));
		$('#subject').append(new Option('Engineering Physics','PH01'));
		$('#subject').append(new Option('Engineering Mathematics-1','MA01'));
		$('#subject').append(new Option('Basic Mechanical Engg.','ME01'));
		$('#subject').append(new Option('Basic Civil Engg.','CE09'));
		$('#subject').append(new Option('Basic Computer Prog.','CS03'));
		}
		if(sem==2)
		{
			console.log("if2");
		$('#subject').empty();
		$('#subject').append(new Option('Select Subject','null'));
		$('#subject').append(new Option('Engineering Chemistry','CH01'));
		$('#subject').append(new Option('Engineering Mathematics-2','MA02'));
		$('#subject').append(new Option('Engg. Graphics','ME03'));
		$('#subject').append(new Option('Basic Elecrical & Electronics Engg','EE56'));
		$('#subject').append(new Option('Communication Skills','HS01'));
		}
	}

	else
	{
		console.log("else part");
		$('#subject').empty();
		$('#subject').append(new Option('Select Subject','null'));
	}
}

$('#branch').change(function(){
	brnch = $(document).find('#branch option:selected').val();
	selectSub(brnch,sem);
	console.log(brnch+' '+sem );
});


$('#sem').change(function(){
	sem = $(document).find('#sem option:selected').val();
	selectSub(brnch,sem);
	console.log(brnch+' '+sem );
	

	

});



});