function generateUrl() {
    const link = document.getElementById("link").value;
    let contributorId = document.getElementById("contributorId").value;
  
    // Remove lang-locale
    let cleanLink = link.replace(/\/[a-z]{2}-[a-z]{2}\//, '/');
  
    // Check if Contributor ID already exists (assuming complete ID is entered)
    if (cleanLink.includes(contributorId)) {
      // If it exists, do nothing (assume user entered full ID)
    } else {
      // If it doesn't exist, adjust and add it with the correct symbol
      if (cleanLink.includes("?")) {
        contributorId = contributorId.replace("?", "&"); // Remove "?" from Contributor ID if URL has "?"
      }
      cleanLink += contributorId; // Add Contributor ID directly
    }
  
    // Handle URLs ending with "/"
    cleanLink = cleanLink.endsWith("/") ? cleanLink.slice(0, -1) : cleanLink;
  
    document.getElementById("result").innerText = cleanLink;
  
    // Show the "Copy URL" button
    document.getElementById("copyButton").style.display = "inline-block"; 
  }
  
  function copyUrl() {
    const resultElement = document.getElementById("result");
    const url = resultElement.innerText;
  
    // Create a temporary element to hold the URL
    const tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
  
    // Select and copy the URL
    tempInput.select();
    document.execCommand("copy");
  
    // Remove the temporary element
    document.body.removeChild(tempInput);
  
    // Optional: Display a success message
    resultElement.innerText = "URL Copied!";
    setTimeout(() => {
      resultElement.innerText = url; // Restore original URL after a short delay
    }, 1000);
  }


  