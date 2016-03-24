jQuery(document).ready( function() {
  (function ($) {
	   $('#myModal').on('shown.bs.modal', function () {
		  $('#myInput').focus()
		})

	   var multi = $('.multi_button a')
	   var tutorial = $('#tutorial');
	   var video_button = $('.video_button a');
	   var quiz_button = $('.quiz_button a');
	   var elli_button = $('.elli_button a');
	   var one_button = $('.one_button a');
	   var two_button = $('.two_button a');
       var hide = $('.hide_options li');
       var main = $('#main-column');
       var customers = $('.customer_button a');
       var army = $('.army div');
	   var airforce = $('.airforce div');
	   var navy = $('.navy div');
	   var CBD = $('.CBD div');
	   var DTRA = $('.DTRA div');
	   var MDA = $('.MDA div');
	   var USSOCOM = $('.USSOCOM div');
	   var content = $('.content');
	   var pagination = $('.pagination');
	   var expand = $('.content ul li .expand');
	   var list = $('.list');
	   var killOne = $('#k_one');
	   var killTwo = $('#k_two');
	   var killThree = $('#k_three');
	   var killFour = $('#k_four');
	   var killFive = $('#k_five');
	   var killSix = $('#k_six');

        $(hide).click(function(){
            $(main).toggleClass('collapsed');
        })

		$(multi).click(function() {  
			$('.selected').removeClass('selected');
			$(this).parent().parent('li').addClass('selected');
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("two");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("video");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("quiz");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("customers");
			$(one_button).show();
			$(two_button).show();
			$(this).parent().parent().parent().parent().siblings(tutorial).addClass("one");   
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("elligible");    
		});

		$(one_button).click(function() {  
			$(tutorial).removeClass("two");
			$(tutorial).removeClass("video");
			$(tutorial).removeClass("quiz");
			$(tutorial).removeClass("customers");
			$(one_button).show();
			$(two_button).show();
			$(tutorial).addClass("one");      
		});

		$(two_button).click(function() {  
			$(tutorial).removeClass("one");
			$(tutorial).removeClass("video");
			$(tutorial).removeClass("quiz");
			$(tutorial).removeClass("customers");
			$(one_button).show();
			$(two_button).show();
			$(tutorial).addClass("two");      
		});

		$(video_button).click(function() {
			$('.selected').removeClass('selected');
			$(this).parent().parent('li').addClass('selected');
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("one");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("two");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("quiz");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("customers");
			$(one_button).hide();
			$(two_button).hide();
			$(this).parent().parent().parent().parent().siblings(tutorial).addClass("video");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("elligible");       
		});

		$(quiz_button).click(function() {  
			$('.selected').removeClass('selected');
			$(this).parent().parent('li').addClass('selected');
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("one");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("two");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("video");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("customers");
			$(one_button).hide();
			$(two_button).hide();
			$(this).parent().parent().parent().parent().siblings(tutorial).addClass("quiz");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("elligible");       
		});

		$(elli_button).click(function() {  
			$('.selected').removeClass('selected');
			$(this).parent().parent('li').addClass('selected');
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("one");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("two");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("video");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("customers");
			$(one_button).hide();
			$(two_button).hide();
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("quiz");  
			$(this).parent().parent().parent().parent().siblings(tutorial).addClass("elligible");      
		});

		$(customers).click(function() {
			$('.selected').removeClass('selected');
			$(this).parent().parent('li').addClass('selected');
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("one");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("two");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("video");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("quiz");
			$(one_button).hide();
			$(two_button).hide();
			$(this).parent().parent().parent().parent().siblings(tutorial).addClass("customers");
			$(this).parent().parent().parent().parent().siblings(tutorial).removeClass("elligible"); 
		})

		$(army).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active'); 
			$(content).hide();
			$('#army').show();
			$(pagination).show();
		});
		$(airforce).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active'); 
			$(content).hide();
			$('#airforce').show();
			$(pagination).hide();
		});
		$(navy).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active');   
			$(content).hide();
			$('#navy').show();
			$(pagination).hide();
		});
		$(CBD).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active');   
			$(content).hide();
			$('#CBD').show();
			$(pagination).hide();
		});
		$(DTRA).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active');   
			$(content).hide();
			$('#DTRA').show();
			$(pagination).hide();
		});
		$(MDA).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active');   
			$(content).hide();
			$('#MDA').show();
			$(pagination).hide();
		});
		$(USSOCOM).click(function() {  
			$('.active').removeClass('active');
			$(this).parent('li').addClass('active');   
			$(content).hide();
			$('#USSOCOM').show();
			$(pagination).hide();
		});

		$(expand).click(function() {
			$(this).toggleClass('open');
			$(this).siblings('.list').toggleClass('open');
		})

        // Quiz
        var quiz = $('#quiz form');
        var input = $('#quiz form input');
        var next = $('.next');
        var submit = $('#buttonDiv #button');
        var submit_two = $('#buttonDiv_two #button');
        var answer = $('#answerSheet')

        $(next).click(function(){
            $(this).parent().parent('form').removeClass('show');
            $(this).parent().parent('form').next('form').addClass('show');
        })
        $(submit).click(function(){
            $(this).parent('#buttonDiv').hide();
            $(quiz).addClass('done');
            $(next).hide();
            $(input).prop('disabled', true);
            $(answer).show();
        })
        $(submit_two).click(function(){
            $(this).parent('#buttonDiv_two').hide();
            $(quiz).addClass('done');
            $(next).hide();
            $(input).prop('disabled', true);
            $(answer).show();
        })

	    function calcScore() {
	        var results = {right: 0, wrong: 0, answered: [], unanswered: [], missed: []};
	        $("form .tab").each(function(index) {
	            var chosen = $(this).find("input:checked");
	            if (chosen.length) {
	                results.answered.push(index);
	                if (chosen.val() == answers[(index * 2) + 1]) {
	                    results.right++;
	                    results.answered.push(index);
	                } else {
	                    results.wrong++;
	                    results.missed.push(index);
	                }
	            } else {
	                results.unanswered.push(index);
	            }
	        });
	        return(results);
	    }

	    $("#buttonDiv").click(function() {
	        var results = calcScore();
	        var str = "You got " + results.right + " out of 5 correct";
	        $(document.createElement('h3')).css({
	             'text-align': 'center',
	             'font-size': '2.5em'
	         }).text(Math.round(results.right / 5 * 100) + '%').insertAfter('.results_area');
	        var result = Math.round(results.right / 5 * 100);
	        $("#results").html(str);
	      });
	    $("#buttonDiv_two").click(function() {
	        var results = calcScore();
	        var str = "You got " + results.right + " out of 6 correct";
	        $(document.createElement('h3')).css({
	             'text-align': 'center',
	             'font-size': '2.5em'
	         }).text(Math.round(results.right / 6 * 100) + '%').insertAfter('.results_area');
	        var result = Math.round(results.right / 6 * 100);
	        $("#results").html(str);
	      });


	    // Elligibility
        var test = $('#elligible form');
        var input_two = $('#elligible form input');
        var nextElli = $('.next_elli');
        var submit_two = $('#elligible #buttonId #submit');
        var answer_two = $('#elligible #answerSheet_two')

        $(nextElli).click(function(){
            $(this).parent('form').removeClass('show');
            $(this).parent('form').next('form').addClass('show');
        })
        $(submit_two).click(function(){
            $(this).parent('#buttonId').hide();
            $(test).addClass('done');
            $(nextElli).hide();
            $(input_two).prop('disabled', true);
            $(answer_two).show();
        })

	    function calcScore() {
	        var results_two = {right: 0, wrong: 0, answered: [], unanswered: [], missed: []};
	        $("form .tab").each(function(index) {
	            var chosen_two = $(this).find("input:checked");
	            if (chosen_two.length) {
	                results_two.answered.push(index);
	                if (chosen_two.val() == answers[(index * 2) + 1]) {
	                    results_two.right++;
	                    results_two.answered.push(index);
	                } else {
	                    results_two.wrong++;
	                    results_two.missed.push(index);
	                }
	            } else {
	                results_two.unanswered.push(index);
	            }
	        });
	        return(results_two);
	    }

	    $("#buttonId").click(function() {
	        var results_two = calcScore();
	        var str = "You got " + results_two.right + " out of 9 correct";
	        $("#results_two").html(str);
	        if(results_two.right >= 8){
	            $('#explanation').html("<span class='congrats'>Congratulations, This program is for you</span>");
	        } else if(results_two.right < 8){
	        	$('#explanation').html("<span class='sorry'>Sorry, This program is not for you</span>");
	        }
	      });
	    

	    // Kill Switches
		$(killOne).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_one').show();
		});
		$(killTwo).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_two').show();
		});
		$(killThree).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_three').show();
		});
		$(killFour).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_four').show();
		});
		$(killFive).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_five').show();
		});
		$(killSix).click(function() {
		    $(test).toggleClass('hide'.checked);
		    $('.k_six').show();
		});


		})(jQuery);

});


