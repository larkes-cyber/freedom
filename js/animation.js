const box=document.querySelectorAll('#kvad');
function hideElem(item){
    item.classList.add('hideEl');
        item.classList.remove('show');
}
if(window.innerWidth>1200){
  document.querySelector('.photo').style.opacity=0.5;
}
if(window.innerWidth<900){
  document.querySelector('.photo').classList.remove('show');
}
if(window.innerWidth<500)
{
  document.querySelector('.textAbout').classList.remove('aniShow');
  document.querySelector('.portfolioMargi').classList.remove('aniShow');
  document.querySelector('.portfolio').classList.remove('aniShow');
  document.querySelector('.projectTitle').classList.remove('aniShow');
  document.querySelector('.projectText').classList.remove('aniShow');
  document.querySelector('.project').classList.remove('aniShow');
}
function isOnVisibleSpace(element) {
	let bodyHeight = window.innerHeight;
    let elemRect = element.getBoundingClientRect();
    let offset   = elemRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}
let listenedElements = [];

window.addEventListener('scroll',function() {

	listenedElements.forEach(item=>{
    let result = isOnVisibleSpace(item.el);
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
  if(true){
    const textAb=document.querySelector('.textAbout');
    let elemRes=isOnVisibleSpace(textAb);
    if(textAb.classList.contains('hideEl') && elemRes){
      textAb.classList.add('show');
      textAb.classList.remove('hideEl');
    }
  }
  if(window.innerWidth<900){
    const portfolio=document.querySelector('.portfolioMargi');
    let elemRes=isOnVisibleSpace(portfolio);
    if(portfolio.classList.contains('hideEl') && elemRes){
      portfolio.classList.add('show');
      portfolio.classList.remove('hideEl');
    }
  }
  if(window.innerWidth<900){
    const portfolio=document.querySelector('.portfolio');
    let elemRes=isOnVisibleSpace(portfolio);
    if(portfolio.classList.contains('hideEl') && elemRes){
      portfolio.classList.add('show');
      portfolio.classList.remove('hideEl');
    }
  }
  if(window.innerWidth<900){
    const portfolio=document.querySelector('.project');
    let elemRes=isOnVisibleSpace(portfolio);
    if(portfolio.classList.contains('hideEl') && elemRes){
      portfolio.classList.add('show');
      portfolio.classList.remove('hideEl');
    }
  }
  if(window.innerWidth<900){
    const portfolio=document.querySelector('.projectTitle');
    let elemRes=isOnVisibleSpace(portfolio);
    if(portfolio.classList.contains('hideEl') && elemRes){
      portfolio.classList.add('show');
      portfolio.classList.remove('hideEl');
    }
  }
  if(window.innerWidth<900){
    const portfolio=document.querySelector('.projectText');
    let elemRes=isOnVisibleSpace(portfolio);
    if(portfolio.classList.contains('hideEl') && elemRes){
      portfolio.classList.add('show');
      portfolio.classList.remove('hideEl');
    }
  }
});

function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  listenedElements.push({
  	el: elementId,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}
let boxs=document.querySelectorAll('#kvad');
function addElem(){
    boxs=Array.from(boxs);
    const elementss=document.querySelectorAll('.aniShow');
    elementss.forEach(item=>{
        boxs.push(item);
    })

    boxs.push(document.querySelector('.aboutMe'));
    if(window.innerWidth>900){
      
      boxs.unshift(document.querySelector('.photo'));
     
    }
   
    boxs.unshift(document.querySelector('.text'));
    boxs.unshift(document.querySelector('.twoText'));
    boxs.unshift(document.querySelector('.oneText'));
    console.log(boxs);
}

addElem();
boxs.unshift(document.querySelector('.text'));
boxs.forEach(item=>{
    onVisibleSpaceListener(item, 
        el=>{
            
            el.classList.add('show')
            el.classList.remove('hideEl');
        },
        el=>{
            el.classList.add('hideEl');
            el.classList.remove('show');
        }
    );
})



// function scrollSob(item,heightScroll){
//         let heightElem=getComputedStyle(item).height.slice(0,-2);
//         const sumElem=+(item.getBoundingClientRect().bottom+window.innerHeight)+ +(heightElem);
//         console.log(getComputedStyle(item).height);
//         const box=item.getBoundingClientRect().bottom+window.innerHeight;
//         console.log(item.getBoundingClientRect().bottom);
  
//          if(document.documentElement.scrollTop>box && item.classList.contains('hideEl') && document.documentElement.scrollTop<sumElem){
//                 item.classList.add('show');
//                 item.classList.remove('hideEl');
//                 console.log(1)
//             }
//         if(heightScroll>sumElem){
//             hideElem(item);
//             }
//         if(document.documentElement.scrollTop<box){
//             hideElem(item);
//         }
// }
// function addKvadrOff(heightScroll){

//     let arr=Array.from(box);
//     arr.push(document.querySelector('.aboutMe'));
//     arr.forEach(item=>{
//         console.log(item)
//         scrollSob(item,heightScroll);
//        })
// }

// window.addEventListener('scroll',(e)=>{
//     const heightScroll = document.documentElement.scrollTop;
//     addKvadrOff(heightScroll);
 
//         // scrollSob(document.querySelector('.aboutMe'),heightScroll);
 
  
  
// });
