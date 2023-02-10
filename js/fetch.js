fetchGithubApi = (url) => 
{   
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    	// Titles (info, topics, language, hosts)
    	document.getElementById('info-title').innerHTML = "<h3>Info</h3>"
    	document.getElementById('topics-title').innerHTML = "<h3>Topics</h3>"
    	document.getElementById('language-title').innerHTML = "<h3>Language</h3>"
    	document.getElementById('hosts-title').innerHTML = "<h3>Links</h3>"

    	// Repository name
    	document.getElementById('repo-name').innerHTML = data.name

        // Author
        document.getElementById('author').innerHTML += "<p><i class='fa-regular fa-user'></i> <a href='https://github.com/"+data.owner.login+"' target='_blank'>Ahmed Hassan</a></p>"
        // Release (Created at)
        document.getElementById('released').innerHTML += "<p><i class='fa-regular fa-calendar'></i> "+data.created_at+'</p>'
        // Description
        document.getElementById('describe').innerHTML += data.description
        // Repository Link
        document.getElementById('repository').innerHTML += "<p><i class='fa-solid fa-magnifying-glass'></i> <a href='"+data.html_url+"' target='_blank'>"+data.full_name+"</a></p>"
        // Topics
        data.topics.forEach ((item) => {
            document.getElementsByClassName('topics')[0].innerHTML += "<li><a>"+item+"</a></li>" 
        });

        // Language
        document.getElementById('language').innerHTML += "<li><a>"+data.language+"</a></li>"

        // Hosts
        document.getElementById('hosts').innerHTML += "<li><a href='"+url+"' target='_blank' class='btn'><i class='fa-brands fa-github'></i> Github</a></li>"

        // Preview
        if (!data.homepage == "") {
        	document.getElementById('hosts').innerHTML += "<li><a href='"+data.homepage+"' target='_blank' class='btn'><i class='fa-solid fa-earth-americas'></i> Preview</a></li>"
        }
    })	
}