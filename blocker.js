// ==UserScript==
// @name          LikeBlock
// @namespace     http://www.paulirish.com
// @description	  Blocks Facebook Like buttons
// @version 0.1.1
// @include       http://*
// ==/UserScript==



    var ss      = document.createElement('style'),
        head    = document.head || document.querySelector('head');
          
    ss.innerHTML = 'iframe[src^="http://www.facebook.com/plugins/like.php"] { display: none; }';
    head.appendChild(ss);


   
   /*
    // querySelectorAll doesnt like looking at iframe src's so this is my faux selector.
    Array.prototype.slice.call(document.querySelectorAll('iframe')).filter(function(v,k,arra){
      if (v.src.indexOf('http://www.facebook.com/plugins/like.php') === 0) return true;
    });
    */
   
   