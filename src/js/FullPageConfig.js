 $(document).ready(function() {
		var deleteLog = false;
var placeHolder = $('#callbacks-placeholder');

    $("#serwisCisowscy").fullpage({
		//Navigation
		menu: "#menu",
		lockAnchors: false,
		anchors: ["Strona1", "Strona2", "Strona3", "Strona4", "Strona5", "Strona6", "Strona7"],
		navigation: false,
		navigationPosition: "left",
		navigationTooltips: ["firstSlide", "secondSlide"],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: "bottom",
		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: "easeInOutBack",
		easingcss3: "ease",
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: true,
		normalScrollElements: "#element1, .element2",
		scrollOverflow: true,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		//Accessibility
		keyboardScrolling: false,
		animateAnchor: true,
		recordHistory: true,
		//Design
		controlArrows: true,
		verticalCentered: true,
		resize : true,
		sectionsColor: ["rgba(194, 112, 112, 1)", "rgba(194, 182, 112, 1)", "rgba(135, 194, 112, 1)", "rgba(112, 194, 158, 1)", "rgba(112, 158, 194, 1)", "rgba(135, 112, 194, 1)", "rgba(194, 112, 182, 1)"],
		paddingTop: "3em",
		paddingBottom: "10px",
		fixedElements: "#header, .footer",
		responsiveWidth: 0,
		responsiveHeight: 0,
		//Custom selectors
		sectionSelector: ".section",
		slideSelector: ".slide",
		//events
		onLeave: function(index, nextIndex, direction){
			if (deleteLog) {
				placeHolder.html('');
				}
			placeHolder.append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
		},
		afterLoad: function(anchorLink, index) {
			placeHolder.append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
			deleteLog = true;
		},
		afterRender: function() {
			placeHolder.append('<p>afterRender</p>');
		},
		afterResize: function() {
			placeHolder.append('<p>afterResize</p>');
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
			placeHolder.append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor + " slideIndex:" + slideIndex + '</p>');
			deleteLog = true;
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (deleteLog) {
				placeHolder.html('');
			}
			placeHolder.append('<p>onSlideLeave - anchorLink:' + anchorLink + " index:" + index + " slideIndex:" + slideIndex + " direction:" + direction + " nextSlideIndex:" + nextSlideIndex + '</p>');
		 },
	});
      $.fn.fullpage.setMouseWheelScrolling(false);
    });
    $(document).on("click", "#klawisz1", function(){
      $.fn.fullpage.moveTo("Strona1");
    });
	$(document).on("click", "#klawisz2", function(){
      $.fn.fullpage.moveTo("Strona2");
    });
	$(document).on("click", "#klawisz3", function(){
      $.fn.fullpage.moveTo("Strona3");
    });
	$(document).on("click", "#klawisz4", function(){
      $.fn.fullpage.moveTo("Strona4");
    });
	$(document).on("click", "#klawisz5", function(){
      $.fn.fullpage.moveTo("Strona5");
    });
	$(document).on("click", "#klawisz6", function(){
      $.fn.fullpage.moveTo("Strona6");
    });
	$(document).on("click", "#klawisz7", function(){
      $.fn.fullpage.moveTo("Strona7");
    });
	$(document).on("click", "#klawiszN", function(){
      $.fn.fullpage.moveSectionUp();
    });
	$(document).on("click", "#klawiszS", function(){
      $.fn.fullpage.moveSectionDown();
    });