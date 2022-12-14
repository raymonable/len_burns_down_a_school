tyrano.plugin.kag.menu = {
    tyrano: null, kag: null, snap: null, init: function () { }, showMenu: function (call_back) {
        if (this.kag.layer.layer_event.css("display") == "none" && this.kag.stat.is_strong_stop != true) return false; var that = this; this.kag.stat.is_skip = false; var layer_menu = this.kag.layer.getMenuLayer(); layer_menu.empty(); this.kag.html("menu", { "novel": $.novel }, function (html_str) {
            var j_menu = $(html_str); layer_menu.append(j_menu); layer_menu.find(".menu_skip").click(function () {
                layer_menu.html(""); layer_menu.hide();
                if (that.kag.config.configVisible == "true") $(".button_menu").show(); that.kag.stat.is_skip = true; if (that.kag.layer.layer_event.css("display") == "none"); else that.kag.ftag.nextOrder()
            }); layer_menu.find(".menu_close").click(function (e) { layer_menu.hide(); if (that.kag.config.configVisible == "true") $(".button_menu").show() }); layer_menu.find(".menu_window_close").click(function (e) { that.kag.layer.hideMessageLayers(); layer_menu.hide(); if (that.kag.config.configVisible == "true") $(".button_menu").show() }); layer_menu.find(".menu_save").click(function (e) { that.displaySave() });
            layer_menu.find(".menu_load").click(function (e) { that.displayLoad() }); layer_menu.find(".menu_back_title").click(function () { if (!confirm($.lang("go_title"))) return false; localStorage.removeItem('menu_okay'); window.parent.location.reload(false); }); layer_menu.show(); $(".button_menu").hide()
        })
    }, displaySave: function () {
        var that = this; this.kag.stat.is_skip = false; var array_save = that.getSaveData(); var array = array_save.data; var layer_menu = that.kag.layer.getMenuLayer(); for (var i = 0; i < array.length; i++)array[i].num = i; this.kag.html("save", { array_save: array, "novel": $.novel },
            function (html_str) { var j_save = $(html_str); j_save.find(".save_list").css("font-family", that.kag.config.userFace); j_save.find(".save_display_area").each(function () { $(this).click(function (e) { var num = $(this).attr("data-num"); that.snap = null; that.doSave(num); var layer_menu = that.kag.layer.getMenuLayer(); layer_menu.hide(); layer_menu.empty(); if (that.kag.config.configVisible == "true") $(".button_menu").show() }) }); var layer_menu = that.kag.layer.getMenuLayer(); that.setMenu(j_save) })
    }, doSave: function (num) {
        var array_save =
            this.getSaveData(); var data = {}; var that = this; if (this.snap == null) this.snapSave(this.kag.stat.current_message_str, function () { data = that.snap; data.save_date = $.getNowDate() + "\u3000" + $.getNowTime(); array_save.data[num] = data; $.setStorage(that.kag.config.projectID + "_tyrano_data", array_save) })
    }, doSetAutoSave: function () { var data = this.snap; data.save_date = $.getNowDate() + "\u3000" + $.getNowTime(); $.setStorage(this.kag.config.projectID + "_tyrano_auto_save", data) }, loadAutoSave: function () {
        var data = $.getStorage(this.kag.config.projectID +
            "_tyrano_auto_save"); if (data) data = eval("(" + data + ")"); else return false; this.loadGameData($.extend(true, {}, data))
    }, snapSave: function (title, call_back) {
        var that = this; var _current_order_index = that.kag.ftag.current_order_index - 1; var _stat = $.extend(true, {}, $.cloneObject(that.kag.stat)); if (this.kag.config.configThumbnail == "false") {
            var img_code = ""; var data = {}; data.title = title; data.stat = _stat; data.current_order_index = _current_order_index; data.save_date = $.getNowDate() + "\u3000" + $.getNowTime(); data.img_data =
                img_code; var layer_obj = that.kag.layer.getLayeyHtml(); data.layer = layer_obj; that.snap = $.extend(true, {}, $.cloneObject(data)); if (call_back) call_back()
        } else html2canvas($("#tyrano_base").get(0), {
            onrendered: function (canvas) {
                var img_code = canvas.toDataURL(); var data = {}; data.title = title; data.stat = _stat; data.current_order_index = _current_order_index; data.save_date = $.getNowDate() + "\u3000" + $.getNowTime(); data.img_data = img_code; var layer_obj = that.kag.layer.getLayeyHtml(); data.layer = layer_obj; that.snap = $.extend(true,
                    {}, $.cloneObject(data)); if (call_back) call_back()
            }
        })
    }, displayLoad: function () {
        var that = this; this.kag.stat.is_skip = false; var array_save = that.getSaveData(); var array = array_save.data; var layer_menu = that.kag.layer.getMenuLayer(); for (var i = 0; i < array.length; i++)array[i].num = i; this.kag.html("load", { array_save: array, "novel": $.novel }, function (html_str) {
            var j_save = $(html_str); j_save.find(".save_list").css("font-family", that.kag.config.userFace); j_save.find(".save_display_area").each(function () {
                $(this).click(function (e) {
                    var num =
                        $(this).attr("data-num"); that.snap = null; that.loadGame(num); var layer_menu = that.kag.layer.getMenuLayer(); layer_menu.hide(); layer_menu.empty(); if (that.kag.config.configVisible == "true") $(".button_menu").show()
                })
            }); var layer_menu = that.kag.layer.getMenuLayer(); that.setMenu(j_save)
        })
    }, loadGame: function (num) { var array_save = this.getSaveData(); var array = array_save.data; if (array[num].save_date == "") return; this.loadGameData($.extend(true, {}, array[num])) }, loadGameData: function (data) {
        var auto_next = "no"; this.kag.layer.setLayerHtml(data.layer);
        this.kag.stat = data.stat; if (this.kag.stat.is_strong_stop == true) auto_next = "stop"; else this.kag.stat.is_strong_stop = false; this.kag.ftag.startTag("stopbgm", { stop: "true" }); this.kag.ftag.startTag("stopse", { stop: "true" }); if (this.kag.stat.current_bgm != "") { var mstorage = this.kag.stat.current_bgm; var pm = { loop: "true", storage: mstorage, stop: "true" }; this.kag.ftag.startTag("playbgm", pm) } this.kag.setCursor(this.kag.stat.current_cursor); $(".event-setting-element").each(function () {
            var j_elm = $(this); var kind = j_elm.attr("data-event-tag");
            var pm = JSON.parse(j_elm.attr("data-event-pm")); var event_tag = object(tyrano.plugin.kag.tag[kind]); event_tag.setEvent(j_elm, pm)
        }); var insert = { name: "call", pm: { storage: "make.ks", "auto_next": auto_next }, val: "" }; this.kag.ftag.nextOrderWithIndex(data.current_order_index, data.stat.current_scenario, true, insert, "yes")
    }, setMenu: function (j_obj) {
        var that = this; var layer_menu = this.kag.layer.getMenuLayer(); layer_menu.empty(); var menu_html = "" + "<div class='menu_item menu_close' style='float:right;'><img src='tyrano/images/kag/menu_button_close.png' /></div>" +
            "<div style='clear:both'></div>" + ""; var j_menu = $(menu_html); layer_menu.append(j_menu); layer_menu.find(".menu_close").click(function (e) { layer_menu.hide(); if (that.kag.config.configVisible == "true") $(".button_menu").show() }); layer_menu.append(j_obj); layer_menu.show()
    }, hideMenu: function () { }, getSaveData: function () {
        var tmp_array = $.getStorage(this.kag.config.projectID + "_tyrano_data"); if (tmp_array) return eval("(" + tmp_array + ")"); else {
            tmp_array = new Array; var root = { kind: "save" }; for (var i = 0; i < 5; i++) {
                var json =
                    {}; json.title = $.lang("not_saved"); json.current_order_index = 0; json.save_date = ""; json.img_data = ""; json.stat = {}; tmp_array.push(json)
            } root.data = tmp_array; return root
        }
    }, displayLog: function () {
        var that = this; this.kag.stat.is_skip = false; var j_save = $("<div></div>"); this.kag.html("backlog", { "novel": $.novel }, function (html_str) {
            var j_menu = $(html_str); var layer_menu = that.kag.layer.getMenuLayer(); layer_menu.empty(); layer_menu.append(j_menu); layer_menu.find(".menu_close").click(function () {
                layer_menu.hide(); if (that.kag.config.configVisible ==
                    "true") $(".button_menu").show()
            }); var log_str = ""; var array_log = that.kag.variable.tf.system.backlog; for (var i = 0; i < array_log.length; i++)log_str += array_log[i] + "<br />"; layer_menu.find(".log_body").html(log_str); layer_menu.show(); layer_menu.find(".log_body").scrollTop(9999999999); $(".button_menu").hide()
        })
    }, test: function () { }
};
