(this.webpackJsonpnatgram=this.webpackJsonpnatgram||[]).push([[0],{15:function(e,s,a){},16:function(e,s,a){},43:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a.n(t),n=a(6),l=a.n(n),r=(a(15),a(16),a(7)),i=a(8),d=a(10),o=a(9),m=a(0),j=function(e){var s=e.url,a=e.userName;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"modal fade",id:"storyModal",tabIndex:"-1","aria-labelledby":"storyModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("img",{className:"feed-post-profile-pic",src:s,alt:"story"}),Object(m.jsx)("span",{className:"feed-post-user-name",children:a}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsxs)("div",{className:"modal-body",children:[Object(m.jsx)("img",{src:s,className:"w-100 story-modal-md",alt:"story"}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("span",{className:"d-block mt-1 fs-3 n5-mb",children:"0"}),Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor bg-primary",className:"bi bi-eye",viewBox:"0 0 16 16",children:[Object(m.jsx)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),Object(m.jsx)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})]})]})]})]})})})})},b=function(e){var s=e.id,a=e.image,t=e.userName,c=e.onStoryView,n=e.seen;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{"data-bs-toggle":"modal","data-bs-target":"#storyModal",className:n?"story story-seen me-2":"story story-added me-2",style:{cursor:"pointer"},onClick:function(){return c(s)},children:Object(m.jsx)("img",{className:"story-image w-100",src:a,alt:"image"})}),Object(m.jsx)("p",{className:"story-user-name text-center",children:t}),Object(m.jsx)(j,{id:"storyModal",userName:t,url:a})]})},f=a.p+"static/media/profilePic.8469a897.jpeg",x=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{"data-bs-toggle":"modal","data-bs-target":"#postModal",className:"fa fa-ellipsis-h ms-auto","aria-hidden":"true"}),Object(m.jsx)("div",{className:"modal fade",id:"postModal",tabIndex:"-1","aria-labelledby":"postModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:Object(m.jsx)("div",{className:"modal-content",children:Object(m.jsxs)("div",{className:"modal-body text-center",children:[Object(m.jsx)("p",{className:"text-danger fw-bold cursor",children:"Report"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"text-danger fw-bold cursor",children:"Unfollow"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"cursor",children:"Go to post"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"cursor",children:"Share to..."}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"cursor",children:"Copy Link"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"cursor",children:"Embed"}),Object(m.jsx)("hr",{}),Object(m.jsx)("p",{className:"cursor","data-bs-dismiss":"modal",children:"Cancel"})]})})})})]})},h=function(e){var s=e.url,a=e.userName,t=e.bookmarked,c=e.id,n=e.onLike,l=e.onSave,r=e.totalLike;return Object(m.jsxs)("div",{className:"mb-3 bg-light w-100 natgram-feed-post",children:[Object(m.jsxs)("div",{className:"feed-post-top-section p-2 d-flex flex-row",children:[Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(m.jsx)("img",{src:f,className:"feed-post-profile-pic"})}),Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(m.jsx)("p",{className:"feed-post-user-name",children:a})}),Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center ms-auto",children:Object(m.jsx)(x,{})})]}),Object(m.jsxs)("div",{className:"feed-post-middle-section w-100",children:[Object(m.jsx)("img",{className:"w-100",src:s}),Object(m.jsxs)("div",{className:"d-flex flex-row px-2 my-2",children:[Object(m.jsx)("i",{className:r?"fa fa-2x me-2 fa-heart":"fa fa-2x me-2 fa-heart-o",onClick:function(){return n(c)}}),Object(m.jsx)("i",{className:"fa fa-comment-o me-2 fa-2x"}),Object(m.jsx)("i",{className:"fa fa-send-o me-2 fa-2x"}),Object(m.jsx)("i",{className:t?"fa fa-bookmark ms-auto fa-2x":"fa fa-bookmark-o ms-auto fa-2x",onClick:function(){return l(c)}})]}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsxs)("p",{className:"like-text",children:["Liked by ",Object(m.jsx)("span",{className:"fw-bold",children:a})," and"," ",Object(m.jsxs)("span",{className:"fw-bold",children:[Object(m.jsx)("span",{className:"mx-1",children:r||""}),"others"]})]})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"feed-post-bottom-section px-2 pb-2",children:Object(m.jsxs)("div",{className:"d-flex flex-row",children:[Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-emoji-smile",viewBox:"0 0 17 17",children:[Object(m.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(m.jsx)("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]}),Object(m.jsx)("input",{className:"ms-2 mt-n2 ln-1 p-2 border-0 bg-transparent comment-box",type:"text",placeholder:"How you doin..."}),Object(m.jsx)("button",{type:"submit",className:"border-0 bg-transparent fw-bold text-primary ms-auto ",children:"Post"})]})})]})},u=function(e){var s=e.userName,a=e.fullName;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"profile-container mt-5 d-flex flex-row",children:[Object(m.jsx)("img",{src:f,className:"profile"}),Object(m.jsxs)("div",{className:"d-flex flex-column justify-content-center ms-3",children:[Object(m.jsx)("p",{className:"user-name",children:s}),Object(m.jsx)("p",{className:"full-name",children:a})]})]}),Object(m.jsx)("p",{className:"bio",children:"I am Santosh Kumar and currently doing my B.Tech from IIT Tirupati. I love to explore nature. I keep investigating about interseting thing of nature."})]})},N=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("a",{className:"navbar-brand natgram-text",href:"#",children:"NATGRAM"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav  ms-auto",children:[Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsxs)("a",{className:"nav-link",href:"#",children:[Object(m.jsx)("i",{className:"fa fa-home"}),Object(m.jsx)("span",{className:"ms-2 fs-6",children:"Home"})]})}),Object(m.jsx)("li",{className:"nav-item active n13-mt",children:Object(m.jsxs)("a",{className:"nav-link",href:"#",children:[Object(m.jsx)("i",{className:"fa fa-commenting"}),Object(m.jsx)("span",{className:"ms-2 fs-6",children:"Messages"})]})}),Object(m.jsx)("li",{className:"nav-item active n13-mt",children:Object(m.jsxs)("a",{className:"nav-link",href:"#",children:[Object(m.jsx)("i",{className:"fa fa-heart-o"}),Object(m.jsx)("span",{className:"ms-2 fs-6",children:"Notifications"})]})}),Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)("a",{className:"nav-link",href:"#",children:Object(m.jsx)("div",{className:"nav-profile-pic-container d-flex flex-column justify-content-center",children:Object(m.jsx)("img",{className:"profile-pic",src:f,alt:"prfile_pic"})})})})]})})]})})},O=a.p+"static/media/collegeImage.887bf62d.jpg",p=[{id:1,url:O,userName:"_s_k_y_29",liked:!1,totalLike:0},{id:2,url:O,userName:"_s_k_y_29",liked:!1,bookmarked:!1,totalLike:0},{id:3,url:O,userName:"_s_k_y_29",liked:!1,bookmarked:!1,totalLike:0},{id:4,url:O,userName:"_s_k_y_29",liked:!1,bookmarked:!1,totalLike:0},{id:5,url:O,userName:"_s_k_y_29",liked:!1,bookmarked:!0,totalLike:0},{id:6,url:O,userName:"_s_k_y_29",liked:!1,bookmarked:!1,totalLike:0}],v=[{id:1,url:f,userName:"_s_k_y_29",seen:!1},{id:2,url:"https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/87265229_861274797627700_1122623899062763520_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=K08sysFhO9QAX_pT566&_nc_ht=scontent.fdbd1-1.fna&oh=e20780449d0ec2fd47d7fdf69f5b8fdd&oe=60DE8D12",userName:"tamla_003",seen:!1},{id:3,url:"https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/80846490_2694394580643644_3447342993189634048_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=N1l0XC_dGIoAX_aPuOU&_nc_ht=scontent.fdbd1-1.fna&oh=0b87601398d8415cf7c1070cc3ec36c2&oe=60DEAE66",userName:"_subbu_bambu",seen:!1},{id:4,url:"https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/44452541_2074068239298996_122295555916300288_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nUNXsmTfFpYAX_bAI8l&_nc_oc=AQmYoy0cvO0Xdeu7znzHtmfwvzhjO9hiuaEaX8bKrQPp1RjYdamGP1dVWuVNnEvn7xFOm0fS4IGDLfMSGkpP8j6k&tn=dKR34WovTPLAraGP&_nc_ht=scontent.fdbd1-1.fna&oh=8f78a548252e49dc721b8a33d67fe010&oe=60DF0ED8",userName:"_shot_ends____",seen:!1},{id:5,url:"https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/68255944_103740424317907_2430425184243548160_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=MSY1g3D5x4gAX942dHy&_nc_ht=scontent.fdbd1-1.fna&oh=0e08bc7626a2ed74947c94d5e5e4e95f&oe=60DDB09B",userName:"_teju",seen:!1},{id:6,url:"https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/72255901_120086219395910_8883017787274952704_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=j8HltLBDNygAX8ggXt0&tn=dKR34WovTPLAraGP&_nc_ht=scontent.fdbd1-1.fna&oh=5a61e0851bea57abc84957887a181b15&oe=60DDFC58",userName:"_saurabh_m",seen:!1}],_=function(e){Object(d.a)(a,e);var s=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(e=s.call.apply(s,[this].concat(c))).state={stories:v,posts:p},e.getIndex=function(e,s){return e.findIndex((function(e){if(e.id===s)return!0}))},e.handleLike=function(s){var a=e.state.posts,t=e.getIndex(a,s);0!==a[t].totalLike?a[t].totalLike-=1:a[t].totalLike+=1,e.setState({posts:a})},e.handleSave=function(s){var a=e.state.posts,t=e.getIndex(a,s);!0===a[t].bookmarked?a[t].bookmarked=!1:a[t].bookmarked=!0,e.setState({posts:a})},e.handleStoryView=function(s){var a=e.state.stories;a[e.getIndex(a,s)].seen=!0,e.setState({stories:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(N,{className:"d-none d-md-block"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-12 col-md-8 mt-5",children:[Object(m.jsx)("div",{className:"natgram-feed-story bg-light mt-4 d-flex flex-row",children:this.state.stories.map((function(s){return Object(m.jsx)(b,{id:s.id,image:s.url,userName:s.userName,onStoryView:e.handleStoryView,seen:s.seen},s.id)}))}),Object(m.jsx)("div",{className:"mt-5 mb-3",children:this.state.posts.map((function(s){return Object(m.jsx)(h,{id:s.id,url:s.url,userName:s.userName,bookmarked:s.bookmarked,onLike:e.handleLike,onSave:e.handleSave,totalLike:s.totalLike},s.id)}))})]}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:"col-12 col-md-3 d-none d-md-block mt-md-5",children:Object(m.jsx)(u,{userName:"_s_k_y_29",fullName:"Santosh Kumar Yadav"})})]})})]})}}]),a}(t.Component);var g=function(){return Object(m.jsx)(_,{})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,l=s.getTTFB;a(e),t(e),c(e),n(e),l(e)}))};a(18),a(19),a(20);l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.9e7aa477.chunk.js.map