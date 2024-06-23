const womenRingsImageBasePath = "products/Womens/Ring";

$(document).ready(function () {
    const url = 'http://localhost:8083/WomenProducts.xlsx'; 
    let divName,headerTextContent,imageBasePath;
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const data = new Uint8Array(buffer);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming only one sheet, you can modify this according to your Excel structure
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert the worksheet to JSON
            const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Print the JSON to console
            console.log(json);
            const ringRows = [],necklaceRows = [],braceletRows=[],earRingsRows=[],pendantsRow=[],ankletsRows=[];
            for (let i = 1; i < json.length; i++) {
                const row = json[i];
                if (row[0] === 'Ring') {
                    ringRows.push(row);
                }
                if(row[0] == "Necklace"){
                    necklaceRows.push(row);
                }
                if(row[0]=="Bracelets"){
                    braceletRows.push(row);
                }
                if(row[0]=="Earrings"){
                    earRingsRows.push(row);
                }
                if(row[0]=="Pendants"){
                    pendantsRow.push(row);
                }
                if(row[0]=="Anklets"){
                    ankletsRows.push(row);
                }
            }
            if (ringRows.length > 0) {
                divName = 'WomensRings';
                headerTextContent = "Women's Ring";
                imageBasePath = "products/Womens/Ring";
                CreateDynamicDivs(ringRows,divName,headerTextContent,imageBasePath);
            }
            if (necklaceRows.length > 0) {
                divName = 'WomensNecklace';
                headerTextContent = "Women's Necklace";
                imageBasePath = "products/Womens/Necklace";
                CreateDynamicDivs(necklaceRows,divName,headerTextContent,imageBasePath);
            }
            if (braceletRows.length > 0) {
                divName = 'WomensBracelets';
                headerTextContent = "Women's Bracelets";
                imageBasePath = "products/Womens/Bracelets";
                CreateDynamicDivs(braceletRows,divName,headerTextContent,imageBasePath);
            }
            if (earRingsRows.length > 0) {
                divName = 'WomensEarrings';
                headerTextContent = "Women's Earrings";
                imageBasePath = "products/Womens/Earrings";
                CreateDynamicDivs(earRingsRows,divName,headerTextContent,imageBasePath);
            }
            if (pendantsRow.length > 0) {
                divName = 'WomensPendants';
                headerTextContent = "Women's Pendants";
                imageBasePath = "products/Womens/Pendants";
                CreateDynamicDivs(pendantsRow,divName,headerTextContent,imageBasePath);
            }
            if (ankletsRows.length > 0) {
                divName = 'WomensAnklets';
                headerTextContent = "Women's Anklets";
                imageBasePath = "products/Womens/Anklets";
                CreateDynamicDivs(ankletsRows,divName,headerTextContent,imageBasePath);
            }
            
            // Print the result
            console.log(ringRows);
        })
        .catch(error => {
            console.error('Error fetching or parsing Excel file:', error);
        });

    const mensUrl ='http://localhost:8083/MensProducts.xlsx'; 
    fetch(mensUrl)
        .then(response => response.arrayBuffer())
        .then(buffer=>{
            const data = new Uint8Array(buffer);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming only one sheet, you can modify this according to your Excel structure
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert the worksheet to JSON
            const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Print the JSON to console
            console.log(json);
            const ringRows =[],braceletsRow=[],earringsRows=[],chainRows=[];
            for (let i = 1; i < json.length; i++) {
                const row = json[i];
                if (row[0] === 'Ring') {
                    ringRows.push(row);
                }
                if(row[0]=="Bracelet"){
                    braceletsRow.push(row);
                }
                if(row[0]=="Earring"){
                    earringsRows.push(row);
                }
                if(row[0]=="Chain"){
                    chainRows.push(row);
                }
            }
            if (ringRows.length > 0) {
                divName = 'MensRings';
                headerTextContent = "Men's Ring";
                imageBasePath = "products/Mens/Rings";
                CreateDynamicDivs(ringRows,divName,headerTextContent,imageBasePath);
            }
            if (braceletsRow.length > 0) {
                divName = 'MensBracelets';
                headerTextContent = "Men's Bracelets";
                imageBasePath = "products/Mens/Bracelets";
                CreateDynamicDivs(braceletsRow,divName,headerTextContent,imageBasePath);
            }
            if (earringsRows.length > 0) {
                divName = 'MensEarrings';
                headerTextContent = "Men's Earrings";
                imageBasePath = "products/Mens/Earrings";
                CreateDynamicDivs(earringsRows,divName,headerTextContent,imageBasePath);
            }
            if (chainRows.length > 0) {
                divName = 'MensChain';
                headerTextContent = "Men's Chains";
                imageBasePath = "products/Mens/Chains";
                CreateDynamicDivs(chainRows,divName,headerTextContent,imageBasePath);
            }
        })
        .catch(error => {
            console.error('Error fetching or parsing Excel file:', error);
        });

});


function CreateDynamicDivs(ringRows,divName,headerTextContent,imageBasePath){
    // Get the div with id "ring"
    const ringDiv = document.getElementById(divName);
            
    // Create a new div with class "product-grid"
    const productGridDiv = document.createElement('div');
    productGridDiv.className = 'product-grid';

    // Append a heading to the "ring" div
    const heading = document.createElement('h2');
    heading.className = 'title';
    heading.textContent = headerTextContent;
    ringDiv.appendChild(heading);

    // Append the product-grid div to the "ring" div
    ringDiv.appendChild(productGridDiv);

    // Iterate over each row in ringRows
    ringRows.forEach(async row => {
        // Fetch the image asynchronously
        const imgSrc = `http://localhost:8083/${imageBasePath}/${row[1]}`;
        

        
        const showcaseDiv = document.createElement('div');
        showcaseDiv.className = 'showcase';

        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'showcase-banner';

        const imgDefault = document.createElement('img');
        imgDefault.src = imgSrc;
        imgDefault.alt = row[3];
        imgDefault.width = '300';
        imgDefault.className = 'product-img default';
        bannerDiv.appendChild(imgDefault);
        
        const imgHover = document.createElement('img');
        imgHover.src = imgSrc;
        imgHover.alt = row[3];
        imgHover.width = '300';
        imgHover.className = 'product-img hover';
        bannerDiv.appendChild(imgHover);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'showcase-content';

        const categoryLink = document.createElement('a');
        categoryLink.href = 'javascript:return false;';
        categoryLink.className = 'showcase-category';
        categoryLink.textContent = row[0];

        const titleLink = document.createElement('a');
        titleLink.href = '#';

        const titleHeading = document.createElement('h3');
        titleHeading.className = 'showcase-title';
        titleHeading.textContent = row[3];

        const priceBoxDiv = document.createElement('div');
        priceBoxDiv.className = 'price-box';

        const priceParagraph = document.createElement('p');
        priceParagraph.className = 'price';
        priceParagraph.textContent = `₹${row[2]}`;

        const delElement = document.createElement('del');
        delElement.textContent = `₹${row[4]}`;

        priceBoxDiv.appendChild(priceParagraph);
        priceBoxDiv.appendChild(delElement);

        titleLink.appendChild(titleHeading);
        contentDiv.appendChild(categoryLink);
        contentDiv.appendChild(titleLink);
        contentDiv.appendChild(priceBoxDiv);

        showcaseDiv.appendChild(bannerDiv);
        showcaseDiv.appendChild(contentDiv);
        productGridDiv.appendChild(showcaseDiv);
    });
}
function fetchImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}
