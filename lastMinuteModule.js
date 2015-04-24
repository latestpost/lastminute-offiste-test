LastMinute= (function () {

    function cls(){

        var model={};

        var parse = function(response){
            model=JSON.parse(response);
        };

        this.load = function (callback) {
          var xobj = new XMLHttpRequest();
          xobj.overrideMimeType("application/json");
          xobj.open('GET', this.jsonURL, true);
          xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    parse(xobj.responseText);
                    callback();
                }
          };
          xobj.send(null); 
        };
        
        this.getModel = function (){
            return model;
        }

        this.render = function (){

            var me=this;
            var element=document.getElementById(this.navigationDiv);
            element.innerHTML='';
            
            var arrayLength = model.hotels.length;
              for (var i = 0; i < arrayLength; i++) {
                var btn = document.createElement("DIV");
                btn.className='nav';
                var t = document.createTextNode(model.hotels[i].name);
                btn.appendChild(t);
                btn.id=i;
                btn.addEventListener("click", function(event){
                    me.click(event.srcElement.id);
                });
                element.appendChild(btn);
              }    
        };

        var renderPanel = function(i,me){
            var html;
            html='<div class="row"><div class="col6">';
            html=html+'<img class="hotelImg" src="'+model.hotels[i].imgUrl+'"></div>';

            html=html+'<div class="panelDetail col6">';
            html=html+'<div class="title">'+model.hotels[i].name+'</div>';
            switch (model.hotels[i].rating){
              case 0:
                  html=html+'<div><img class="star0"></div>';
              break;
              case 1:
                  html=html+'<div><img class="star1"></div>';
              break;
              case 2:
                  html=html+'<div><img class="star2"></div>';
              break;
              case 3:
                  html=html+'<div><img class="star3"></div>';
              break;
              case 4:
                  html=html+'<div><img class="star4"></div>';
              break;
              case 5:
                  html=html+'<div><img class="star5"></div>';
              break;
              default:
                  html=html+'<div><img class="star0"></div>';
              break;
            }
            html=html+'<br><br><div class="price">£'+model.hotels[i].price+'.00</div>';
            html=html+'<div class="tag">Total Hotel Stay</div>';
            html=html+'</div></div>';

            var element=document.getElementById(me.panelDiv);
            element.innerHTML=html;
        }

        this.click = function (i){
            renderPanel(i,this);
        };
    }
    
  return cls;

})();