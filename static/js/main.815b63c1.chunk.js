(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),i=a.n(l),c=(a(15),a(4)),r=a(5),h=a(7),s=a(6),d=a(1),u=a(8),g=(a(16),a(17),function(e){var t="https://lucindabrown.github.io/data/School/images/"+e.data.short_name+"-map.png",a=e.data.spots[e.grade],n=e.data.applicants[e.grade],l=0;return n>0&&(l=1*a/n*12,e.phbao&&(l+=1),(l+=e.rejections-1)<1&&(l=1),l>5&&(l=5),l=Math.round(l)),o.a.createElement("div",{className:"school"},o.a.createElement("p",{onClick:e.click},e.data.name),o.a.createElement("p",null," ",e.phbao),o.a.createElement("p",null," ",a),o.a.createElement("p",null," ",n),o.a.createElement("p",null," ",e.rejections),o.a.createElement("p",null,"Grades ",e.data.lowest_grade," - ",e.data.highest_grade),o.a.createElement("p",null,"Bus Stops "),o.a.createElement("ul",null,e.data.stops.map(function(e,t){return o.a.createElement("li",null,e)})," "),o.a.createElement("img",{src:t,alt:"map"}),o.a.createElement("h2",null,l))}),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={schools:[],stops:[],grade:2,rejections:0,gifted:!0,phbao:!1},a.handleGradeChange=a.handleGradeChange.bind(Object(d.a)(a)),a.handleRejectionsChange=a.handleRejectionsChange.bind(Object(d.a)(a)),a.handlePhbaoChange=a.handlePhbaoChange.bind(Object(d.a)(a)),a.handleGiftedChange=a.handleGiftedChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://lucindabrown.github.io/data/schools.json").then(function(e){return e.json()}).then(function(t){e.setState({schools:t})}).catch(console.log)}},{key:"toggleNeighborhood",value:function(e){}},{key:"handleGradeChange",value:function(e){this.setState({grade:e.target.value})}},{key:"handleRejectionsChange",value:function(e){this.setState({rejections:e.target.value})}},{key:"handlePhbaoChange",value:function(e){this.setState({phbao:!this.state.phbao})}},{key:"handleGiftedChange",value:function(e){this.setState({gifted:!this.state.gifted})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{style:{backgroundColor:"rgb(42, 103, 255)",font:"inherit",border:"1px solid blue",padding:"8px",cursor:"pointer"},onClick:function(){return e.toggleNeighborhood()}},"Switch Name"),o.a.createElement("p",null,""+this.state.phbao," "),o.a.createElement("p",null,""+this.state.gifted," "),o.a.createElement("label",null,"Grade:"),o.a.createElement("input",{type:"number",value:this.state.grade,onChange:this.handleGradeChange,min:"0",max:"4"}),o.a.createElement("label",null,"Rejections:"),o.a.createElement("input",{type:"number",value:this.state.rejections,onChange:this.handleRejectionsChange,min:"0",max:"3"}),o.a.createElement("label",null,"Phbao:"),o.a.createElement("input",{type:"checkbox",checked:this.state.phbao,onChange:this.handlePhbaoChange}),o.a.createElement("label",null,"Gifted:"),o.a.createElement("input",{type:"checkbox",checked:this.state.gifted,onChange:this.handleGiftedChange}),this.state.schools.map(function(t,a){return!(!e.state.gifted&&t.gifted||t.lowest_grade>e.state.grade)&&o.a.createElement(g,{data:t,grade:e.state.grade,rejections:e.state.rejections,gifted:e.state.gifted,phbao:e.state.phbao})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.815b63c1.chunk.js.map