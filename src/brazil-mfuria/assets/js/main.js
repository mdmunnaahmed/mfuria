$(".feature-item").on("click", function () {
	$(this).addClass('active');
    $(this).siblings(".feature-item").removeClass("active");
});