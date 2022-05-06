const currentLocation = window.location.href;

console.log(currentLocation);
const data = [
    {title: 'Work Experience', info: 'Here is my experience', link: `${currentLocation}Work`}, 
    {title: 'Education', info: 'Here is my Education', link: `${currentLocation}Education`}, 
    {title: 'Projects', info: 'Here is my Projects', link: `${currentLocation}Projects`}, 
    {title: 'Resume', info: 'Here is my Resume', link: `${currentLocation}Resume`}
];

export default data;
