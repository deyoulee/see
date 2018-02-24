/**
 * Author: Deyou Lee(lideyou) <deyoulee@126.com>
 * Date: 2018/1/5
 */

$(function () {
    // Sidebar
    sideBar();

    // Bootstrap utils
    bsUtils();

});

/**
 * Sidebar handler
 */
function sideBar() {
    $('.sidebar-collapse').on('click', function () {
        $('.sidebar').toggleClass('active');
        $('.main').toggleClass('active')
    });

    var $sb = $('.sidebar');
    if (!$sb.hasClass('sidebar-mini')) {
        $('.sidebar [data-toggle="tooltip"]').tooltip('disable');
    }

    $('.sidebar-toggler-icon').on('click', function () {
        if (!$sb.hasClass('sidebar-mini')) {
            $sb.addClass('sidebar-mini');
            $('.sidebar [data-toggle="tooltip"]').tooltip('enable');
        } else {
            $('.sidebar [data-toggle="tooltip"]').tooltip('disable');
            $sb.removeClass('sidebar-mini');
        }
    });

    // Caret rotation.
    $('.nav-item>.nav-link').on('click', function () {
        $(this).find('.fa-caret-right').toggleClass('fa-rotate-90');
    });
}

/**
 * Bootstrap utils.
 */
function bsUtils() {
    // Popover and Tooltips
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    // Modal
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('whatever'); // Extract info from data-* attributes

        // Update the modal's content.
        var modal = $(this);
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })
}
