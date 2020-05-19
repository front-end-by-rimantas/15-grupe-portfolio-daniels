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
for ( let i=0; i< services.length; i++) {
    HTML += `<div class="services-box">
                    <i class="fa fa-${services[i].icon}"></i>
                    <h3>${services[i].title}</h3>
                    <p>${services[i].text}</p>
                </div>`
}
document.querySelector('.services').innerHTML += HTML

