//在QQ空间的控制台运行此脚本就可以对空间的所有说说进行点赞

function autoClick(){
    var zan = document.getElementsByClassName("item qz_like_btn_v3");
    for(var i= 0; i<zan.length; i++){
        if(zan[i].attributes[6].value == "like"){
            zan[i].firstChild.click();
        }
    };
    window.scrollByPages(5);
}
window.setInterval(autoClick,2000);