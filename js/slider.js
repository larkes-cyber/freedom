function Constructor(title,text,href){
    this.title=title;
    this.text=text;
    this.href = href;
}
const bookPortfolio={
    'mobileLol':new Constructor("Kinda mobile"," So, I just don't know how to fit my mobile projects to this site(I'm not a cool web-designer). If you wanna see my mobile works then check my github please.","https://github.com/larkes-cyber"),
    'marvel':new Constructor("Marvel service","This app was written with react-hooks and react-router-dom v.6.1.0 and i created my http-hook. I use Marvel api in this project. So this app show characters and comics where they are. And on the page, where characters are, there is 'random characters block' . There you can see some character.","https://larkes-cyber.github.io/marvel-service/"),
    'task':new Constructor("Task manager","It is my own project. This is task-manager by writing on react. There you can planning your goals on some days.You can see your statistics, how you completed goals and the main cool thing is that you can add your main goals for example: Buy new car and then you can check your progress to actions for this goal.","https://larkes-cyber.github.io/"),
    'fitness':new Constructor("Fitness site","This is a fitness website. It has seven modules: calculator, cards, form, modal, slider, tabs, timer and service file. This site has a webpackage module. So it is just a site where I practice some cool js things.","https://larkes-cyber.github.io/fitnessSite/"),
    'backBall':new Constructor('The Magic ball of prediction',' There is a ball of predictions in front of you. He can answer any question you are interested in from the future. Also on the site there is a system of top questions. If your question is very popular, then you will see it there. In general, you are at a crossroads and do not know what to do, then ask a question to the ball of predictions.',"https://larkes-cyber.github.io/magicBall/"),
    'backBit': new Constructor('Bitcoin landing','We have the best prices. Just start your exchange right now. Sign up for our Affiliate Program and receive a commission from each exchange. The earned funds are credited to your account instantly and can be withdrawn immediately. Also note that some exchange directions are hidden for an unregistered user.',"https://github.com/larkes-cyber"),
    'backZaim': new Constructor('Zaim landing','How it works? Set up an account: Download the app for free, sign up and verify your account. Apply for a loan: Apply for a loan and our technology will run a credit score and decide if you are qualified. Get your cash: If you qualify, your loan will be disbursed to your wallet. ',"https://github.com/larkes-cyber"),
    'backIce': new Constructor('Ice landing','This is the website of a company that sells ice cream. Here you can find a catalog of various dairy products, as well as their prices and reviews. This site is more of a landing page than a full-fledged site. But, despite this, you can order ice cream delivery at home from us. Our products are 100% natural, as they are brought directly from farms.',"https://github.com/larkes-cyber"),
     'DSI':new Constructor('DSI landing','Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.',"https://github.com/larkes-cyber")
};
const arrImg=['mobileLol','marvel','task','fitness','backBall','backBit', 'backZaim','backIce','DSI'];
let count=0;
const swichRight=document.querySelector('.swichRight');
const swichLeft=document.querySelector('.swichLeft');
swichLeft.addEventListener('click',()=>{
    if(count==0){
        document.querySelector('.project').classList.remove(arrImg[count]);
        count=8;
    }
    else{
        document.querySelector('.project').classList.remove(arrImg[count]);
        count--;
    }
    console.log(arrImg[count])
    document.querySelector('.project').classList.add(arrImg[count]);
    document.querySelector('.projectTitle').textContent=bookPortfolio[arrImg[count]].title;
    document.querySelector('.projectText').textContent=bookPortfolio[arrImg[count]].text;
    document.querySelector(".fixmore").href = bookPortfolio[arrImg[count]].href;
});
swichRight.addEventListener('click',()=>{
    if(count==8){
        document.querySelector('.project').classList.remove(arrImg[count]);
        count=0;
    }
    else{
        document.querySelector('.project').classList.remove(arrImg[count]);
        count++;
    }
        document.querySelector('.project').classList.add('show');
    document.querySelector('.project').classList.add(arrImg[count]);
    document.querySelector('.projectTitle').textContent=bookPortfolio[arrImg[count]].title;
    document.querySelector('.projectTitle').classList.add('titlePosFix');
    document.querySelector('.projectText').textContent=bookPortfolio[arrImg[count]].text;
    document.querySelector(".fixmore").href = bookPortfolio[arrImg[count]].href;

});
