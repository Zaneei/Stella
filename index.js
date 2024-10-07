document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const searchQuery = document.getElementById("searchInput").value;

    alert(`Searching for: ${searchQuery}`);


});
