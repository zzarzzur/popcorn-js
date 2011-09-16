(function( Popcorn ) {

  var setupCalled = 0,
      startCalled = 0,
      endCalled = 0;

  Popcorn.plugin( "footnote", function( options ) {
    return {
      _setup: function() {
          setupCalled++;
        },
      start: function() {
        startCalled++;
      },
      end: function() {
        endCalled++;
      }
    };
  });

  Popcorn.plugin( "googlemap", function( options ) {
    return {
      _setup: function() {
        setupCalled++;
      },
      start: function() {
        startCalled++;
      },
      end: function() {
        endCalled++;
      }
    };
  });

  Popcorn.plugin( "webpage", function( options ) {
    return {
      _setup: function() {
        setupCalled++;
      },
      start: function() {
        startCalled++;
      },
      end: function() {
        endCalled++;
      }
    };
  });

  test( "Timeline-sources Module", function() {
    expect( 3 );

    var count = 0,
        p = Popcorn.getInstanceById( "video" );

    function plus() {
      if ( ++count === 3 ) {
        start();
      }
    }

    stop();

    p.exec( 3, function() {
      equals( startCalled, 5, "start was called 5 times from the parsed data" );
      plus();
      p.currentTime( 9 );
    });

    p.exec( 10.5, function() {
      equals( endCalled, 5, "end was called 5 times from the parsed data" );
      plus()
    });

    equals( setupCalled, 5, "setup was called 5 times from the parsed data" );
    plus();

  });

})( Popcorn );