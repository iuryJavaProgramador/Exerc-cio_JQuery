$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        var taskText = $('#taskInput').val();

        $('#taskList').append('<li>' + taskText + '</li>');

        $('#taskInput').val('');
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});