<?php
echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<meta charset='UTF-8'>";
echo "<title>ファイル一覧</title>";
echo "</head>";
echo "<body>";

displayDIR(".");

// 表示するリストの名前(パス) $lst
function displayDIR($lst){
echo "<dir style='margin-left:10px;background-color:#EEEEEE; clear:both;'>";
if (!is_dir($lst)) {
    //return;
}
else{

//ディレクトリ内のファイルを取り出す
$filelist=scandir($lst);

//ファイル数をチェック
$count=count($filelist);

for($i=0; $i<$count; $i++){
  $file = pathinfo($filelist[$i]);
  $file_name=$file["basename"];
  $file_ext=$file["extension"];
 
   //db形式のファイルを非表示する
   if($file_ext!="db"){
      if($file_ext == ""){
        echo "";
        if($file_name !=="." && $file_name!==".."){
          echo "<dir style='background-color:#550000; font-size:1.0em; color:#FFFFFF; clear:both;'>";
          echo $file_name;
          echo "</dir>";
          displayDIR($lst.DIRECTORY_SEPARATOR.$file_name);
        }
      }
      else if($file_ext != ""){
        echo "<dir style='background-color:#FFFFFF; font-size:1.0em; color:#FFEEEE;float:left;'>";
        
        if(end(explode('.', $file_name)) == "gif"){
           echo "<span style='clear:both;'></span><a href=".$lst.DIRECTORY_SEPARATOR.$file_name."><img src='".$lst.DIRECTORY_SEPARATOR.$file_name."' alt='".$file_name."' /></a>";
        }
        else if(end(explode('.', $file_name)) == "png"){
           echo "<span style='clear:both;'></span><a href=".$lst.DIRECTORY_SEPARATOR.$file_name."><img src='".$lst.DIRECTORY_SEPARATOR.$file_name."' alt='".$file_name."' /></a>";
        }
        else if(end(explode('.', $file_name)) == "gif"){
           echo "<a href=".$lst.DIRECTORY_SEPARATOR.$file_name.">".$file_name."</a>";
        }
        else{
           echo "<a href=".$lst.DIRECTORY_SEPARATOR.$file_name.">".$file_name."</a>";
        }
        echo "</dir>";
      }
   }
}

echo "</dir>";
return;

  $rep = 1; // 最終更新日(表示=1 非表示=0)
  $sze = 1; // ファイルサイズ(表示=1 非表示=0)
//  //ディレクトリ内のファイルを取り出す
//  if(is_array(scandir($lst) )){
//    $filelist = scandir($lst);
//
//    //ファイル数をチェック
//    $count = count($filelist);
//    //
//    echo "<h5>".$count."</h5>";
//  }
  $drc=dir($lst);
  print("<OL>");
  while($fl = $drc->read()) {
    $lfl = $lst."/".$fl;
    $din = pathinfo($lfl);
    if(is_dir($lfl) && ($fl!=".." && $fl!=".")){
      print("<h5>".$din["basename"]."</h52>");
      displayDIR($din["basename"]);
    }
    else if($fl!=".." && $fl!=".") {
      print("<LI>");
      print("<a href=".$lst."/".$fl.">".$fl."</a>");
      // ファイル更新日
      if($rep == 1 || $sze == 1) print("<FONT size='-1'> (");
      if($rep == 1) echo date("m/d",filemtime($lfl));
      if($rep == 1 && $sze == 1) print(", ");
      // ファイルサイズ
      if($sze == 1) echo round(filesize($lfl)/1024)."KB";
      if($rep == 1 || $sze == 1) print(")</FONT> ");
      print("</LI>");
    }
  }
  print("</OL>");
  $drc->close();
  }
echo "</dir>";

}
echo "</body>";
echo "</html>";
?>