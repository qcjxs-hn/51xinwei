//点击下一个
function djxyg(params) {
    var kjsz = document.getElementsByClassName("course_chapter_item user-no-select ng-scope");
    //控件数组
    // console.log(kjsz);

    for (let i = 0; i < kjsz.length; i++) {
        //  console.log(kjsz[i].className);

        if (kjsz[i].className === "course_chapter_item user-no-select ng-scope active") {
            //console.log(kjsz[i]);
            //console.log(kjsz[i + 1]);
            //console.log(kjsz[i + 1].getElementsByClassName("section_title ng-binding"));
            kjsz[i+1].getElementsByClassName("section_title ng-binding")[0].click();
            console.log("已点击下一个！");

        }

    }  
}

setInterval(
    function () {
       
        var spl=document.getElementsByClassName("courseware_menu_item pull-left ng-scope");
        // 视频栏
        var ywc = document.getElementsByClassName("glyphicon glyphicon-ok");
        // 
        var qx=document.getElementsByClassName("layui-layer-btn1");
        // 询问取消
        var flag=0;
        //  console.log(ywc.length);
        //console.log(kjsz);
        if(qx.length !=0){
            qx[0].click();
        }
        if (ywc.length != 0) {
            if(spl.length>1){
                // console.log(spl);
                for (let index = 0; index < spl.length; index++) {
                    console.log(flag);
                    if(spl[index].getElementsByClassName("menu_item_icon user-no-select")[0].getElementsByClassName("item_name ng-binding")[0].innerHTML==="文档"){
                    if(spl[index].className === "courseware_menu_item pull-left ng-scope"){ 
                            // console.log(spl[index].getElementsByClassName("menu_item_icon user-no-select"));
                           spl[index].getElementsByClassName("menu_item_icon user-no-select")[0].click();
                            console.log("已点击文档！");
                            flag=1;
                            // kjsz = document.getElementsByClassName("course_chapter_item user-no-select ng-scope");
                            v1=setInterval(() => {
                                console.log(flag);
                                if(flag!=0){
                                    djxyg();
                                    flag=0;
                                    clearInterval(v1);
                                } 
                            }, 3000);
                          

                    }
                    }

                }
        
                    // else if(spl[index].getElementsByClassName("menu_item_icon user-no-select")[0].getElementsByClassName("item_name ng-binding")[0].innerHTML==="视频"){
                    //     if(spl[index].className === "courseware_menu_item pull-left ng-scope active"){
                    //         for (let index2 = index; index2 < spl.length; index2++) {
                    //             //console.log(spl[index2].getElementsByClassName("menu_item_icon user-no-select"));
                    //             var wc = document.getElementsByClassName("glyphicon glyphicon-ok");
                    //             if(wc.length!=0){
                    //             setTimeout(spl[index2].getElementsByClassName("menu_item_icon user-no-select")[0].click(),1000);    
                    //             console.log("已点击视频！");
                    //             }
                    //         }
                            
                    //     }
                    // }
                }
                    
                
            else{
                djxyg();
        }
    }
    

    }, 10000)
