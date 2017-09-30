var xmlHttp=new XMLHttpRequest();
var player_name=prompt('調べたいプレイヤーネームを正確に入力してください', '');
var month=prompt('調べたい月を入力してください\n(例:2017年3月を調べたい場合は201703と入力)', '');
var index=0;
var date = new Date();
var now = date.getFullYear() + "" + ("0"+(date.getMonth()+1)).slice(-2);
if(month.length == 6 && 201608 <= month && month <= now){
var flag=false;
while(!flag&&index<10){
  xmlHttp.open("GET","https://mypage.groovecoaster.jp/sp/json/monthly_ranking.php?id="+month+"&page="+index,false); 
  xmlHttp.send(null);
  var data=JSON.parse(xmlHttp.responseText);
  for(var i=0;i<data.rank.length;i++){
    if(data.rank[i].player_name===player_name){
      alert(player_name+"さんの"+month+"の月間ランキングは"+data.rank[i].rank+"位です");
      flag=true;
      break;
    }
  }
  index++;
}
}
