function generatePage() {
    console.log("inside generatePage");
    var name = $("#nameInput").val();
    console.log("name", name);
    if (!name) {
        alert("Sorry you need to put in a proper name");
    } else {
        window.location.href = "/api/v1/" + name;
    }
}