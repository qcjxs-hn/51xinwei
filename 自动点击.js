setInterval(
    function () {
        var kjsz = document.getElementsByClassName("course_chapter_item user-no-select ng-scope");
        var spl=document.getElementsByClassName("courseware_menu_item pull-left ng-scope");
        var ywc = document.getElementsByClassName("glyphicon glyphicon-ok");
        var qx=document.getElementsByClassName("layui-layer-btn1");
        // console.log(ywc.length);
        //console.log(kjsz);
        if(qx.length !=0){
            qx[0].click();
        }
        if (ywc.length != 0) {
            if(spl.length>1){
                for (let index = 0; index < spl.length; index++) {
                    if(spl[index].className === "courseware_menu_item pull-left ng-scope active"){
                        for (let index2 = index; index2 < spl.length; index2++) {
                            //console.log(spl[index2].getElementsByClassName("menu_item_icon user-no-select"));
                           setTimeout(spl[index2].getElementsByClassName("menu_item_icon user-no-select")[0].click(),1000);    
                            console.log("已点击文档！");
                        }
                        
                    }
                    
                }
            }
            for (let i = 0; i < kjsz.length; i++) {
                // console.log(kjsz[i].className);

                if (kjsz[i].className === "course_chapter_item user-no-select ng-scope active") {
                    //console.log(kjsz[i]);
                    //console.log(kjsz[i + 1]);
                    //console.log(kjsz[i + 1].getElementsByClassName("section_title ng-binding"));
                    kjsz[i + 1].getElementsByClassName("section_title ng-binding")[0].click();
                    console.log("已点击下一个！");

                }

            }
        }

    }, 10000)