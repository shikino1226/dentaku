const input = document.querySelector( 'input' )

function update( _v ){
    input.value = _v;
  };

function append( _v ){
    input.value += _v;
  };

function calc(){
  const v = input.value;{
    const f = new Function( 'return ' + v );
        update( f().toString() );
    };
};
