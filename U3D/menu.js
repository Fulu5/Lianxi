var imageMenu :Texture2D;
 
var imageItem :Texture2D;
 
// 通知屏幕绘制
function OnGUI () {
 
	GUI.DrawTexture(Rect(0,0,640,960),imageMenu);
 
    // 得到多点触摸的数量
     var touchCount = iPhoneInput.touchCount;
     for(var i = 0; i < touchCount; i++)
     {
        // 得到循环中每一个多点触摸的位置
         var iPos = iPhoneInput.GetTouch(i).position;
        //  触摸的x坐标
         var x = iPos.x;
        //  触摸的y坐标（左上角为00点的Y坐标）
     	var y = iPos.y;
 
  	    GUI.DrawTexture(Rect(x,960 - y ,120,120),imageItem);
 
        //   因为取得的y坐标是左上角00点的坐标，而Unity绘制是以左下角为00点的坐标，不处理直接用y的话坐标就是一个反的，所以这里用 iPhone 4的 高度 960  减去 当前触摸的Y 就算出触摸正确的显示坐标
  	    GUI.Label(Rect(x, 960 - y,120,120),"Touch position is  " + iPos);
     }
 
}