


document.addEventListener("DOMContentLoaded", (event) => {
    function load_music(){
        fetch('music_list.json') // This assumes you have a files.json in the root
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                const audio = document.createElement('audio');
                audio.src = `music/${file}`;
                audio.controls = true;
                document.getElementById('music').appendChild(audio);
            });
        });

    }
    console.log("DOM fully loaded and parsed");
    const tabs = document.querySelectorAll('[data-tab-link]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.tabLink)
            tabContents.forEach(tabContent => tabContent.classList.remove('active'))
            tabs.forEach(tab=>tab.classList.remove('active'))
            tab.classList.add('active')
            target.classList.add('active')
        
        })
    })

    // const musicTab =  document.getElementById("music");
    load_music();

  });