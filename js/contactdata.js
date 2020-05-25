'use strict';

const contactData = [
    {
        favi: 'location-arrow',
        h6: 'Address',
        address: '6834 Hollywood Blvd - Los Angeles CA'
    },
    {
        favi: 'envelope',
        h6: 'Email',
        address: 'Support@website.com'
    },
    {
        favi: 'phone',
        h6: 'Phone',
        address: '+20 010 2517 8918'
    }
]

const inputData = `
<div class="inputai">
    <div class="inputas">
        <input type="text" placeholder="Name" class="ehh">
    </div>
    </div>
    <div class="inputai">
        <div class="inputas">
            <input type="text" placeholder="Email" class="ehh">
        </div>
    </div>
    <div class="textarea">
        <textarea class="yeet" name="message" rows="6" placeholder="Message"></textarea>
    </div>
    <div class="btleft">
        <input type="submit" value="submit" class="btn">
    </div>`


let dataHTML = ``

contactData.forEach(generate => {
    dataHTML += `
    <div class="info-box">
        <span class="bubble"><i class="fa fa-${generate.favi}"></i></span>
        <h6>${generate.h6}</h6>
        <p>${generate.address}</p>
    </div>` 
})

document.querySelector('.contactbox').innerHTML += dataHTML
document.querySelector('.contactbox').innerHTML += inputData