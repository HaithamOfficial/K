function minToHours(t) {
    var e = parseInt(Math.floor(t / 60)),
        a = parseInt(t % 60);
    return e <= 0 ? a + "دقيقة " : e + "ساعة  و " + a + " دقيقة "
}
$(document).ready(function () {
    setInterval(function () {
        $(".underway1").fadeOut(700), $(".underway1").fadeIn(700)
    }, 1e3), $(".date").each(function () {
        var t = $(this),
            e = t.data("start"),
            a = t.data("gameends"),
            n = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            m = moment(a, "YYYY-MM-DD HH:mm:ssZ"),
            d = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            r = n.diff(d, "minutes"),
            i = m.diff(d, "minutes");
        switch (!0) {
        case 30 < r:
            var o = moment.utc(e).toDate();
            t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("لم تبدا بعد").addClass("not-start");
            break;
        case 0 < r:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("بعد قليل").addClass("soon");
            break;
        case 0 < i:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find(".date").html("جارية الآن").addClass("live"), t.parent().find("#match-time").text(moment(o).format("LT"));
            break;
        default:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find(".date").html("إنتهت المباراة").addClass("end")
        }
    })
});

function rdmode() {
    localStorage.setItem("mode", "rdmode" === localStorage.getItem("mode") ? "light" : "rdmode"), "rdmode" === localStorage.getItem("mode") ? document.querySelector("body").classList.add("Night") : document.querySelector("body").classList.remove("Night")
};
! function (s) {
    function t() {
        $("img[" + s + "]").each(function () {
            var t = this.getBoundingClientRect().top - $("body")[0].getBoundingClientRect().top;
            if (window.pageYOffset + window.innerHeight > t) {
                var e = Math.ceil(this.parentNode.offsetWidth),
                    i = Math.ceil(this.parentNode.offsetHeight),
                    n = function (t, e, i) {
                        try {
                            t = -1 !== t.indexOf("img.youtube.com") || -1 !== t.indexOf("ytimg.com") ? t.replace("/default", "/mqdefault") : t.replace(/\/(s72\-c|s40\-c|s1600\-c|s220|s113|w1600)\//, "/w" + parseInt(e) + "-h" + i + "-p-k-nu-rw-e90/")
                        } finally {
                            return t
                        }
                    }(this.getAttribute(s), e, i);
                this.setAttribute("src", n), this.removeAttribute(s), $(this).parent().removeClass("PLHolder"), $(this).parent().addClass("")
            }
        })
    }
    window.addEventListener("load", t), document.addEventListener("scroll", t)
}("data-img");

function insertAfter(e, t) {
    var n = t.parentNode;
    n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling)
}
var a3lancont = document.getElementById("leads"),
    target = document.getElementById("postsacs"),
    bungkus3 = target.getElementsByTagName("p");
2 < bungkus3.length && insertAfter(a3lancont, bungkus3[2]);
