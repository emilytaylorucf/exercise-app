(this["webpackJsonpexercise-app"]=this["webpackJsonpexercise-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),i=n.n(o),s=(n(13),n(6)),a=n(2),l=n(3),u=n(5),d=n(4),b=(n(14),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={minutes:0,seconds:0,value:r.props.exName},r}return Object(l.a)(n,[{key:"startTimer",value:function(){var e=this;this.myInterval=setInterval((function(){e.setState((function(e){return{seconds:e.seconds+1}}))}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.myInterval),this.setState((function(e){var t=e.seconds;return{seconds:t-t}}))}},{key:"render",value:function(){var e=this,t={backgroundColor:"#90e0ef",color:"white",borderColor:"#fec5bb"},n=this.state,r=n.minutes,c=n.seconds;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{style:{color:"white",borderStyle:"solid",borderWidth:"5px",borderColor:"#90e0ef",width:"fit-content",padding:"5px",backgroundColor:"#fec5bb"},children:this.state.value}),Object(b.jsxs)("p",{style:t,children:["Duration: ",r," : ",c<10?"0".concat(c):c]}),Object(b.jsx)("button",{style:t,onClick:function(){return e.startTimer()},children:"Start"}),Object(b.jsx)("button",{style:t,onClick:function(){return e.stopTimer()},children:"Reset"})]})}}]),n}(c.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={counter:0,value:r.props.exName},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={backgroundColor:"#90e0ef",color:"white",borderColor:"#fec5bb"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{style:{color:"white",borderStyle:"solid",borderWidth:"5px",borderColor:"#90e0ef",width:"fit-content",padding:"5px",backgroundColor:"#fec5bb"},children:this.state.value}),Object(b.jsxs)("p",{style:t,children:["Reps: ",this.state.counter]}),Object(b.jsx)("button",{style:t,onClick:function(){e.setState({counter:e.state.counter+1})},children:"Add Rep"}),Object(b.jsx)("button",{style:t,onClick:function(){e.setState({counter:0})},children:"Reset"})]})}}]),n}(c.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={name:r.props.tvname,genre:r.props.genre,description:r.props.description},r}return Object(l.a)(n,[{key:"render",value:function(){var e={color:"white",borderStyle:"solid",borderWidth:"5px",borderColor:"#90e0ef",width:"fit-content",padding:"5px",backgroundColor:"#fec5bb"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{style:e,children:this.state.name}),Object(b.jsxs)("h3",{style:e,children:["Genre: ",this.state.genre]}),Object(b.jsx)("p",{style:{color:"white",backgroundColor:"#90e0ef"},children:this.state.description})]})}}]),n}(c.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={name:r.props.tvname,genre:r.props.genre,description:r.props.description},r}return Object(l.a)(n,[{key:"render",value:function(){var e={color:"white",borderStyle:"solid",borderWidth:"5px",borderColor:"#90e0ef",width:"fit-content",padding:"5px",backgroundColor:"#fec5bb"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{style:e,children:this.state.name}),Object(b.jsxs)("h3",{style:e,children:["Genre: ",this.state.genre]}),Object(b.jsx)("p",{style:{color:"white",backgroundColor:"#90e0ef"},children:this.state.description})]})}}]),n}(c.a.Component),f="menu",x="duration",O="repetition",y="anime",g="comedy",v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={currentScreen:f,selectedItem:void 0},r}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this,n={color:"white",borderStyle:"solid",borderWidth:"5px",borderColor:"#90e0ef",padding:"5px",backgroundColor:"#fec5bb"},r={backgroundColor:"#90e0ef",color:"white",borderColor:"#fec5bb"};switch(this.state.currentScreen){case f:e=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{style:n,children:"Emily's Exercise App"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{color:"#fec5bb"},children:"Welcome to Emily's Exercise App! Here we are focused on fitness while having fun. Below is a specialized plan with an enjoyable watch list. We hope you enjoy!"}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{style:n,children:"Workout Routine"}),Object(b.jsx)("p",{style:{color:"#fec5bb"},children:"Your workout routine!"}),Object(b.jsx)(b.Fragment,{children:[{exName:"Sprint",exType:"duration"},{exName:"Jog",exType:"duration"},{exName:"Jumping Jacks",exType:"repetition"},{exName:"Sit Ups",exType:"repetition"}].map((function(e){return"repetition"==e.exType?Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:O,selectedItem:e})},children:e.exName}):Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:x,selectedItem:e})},children:e.exName})}))}),Object(b.jsx)("h2",{style:n,children:"Exercise Watch List"}),Object(b.jsx)("p",{style:{color:"#fec5bb"},children:"Some TV shows to watch while you work out!"}),Object(b.jsx)(b.Fragment,{children:[{tvname:"Attack on Titan",genre:"anime",description:"Humanity is trapped within walled cities to protect them from the Titans. When the Titans breach the wall, will humanity be able to hang on to survival?"},{tvname:"The Big Bang Theory",genre:"comedy",description:"Four brilliant scientists making their way though experimentation, relationships, and shenanigans"},{tvname:"Demon Slayer",genre:"anime",description:"Tanjiro's family has been slain by demons, and his sister turned in to one. He must fight off demons to protect his sister Nezuko and find the cure to turn her back to her human form"},{tvname:"Friends",genre:"comedy",description:"A group of friends living in NYC try and navigate life with plenty of shenanigans, romance, and fun"}].map((function(e){return"anime"==e.genre?Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:y,selectedItem:e})},children:e.tvname}):Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:g,selectedItem:e})},children:e.tvname})}))})]});break;case x:e=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,Object(s.a)({},this.state.selectedItem)),Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:f})},children:"Home"})]});break;case O:e=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,Object(s.a)({},this.state.selectedItem)),Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:f})},children:"Home"})]});break;case y:e=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,Object(s.a)({},this.state.selectedItem)),Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:f})},children:"Home"})]});break;case g:e=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,Object(s.a)({},this.state.selectedItem)),Object(b.jsx)("button",{style:r,onClick:function(){return t.setState({currentScreen:f})},children:"Home"})]})}return e}}]),n}(c.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.716a8d9b.chunk.js.map