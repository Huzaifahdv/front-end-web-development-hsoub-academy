$(document).ready(function(){
    $("#search-filters-icon").click(function(){
        $('.filter-column').slideToggle("slow");
    });

    // أحتاج فهم أعمق لطريقة عمل هذا الأمر
    $("input:checkbox").click(function(){
        var $box = $(this);
        if ($box.is(":checked")){
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        }
    })
})