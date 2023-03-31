(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),l=(i(15),i(1)),r=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(7),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,o=void 0!==c&&c,d=e.onChange,m=void 0===d?function(){}:d,b=e.isValidUrl,u=void 0===b||b,h=Object(l.useState)(!1),g=Object(s.a)(h,2),O=g[0],p=g[1],v="".concat(t,"-").concat(Math.random().toString().slice(2)),f=O&&o&&!i,w=O&&!u;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:v,children:n}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:v,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":f}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return p(!0)}})}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),w&&Object(r.jsx)("p",{className:"help is-danger",children:"Enter valid url"})]})};function u(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)}var h=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(l.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],h=Object(l.useState)(""),g=Object(s.a)(h,2),O=g[0],p=g[1],v=Object(l.useState)(""),f=Object(s.a)(v,2),w=f[0],x=f[1],M=Object(l.useState)(""),N=Object(s.a)(M,2),U=N[0],y=N[1],I=Object(l.useState)(""),T=Object(s.a)(I,2),B=T[0],_=T[1],k=u(w),z=u(w),A=m&&w&&U&&B&&k&&z,S=function(e){(e.preventDefault(),A)&&(t({title:m,description:O,imgUrl:w,imdbUrl:U,imdbId:B}),c((function(e){return e+1})),j(""),p(""),x(""),y(""),_(""))};return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return S(e)},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(b,{name:"title",label:"Title",value:m,onChange:function(e){j(e)},required:!0}),Object(r.jsx)(b,{name:"description",label:"Description",value:O,onChange:function(e){p(e)}}),Object(r.jsx)(b,{name:"imgUrl",label:"Image URL",value:w,onChange:function(e){x(e)},isValidUrl:z,required:!0}),Object(r.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:function(e){y(e)},isValidUrl:k,required:!0}),Object(r.jsx)(b,{name:"imdbId",label:"Imdb ID",value:B,onChange:function(e){_(e)},required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!A,children:"Add"})})})]},n)},g=i(8),O=function(){var e=Object(l.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{onAdd:function(e){return a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.c373bb5c.chunk.js.map