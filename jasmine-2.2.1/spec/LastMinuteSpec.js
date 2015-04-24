describe("Last Minute Class", function() {

beforeEach(function() {
    lastMinute = new LastMinute();
});

  it("should be defined", function() {
    expect(lastMinute).toBeDefined();
  }); 
  
  it("should be able to set the json url path", function() {
    lastMinute.jsonURL='data/hotels.json';
    expect(lastMinute.jsonURL).toBe('data/hotels.json');
  });
  it("should be able to set navigation div", function() {
    lastMinute.navigationDiv='nav';
    expect(lastMinute.navigationDiv).toBe('nav');
  });
  it("should be able to set panel div", function() {
    lastMinute.panelDiv='panel';
    expect(lastMinute.panelDiv).toBe('panel');
  });
  
});

describe("Loader", function() {
      beforeEach(function(done) {
        lastMinute = new LastMinute();
        lastMinute.jsonURL='data/hotels.json';
        lastMinute.load(function () {
            done();
        });
    });
    
 it("should load json data into model", function() {
     var model=lastMinute.getModel();
      expect(model.hotels).toBeDefined();
      expect(model.hotels.length).toBe(4);
      expect(model.hotels[0].name).toBe('Hotel Sunny Palms');
      expect(model.hotels[0].imgUrl).toBe('imgs/sunny.jpg');
      expect(model.hotels[0].rating).toBe(5);
      expect(model.hotels[0].price).toBe(108);
    });
    
});

describe("DOM ", function() {

beforeEach(function(done) {
        lastMinute = new LastMinute();
        lastMinute.jsonURL='data/hotels.json';
        lastMinute.navigationDiv='navigation';
        lastMinute.panelDiv='panel';
        lastMinute.load(function () {
            lastMinute.render();
            done();
        });
    });
  it("should load navigation", function() {
    var element=document.getElementById(lastMinute.navigationDiv);
    expect(element.innerHTML).toContain('div class="nav"'); 
  }); 
  
  it("should load items in panel on click", function() {
    lastMinute.click(0);
    var element2=document.getElementById(lastMinute.panelDiv);
    expect(element2.innerHTML).toContain('Hotel Sunny Palms'); 
    
    lastMinute.click(1);
    element2=document.getElementById(lastMinute.panelDiv);
    expect(element2.innerHTML).toContain('Hotel Snowy Mountains'); 
    
  }); 
  
});