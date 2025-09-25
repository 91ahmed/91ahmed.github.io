const url = 'https://91ahmed.github.io/'

/**********************************************/
/******** Nav Social Icons ********/
/*********************************************/
let nav_social_icons = `
<li>
    <a href="https://x.com/AhmedHa64226202" target="_blank">
        <svg style="width: 10px; height: 10px; color: rgba(0, 0, 0, .54); margin-top: -3px;" id="fi_5968958" enable-background="new 0 0 1226.37 1226.37" viewBox="0 0 1226.37 1226.37" xmlns="http://www.w3.org/2000/svg">
            <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"></path>
        </svg>
    </a>
</li>
<li>
    <a href="https://dev.to/91ahmed" target="_blank">
        <svg style="width: 14px; height: 15px; color: rgba(0, 0, 0, .54); margin-top: -3px;" xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M120.1 208.3c-3.9-2.9-7.8-4.3-11.6-4.3H91.1v104.5h17.4c3.9 0 7.8-1.4 11.6-4.3s5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1M404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8M154.2 291.2c0 18.8-11.6 47.3-48.4 47.3H59.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3zm100.7-88.7h-53.3v38.4h32.6v29.6h-32.6v38.4h53.3v29.6h-62.2c-11.2.3-20.4-8.5-20.7-19.7V193.7c-.3-11.1 8.6-20.4 19.7-20.7h63.2zm103.6 115.3c-13.2 30.7-36.8 24.6-47.4 0L272.6 173h32.6l29.7 113.7L364.5 173h32.6l-38.5 144.8z"/></svg>
    </a>
</li>                    
<li>
    <a href="https://github.com/91ahmed" target="_blank">
        <svg style="width: 14px; height: 15px; color: rgba(0, 0, 0, .54); margin-top: -3px;" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M252.8 8C114.1 8 8 113.3 8 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C436.2 457.8 504 362.9 504 252C504 113.3 391.5 8 252.8 8M105.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"/></svg>
    </a>
</li>
<li>
    <a href="https://linkedin.com/in/91ahmed" target="_blank"><i class="icon-linkedin"></i></a>
</li>
`
if (document.getElementById('nav_social_icons1')) {
    document.getElementById('nav_social_icons1').innerHTML = nav_social_icons
}
if (document.getElementById('nav_social_icons2')) {
    document.getElementById('nav_social_icons2').innerHTML = nav_social_icons
}


/**********************************************/
/******** Menu Links ********/
/*********************************************/
let menu_links1 = `
<ul>
    <li class="current-menu-item"><a href="${url}">Home</a></li>
    <li><a href="${url}about.html">About Me</a></li>
    <li><a href="${url}contact.html">Contact</a></li>
    <li><a href="${url}books.html">Books</a></li>
</ul>
`
let menu_links2 = `
<ul style="display: block; text-align: left;">
    <li class="${url}" style="padding: 0 30px 0 0;"><a href="https://91ahmed.github.io">Home</a></li>
    <li><a href="${url}about.html" style="padding: 0 30px 0 0;">About Me</a></li>
    <li><a href="${url}contact.html" style="padding: 0 30px 0 0;">Contact</a></li>
    <li><a href="${url}books.html" style="padding: 0 30px 0 0;">Books</a></li>
</ul>
<span></span>
`
if (document.getElementById('menu_links1')) {
    document.getElementById('menu_links1').innerHTML = menu_links1
}
if (document.getElementById('menu_links2')) {
    document.getElementById('menu_links2').innerHTML = menu_links2
}

/**********************************************/
/******** Author Photo ********/
/*********************************************/
let author_photo = `
<img src="${url}assets/images/ahmed.png" alt="author">
`
if (document.getElementById('author_photo1')) {
    document.getElementById('author_photo1').innerHTML = author_photo  
}
if (document.getElementById('author_photo2')) {
    document.getElementById('author_photo2').innerHTML = author_photo  
}
if (document.getElementById('author_photo3')) {
    document.getElementById('author_photo3').innerHTML = author_photo  
}


/**********************************************/
/******** Home Posts ********/
/*********************************************/

// Javascript Section
for (let data of posts) {
    if (data.id > 3) { break }
    //if (data.category === 'javascript') {
        if (document.getElementById('javascript_section_1')) {
            document.getElementById('javascript_section_1').innerHTML += `
            <article class="post-has-bg">
                <div class="mb-3 d-flex row">
                    <figure class="col-4 col-md-4">
                        <a href="${url+data.path}" class="postPhoto" style="background-image:url(${data.thumb});">
                            <!--<img class="lazy" data-src="${data.thumb}" src="${data.thumb}" alt="post-title">-->
                        </a>
                    </figure>
                    <div class="entry-content col-8 col-md-8 pl-md-0" style="direction: rtl; text-align: right;">
                        <h5 class="entry-title mb-3"><a href="${url+data.path}">${data.title}</a></h5>
                        <div class="entry-meta align-items-center">
                            <a href="author.html">${data.category}</a><br>
                            <span class="d-block mt-2">${data.time}</span>
                        </div>
                    </div>
                </div>
            </article>
            `
        }
    //}
}