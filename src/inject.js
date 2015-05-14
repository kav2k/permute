// As per http://stackoverflow.com/a/11582922/934239
$.fn.textWalk = function( fn, str ) {
    var func = jQuery.isFunction( fn );
    this.contents().each( jwalk );

    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text' ) {
            if( func ) {
                fn.call( this );
            } else {
                this.data = this.data.replace( fn, str );
            }
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

function permuteAll(seed){
  $('body').textWalk(function() {
      this.data = permuteText(this.data, seed);
  });
}

permuteAll(Date.now());