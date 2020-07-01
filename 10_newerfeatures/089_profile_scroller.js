const data = [{
        name: 'John Doe',
        age: 32,
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://res.cloudinary.com/dinrxnicw/image/upload/v1591641109/b1_xn4kl0.png'
    },
    {
        name: 'Jen Smith',
        age: 30,
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://res.cloudinary.com/dinrxnicw/image/upload/v1590813835/26_c2gqtx.png'
    },
    {
        name: 'William Johnson',
        age: 37,
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://res.cloudinary.com/dinrxnicw/image/upload/v1591537806/f14_ybxeld.png'
    }
];
const profiles = profileIterator(data);
//call first profile
nextProfile();
//next event
document.getElementById('next').addEventListener('click', nextProfile);
//next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender}looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;
        document.getElementById('imageDisplay').innerHTML = `<img
    src="${currentProfile.image}">`;
    } else {
        //no more profiles
        window.location.reload();
    }
}
//iterator 
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}