javascript:(function(url){(function(yt_at,video_check){if(yt_at===-1){alert("Must_be_Youtube!");return;}else{yt_at+=7;}if(video_check===-1){alert("Must_be_video!");return;};(function(url,and_sign){if(and_sign!==-1)url=url.slice(0,and_sign+2);window.open(url,"_blank")})(url.replace("youtube", "backupmp3"),url.indexOf("&"))})((url.indexOf("youtube")),url.indexOf("watch?v="));})(window.location.href);
