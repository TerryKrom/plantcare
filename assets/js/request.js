const getInfo = async (type) => {
    try {
        const wikiData = (await import('../js/wiki.mjs'));
        
        // Access the object corresponding to the type
        const plantData = wikiData[type];
        
        if (plantData) {
            let container = document.getElementById('request-content')
            container.textContent=""

            let header = document.createElement('div');
            header.classList.add('request-content-header');

            let titleType = createTitle(type)

            let img = document.createElement('img');
            img.src=plantData.icon;
            img.alt='Plant icon';

            header.appendChild(titleType);
            header.appendChild(img);

            container.appendChild(header)

            let types = plantData.commonTypes;
            let containerTypes = document.createElement('div');
            let titletest = createTitle("Common plants: ")

            containerTypes.appendChild(titletest)
            containerTypes.classList.add('container-types')

            let typesList = document.createElement('div');

            types.forEach(e => {
                let p = document.createElement('p')
                p.textContent=e
                typesList.appendChild(p)
            })
            containerTypes.appendChild(typesList)
            container.appendChild(containerTypes)

            let descriptContainer = document.createElement('div');
            let descripTitle = createTitle("Short Description: ")
            let description = document.createElement('p')
            description.textContent=plantData.description;
            descriptContainer.classList.add('description-container')

            descriptContainer.appendChild(descripTitle);
            descriptContainer.appendChild(description);

            container.appendChild(descriptContainer)

            let basicCareContainer = document.createElement('div');
            let basicCareTitle = createTitle('Basic Care: ')
            let basicCareText = document.createElement('p');
            basicCareText.textContent=plantData.basicCare;
            basicCareContainer.classList.add('basic-care-container')

            basicCareContainer.appendChild(basicCareTitle);
            basicCareContainer.appendChild(basicCareText);

            container.appendChild(basicCareContainer)

        } else {
            console.log('Type not found.');
        }
    } catch (error) {
        console.error('Error loading module:', error);
    }
}

const createTitle = (text) => {
    let title = document.createElement('h2')
    title.textContent=text;
    return title;
}

document.addEventListener("DOMContentLoaded", () => {
    let icons = document.querySelectorAll('#openPlantIcon');

    icons.forEach(e => {
        e.addEventListener("click", () => {
        
            let type = e.getAttribute('data-type');
            let formatedType = type.toLowerCase().split(' ').join('')
            console.log(formatedType)
            
            getInfo(formatedType);
        });
    })
});
