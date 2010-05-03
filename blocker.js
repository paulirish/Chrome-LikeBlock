// ==UserScript==
// @name          LikeBlock
// @namespace     http://www.paulirish.com
// @description	  Blocks Facebook Like buttons
// @version 0.1.2
// @include       http://*
// ==/UserScript==



    var ss      = document.createElement('style'),
        head    = document.head || document.querySelector('head');
          
    ss.innerHTML = 'iframe[src^="http://www.facebook.com/plugins/like.php"] { display: none; }';
    head.appendChild(ss);

    // for some reason qSA throws an error on selecting iframes by src.
    Array.prototype.slice.call(document.querySelectorAll('iframe')).filter(function(v,k,arra){
      if (v.src.indexOf('http://www.facebook.com/plugins/like.php') === 0) return true;
    }).forEach(function(v,k,arr){
        
        // kill the iframe to avoid the 12 resources from downloading.
        // thx @raycmorgan
        // Yes, that's 12 requests PER like button: http://bit.ly/fblikeperfisbad (see Act Three)
        v.parentNode.removeChild(v);
    })
    
   
   