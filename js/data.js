// SERVICES DATA
const services = [
{
    icon: 'laptop',
    title: 'Web Design',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},
{
    icon: 'bullhorn',
    title: 'Branding',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},
{
    icon: 'umbrella',
    title: 'Development',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},
{
    icon: 'laptop',
    title: 'Creative Design',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},

{
    icon: 'television',
    title: 'Fully Responsive',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},
{
    icon: 'camera',
    title: 'Retina Ready',
    text: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
},
]
let HTML = '';

services.forEach(containers => {
    HTML += `<div class="services-box">
                <i class="fa fa-${containers.icon}"></i>
                <h3>${containers.title}</h3>
                <p>${containers.text}</p>
             </div>` 
})

document.querySelector('.services').innerHTML += HTML

