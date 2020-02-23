//********************************************************************************
//**************************** JS FOR DYNAMIC_WEBPAGE ******************************
//******************************************************************************** 

// One approach to 'race-condition' problem that was occuring at first where the browswer was 
// executing the script before the content of the html document could be loaded thus returning a 
// "container is null" error is to use a 'wrapping' eventListener function where the event is set to
// DOMContentLoaded.  I'll be adding that wrapping function immediately below but commenting it out, 
// because I also found another solution by just moving the <script> tag to the bottom of page just before
// the closing </html>. This way the browser loads all the html DOM content before runnig the JS
//*********************************************************************************************************/

//document.addEventListener('DOMContentLoaded', function() {


    // create variable to grab container div (that's already present) in html body
    var container = document.getElementById('container');

    // create variables to store the header tag and h1 tag and nav tag you'll be creating

    var header = document.createElement('header');
    var title = document.createElement('h1');
    var nav = document.createElement('nav');

    // use innerHTML method to inject actual HTML content into the h1 and nav sections we created
    title.innerHTML = 'HighOnCoding';
    // James used this method to inject the ul code directly into the nav variable.. It works, but now I'm 
    // having trouble styling the individual list items .. can't find a way to target them with code.. 
    // commenting this method out for now  
    // nav.innerHTML = '<ul><li>Home</li><li>Categories</li></ul>';

    // will add styling to header and nav below here
    header.style.backgroundColor = '#57a9f7';
    title.style.display = 'inline-block';
    nav.style.display = 'inline-block';
    nav.style.listStyleType = 'none';

    // create main, hero, and posts elements for the main/remaining area of page
    var main = document.createElement('main');
    // hero and posts sections will be div's
    var hero = document.createElement('div');
    // create h2 heading for use within hero section
    var heroH2 = document.createElement('h2')
    // create variable to store the paragraph section of the hero section
    var heroPara = document.createElement('p');
    // set the content of newly created h2 heading element
    heroH2.innerHTML = "Curse of the Current Reviews";
    // set content of the paragraph section of the hero section
    heroPara.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";
    
    // Build out all the components of the 1st posts section
    var posts1 = document.createElement('div');
    var postsH3 = document.createElement('h3');
    var pPara1 = document.createElement('p');
    var p1Footer = document.createElement('footer');
    // Fill out all the content of the 1st posts section
    postsH3.innerHTML = "Hello WatchKit"
    pPara1.innerHTML = "Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
    p1Footer.innerHTML = "<ul><li>12 comments</li><li>124 likes</li></ul>";

    // Build out all the components of the 2nd posts section in same manner
    var posts2 = document.createElement('div');
    var posts2H3 = document.createElement('h3');
    var pPara2 = document.createElement('p');
    var p2Footer = document.createElement('footer');

    // Fill out the content of the 2nd posts section
    posts2H3.innerHTML = "Introduction to Swift";
    pPara2.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
    p2Footer.innerHTML = "<ul><li>15 comments</li><li>45 likes</li></ul>"


    //**********************************************************************************************************************************************************************************
    //*********************************** Attempting to make a logical seperation of functionality by having all the 'building' ********************************************************
    //*********************************** , styling, and variable creation first at the top of the code and then the 'insertion' *******************************************************
    //*********************************** section where children are appended and the code is pushed into the html at the bottom. ******************************************************
    //********************************************************************************************************************************************************************************** 
   
    // inject the header tag/section into the document's overall wrapper 'container' via appendChild method
    container.appendChild(header);
    // once our header is in place we can now start adding the h1 div and nav elements to the newly created header section
    // via same appendChild method
    header.appendChild(title);
    header.appendChild(nav);
    // append children to container wrapper to start moving the newly created elements in
    container.appendChild(main);
    main.appendChild(hero);
    hero.appendChild(heroH2);
    hero.appendChild(heroPara);

    main.appendChild(posts1);
    posts1.appendChild(postsH3);
    posts1.appendChild(pPara1);
    posts1.appendChild(p1Footer);

    main.appendChild(posts2);
    posts2.appendChild(posts2H3);
    posts2.appendChild(pPara2);
    posts2.appendChild(p2Footer);


    
    

//});