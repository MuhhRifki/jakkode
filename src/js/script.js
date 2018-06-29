$(document).ready(() => {
    $(".__wr").click(() => {
        $("._md").css("display", "block");
    });
    $('.__x').click(() => {
        $("._md").css("display", "none");
    });
    $('.__cencel').click(() => {
        $("._md").css("display", "none");
    });
});

// course detail

$(document).ready(() => {
    $(".__att").hide();
    $(".__dow").hide();
    $(".__ast").hide();
    $(".__grd").hide();
    $(".__abt").hide();
    $("#btn_assign").click(() => {
        $("#btn_assign").addClass("_active _ta5l3a");
        $("#btn_attend").removeClass("_active _ta5l3a");
        $("#btn_downld").removeClass("_active _ta5l3a");
        $("#btn_assist").removeClass("_active _ta5l3a");
        $("#btn_grade").removeClass("_active _ta5l3a");
        $("#btn_about").removeClass("_active _ta5l3a");
        $(".__ass").show();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_attend").click(() => {
        $("#btn_assign").removeClass("_active _ta5l3a");
        $("#btn_attend").addClass("_active _ta5l3a");
        $("#btn_downld").removeClass("_active _ta5l3a");
        $("#btn_assist").removeClass("_active _ta5l3a");
        $("#btn_grade").removeClass("_active _ta5l3a");
        $("#btn_about").removeClass("_active _ta5l3a");
        $(".__ass").hide();
        $(".__att").show();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_downld").click(() => {
        $("#btn_assign").removeClass("_active _ta5l3a");
        $("#btn_attend").removeClass("_active _ta5l3a");
        $("#btn_downld").addClass("_active _ta5l3a");
        $("#btn_assist").removeClass("_active _ta5l3a");
        $("#btn_grade").removeClass("_active _ta5l3a");
        $("#btn_about").removeClass("_active _ta5l3a");
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").show();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_assist").click(() => {
        $("#btn_assign").removeClass("_active _ta5l3a");
        $("#btn_attend").removeClass("_active _ta5l3a");
        $("#btn_downld").removeClass("_active _ta5l3a");
        $("#btn_assist").addClass("_active _ta5l3a");
        $("#btn_grade").removeClass("_active _ta5l3a");
        $("#btn_about").removeClass("_active _ta5l3a");
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").show();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_grade").click(() => {
        $("#btn_assign").removeClass("_active _ta5l3a");
        $("#btn_attend").removeClass("_active _ta5l3a");
        $("#btn_downld").removeClass("_active _ta5l3a");
        $("#btn_assist").removeClass("_active _ta5l3a");
        $("#btn_grade").addClass("_active _ta5l3a");
        $("#btn_about").removeClass("_active _ta5l3a");
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").show();
        $(".__abt").hide();
    });
    $("#btn_about").click(() => {
        $("#btn_assign").removeClass("_active _ta5l3a");
        $("#btn_attend").removeClass("_active _ta5l3a");
        $("#btn_downld").removeClass("_active _ta5l3a");
        $("#btn_assist").removeClass("_active _ta5l3a");
        $("#btn_grade").removeClass("_active _ta5l3a");
        $("#btn_about").addClass("_active _ta5l3a");
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").show();
    });
});

// course

$(document).ready(() => {
    $(".__last").hide();
    $(".__all").hide();

    $("#btnlast").click(() => {
        $("#btnlast").addClass("_active _ta5l3a");
        $("#btncurrent").removeClass("_active _ta5l3a");
        $("#btnall").removeClass("_active _ta5l3a");
        $(".__last").show();
        $(".__current").hide();
        $(".__all").hide();
    });
    $("#btncurrent").click(() => {
        $("#btnlast").removeClass("_active _ta5l3a");
        $("#btncurrent").addClass("_active _ta5l3a");
        $("#btnall").removeClass("_active _ta5l3a");
        $(".__last").hide();
        $(".__current").show();
        $(".__all").hide();
    });
    $("#btnall").click(() => {
        $("#btnlast").removeClass("_active _ta5l3a");
        $("#btncurrent").removeClass("_active _ta5l3a");
        $("#btnall").addClass("_active _ta5l3a");
        $(".__last").hide();
        $(".__current").hide();
        $(".__all").show();;
    });
});

// assignment

$(document).ready(() => {
    $(".__submitted").hide();
    $(".__overdue").hide();
    $(".__graded").hide();

    $("#btnnotsubmitted").click(() => {
        $("#btnnotsubmitted").addClass("_active _ta5l3a");
        $("#btnsubmitted").removeClass("_active _ta5l3a");
        $("#btnoverdue").removeClass("_active _ta5l3a");
        $("#btngraded").removeClass("_active _ta5l3a");
        $(".__notsubmitted").show();
        $(".__submitted").hide();
        $(".__overdue").hide();
        $(".__graded").hide();
    });
    $("#btnsubmitted").click(() => {
        $("#btnnotsubmitted").removeClass("_active _ta5l3a");
        $("#btnsubmitted").addClass("_active _ta5l3a");
        $("#btnoverdue").removeClass("_active _ta5l3a");
        $("#btngraded").removeClass("_active _ta5l3a");
        $(".__notsubmitted").hide();
        $(".__submitted").show();
        $(".__overdue").hide();
        $(".__graded").hide();
    });
    $("#btnoverdue").click(() => {
        $("#btnnotsubmitted").removeClass("_active _ta5l3a");
        $("#btnsubmitted").removeClass("_active _ta5l3a");
        $("#btnoverdue").addClass("_active _ta5l3a");
        $("#btngraded").removeClass("_active _ta5l3a");
        $(".__notsubmitted").hide();
        $(".__submitted").hide();
        $(".__overdue").show();
        $(".__graded").hide();
    });
    $("#btngraded").click(() => {
        $("#btnnotsubmitted").removeClass("_active _ta5l3a");
        $("#btnsubmitted").removeClass("_active _ta5l3a");
        $("#btnoverdue").removeClass("_active _ta5l3a");
        $("#btngraded").addClass("_active _ta5l3a");
        $(".__notsubmitted").hide();
        $(".__submitted").hide();
        $(".__overdue").hide();
        $(".__graded").show();
    });
});

// setting

$(document).ready(() => {
    $(".__basic").hide();

    $("#btnprofile").click(() => {
        $("#btnprofile").addClass("_active _ta5l3a");
        $("#btnbasic").removeClass("_active _ta5l3a");
        $(".__profile").show();
        $(".__basic").hide();
    });
    $("#btnbasic").click(() => {
        $("#btnprofile").removeClass("_active _ta5l3a");
        $("#btnbasic").addClass("_active _ta5l3a");
        $(".__profile").hide();
        $(".__basic").show();
    });
});

// staff

$(document).ready(() => {
    $(".__tab2").hide();
    $(".__tab3").hide();

    $("#btnTab1").click(() => {
        $("#btnTab1").addClass("_ta5l3a");
        $("#btnTab2").removeClass("_ta5l3a");
        $("#btnTab3").removeClass("_ta5l3a");
        $(".__tab1").show();
        $(".__tab2").hide();
        $(".__tab3").hide();
    });
    $("#btnTab2").click(() => {
        $("#btnTab1").removeClass("_ta5l3a");
        $("#btnTab2").addClass("_ta5l3a");
        $("#btnTab3").removeClass("_ta5l3a");
        $(".__tab1").hide();
        $(".__tab2").show();
        $(".__tab3").hide();
    });
    $("#btnTab3").click(() => {
        $("#btnTab1").removeClass("_ta5l3a");
        $("#btnTab2").removeClass("_ta5l3a");
        $("#btnTab3").addClass("_ta5l3a");
        $(".__tab1").hide();
        $(".__tab2").hide();
        $(".__tab3").show();
    });
});

// _tb3g

$(document).ready(() => {
    $(".__menu2").hide();
    $(".__menu3").hide();
    $(".__menu4").hide();
    $(".__menu5").hide();

    $(".__btnmenu1").click(() => {
        $(".__btnmenu1").addClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").show();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu2").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").addClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").show();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu3").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").addClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").show();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu4").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").addClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").show();
        $(".__menu5").hide();
    });
    $(".__btnmenu5").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").addClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").show();
    });
});

$(document).ready(() => {
    $('.__wr2').click(() => {
        $("._md2").css("display", "block");
    });
    $('.__x2').click(() => {
        $("._md2").css("display", "none");
    });
    $('.__cencel2').click(() => {
        $("._md2").css("display", "none");
    });
});