
function checkEmptyByID(id, msg){
	
	var trimStr =document.getElementById(id).value.trim();
	if(trimStr === ''){
		 throw msg;
	}	
}

function checkEmptyByString(str, msg){
	
	var trimStr = str.trim();

	if(trimStr === ''){
		 throw msg;
	}	
}

function cheCost(chkcost,msg){
	var cost =chkcost.trim();
	if(cost >= 1000){
		throw msg;
	}
}

function chkCountry(chk,msg){
	
	if(chk == null){
		throw msg;
	}
	
}
function validateEmail(email, msg){
	
	var emailRege = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
	
	if(emailRege.exec(email) == null){
		 throw msg;
	}	
	
}

function validatePassword(password, minNum, msg){
	
	var trimPassword = password.trim();
	
	if(trimPassword.length < minNum)	{
		throw msg;
	}		
}

function validateTwoPassword(password1, password2, msg){
	
	if(password1 !== password2){
		throw msg;
	}		
}
function checknumber(num,msg){
	
	if(isNaN(num)){
		
		throw msg;
	}
	
}
function cheNumberLessThenZero(num,msg){
	
	if(num < 0 || num >101){
		
		throw msg;
	}	
}
function cheBriefLessTehenThirty(spmExpBrief,minNum,msg){
	var trimspmExpBrief = spmExpBrief.trim();
	if(trimspmExpBrief.length < minNum){
		throw msg;
	}
}

function cheidisequlstring(chk,chk2,msg){
	var trimchk = chk.trim();
	var trimchk2 = chk2.trim();
	
	if(trimchk === trimchk2){
		throw msg;
	}
}

function chkNumberbetweenZerotoThreeHundred(num,msg){
	
	if(num < 0 || num >301){
		
		throw msg;
	}	
}
function checkMoblie(formValue,msg){
   	re = /^[09]{2}[0-9]{8}$/;
    if (!re.test(formValue)){
		throw msg;
	}

}

jQuery(document).ready(function(e) {
	
	var mainHeader = $(".topNav"),
		secondaryNavigation = $(".subMenuLBg"),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $(".sub-nav-hero"),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on("click", ".nav-trigger", function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass("nav-open");
	});

	$(window).on("scroll", function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on("resize", function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there"s no secondary nav or secondary nav is below primary nav
		if (previousTop - currentTop > scrollDelta) {
			//if scrolling up...
			mainHeader.removeClass("is-hidden");
		} else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
			//if scrolling down...
			mainHeader.addClass("is-hidden");
		}
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop) {
			//if scrolling up... 
			if(currentTop < secondaryNavOffsetTop) {
				//secondary nav is not fixed
				mainHeader.removeClass("is-hidden");
				secondaryNavigation.removeClass("fixed slide-up");
				belowNavHeroContent.removeClass("secondary-nav-fixed");
			} else if(previousTop - currentTop > scrollDelta) {
				//secondary nav is fixed
				mainHeader.removeClass("is-hidden");
				secondaryNavigation.removeClass("slide-up").addClass("fixed"); 
				belowNavHeroContent.addClass("secondary-nav-fixed");
			}
			
		} else {
			//if scrolling down...	
			if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
				//hide primary nav
				mainHeader.addClass("is-hidden");
				secondaryNavigation.addClass("fixed slide-up");
				belowNavHeroContent.addClass("secondary-nav-fixed");
			} else if(currentTop > secondaryNavOffsetTop) {
				//once the secondary nav is fixed, do not hide primary nav if you haven"t scrolled more than scrollOffset 
				mainHeader.removeClass("is-hidden");
				secondaryNavigation.addClass("fixed").removeClass("slide-up");
				belowNavHeroContent.addClass("secondary-nav-fixed");
			}
		}
	}

});
