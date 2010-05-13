// ==UserScript==
// @name          LikeBlock
// @namespace     http://www.paulirish.com
// @description	  Blocks Facebook Like buttons
// @version 0.1.5
// @include       http://*
// ==/UserScript==

// yes, this file is installable as a greasemonkey script (in firefox)

var ss      = document.createElement('style'),
    head    = document.head || document.querySelector('head');
      
ss.innerHTML = 'iframe[src^="http://www.facebook.com/plugins/like.php"],\
                iframe[src^="http://www.facebook.com/widgets/like.php"], \
                .fb-like-btn \
                { display: none !important; }';
head.appendChild(ss);




function removeIframes(){
  
    // for some reason qSA throws an error on selecting iframes by src.
    Array.prototype.slice.call(document.querySelectorAll('iframe')).forEach(function(v,k,arra){
      
      if (v.src.indexOf('http://www.facebook.com/plugins/like.php') === 0 ||
          v.src.indexOf('http://www.facebook.com/widgets/like.php') === 0) {
            
        // kill the iframe to avoid the 12 resources from downloading.
        // thx @raycmorgan
        // Yes, that's 12 requests PER like button: 
        //     http://bit.ly/fblikeperfisbad (see Act Three)
        v.parentNode.removeChild(v);
      }
    });
    
}

removeIframes()

window.addEventListener('load',function(){ setTimeout(removeIframes,1000) },false);