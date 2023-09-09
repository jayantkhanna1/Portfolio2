function openBlog(id) {
    var next = null
    var prev = null
    var heading = ""
    var id_of_blog = id
    var body = ""
    var img = ""
    var link = ""

    // Assuming you have a JSON file named "data.json" in the same directory
    const jsonFilePath = 'json/blog.json';

    // Using the fetch API to retrieve the JSON file
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                if (data[i].id == id_of_blog) {
                    next = data[i].next
                    prev = data[i].prev
                    heading = data[i].name
                    body = data[i].body
                    img = data[i].img
                    link = data[i].link
                    break
                }
            }

            // Set the values of the blog and then display the blog
            document.getElementById("prev_blog").setAttribute("data-prev", prev)
            document.getElementById("next_blog").setAttribute("data-next", next)
            document.getElementById("heading_text").innerHTML = heading
            document.getElementById("image_inner_blog").src = "images/" + img
            document.getElementById("main_blog_body").innerHTML = body
            document.getElementById("go_to_code_a").href = link

            // Open the modal
            var modal = document.getElementById("myModal");
            var btn = document.getElementById("myBtn");
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            modal.style.display = "block";
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
function prevBlog() {
    var prev = document.getElementById("prev_blog").getAttribute("data-prev")
    openBlog(prev)
}
function nextBlog() {
    var next = document.getElementById("next_blog").getAttribute("data-next")
    openBlog(next)
}

document.addEventListener('keydown', event => {
    var modal = document.getElementById("myModal");
    console.log(modal.style.display)
    if (modal.style.display !== 'none' && modal.style.display !== '') {
        if (event.key === 'ArrowRight') {
            nextBlog();
        } else if (event.key === 'ArrowLeft') {
            prevBlog();
        }
    }
});