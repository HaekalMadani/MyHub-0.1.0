export const about = () => {
    let content = document.querySelector('.content');

    let about = document.createElement('div');
    about.classList.add('subtitle');
    
    let subheading = document.createElement('h2');

    content.appendChild(about);
    about.appendChild(subheading); 

    return about
}
