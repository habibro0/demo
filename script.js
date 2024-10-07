var ara =[
    {dp: "https://images.pexels.com/photos/20209646/pexels-photo-20209646/free-photo-of-badmandafe-the-musical-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",Image:"https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=flnvtu_GJu1JoAR5VstHfMjQhuUR7Sv4L62hwm7NWwQ="},
    {dp: "https://images.pexels.com/photos/20209646/pexels-photo-20209646/free-photo-of-badmandafe-the-musical-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",Image:"https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=flnvtu_GJu1JoAR5VstHfMjQhuUR7Sv4L62hwm7NWwQ="},
    {
        dp: "https://images.pexels.com/photos/20209646/pexels-photo-20209646/free-photo-of-badmandafe-the-musical-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",Image:"https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=flnvtu_GJu1JoAR5VstHfMjQhuUR7Sv4L62hwm7NWwQ="}
        
    
    
]
var clutter = "" 
ara.forEach(function(ele,ids){
    clutter += `<div class="story">
                    <img id="${ids}" src="${ele.dp}" alt="">
                </div>`
}
)
document.querySelector("#storiyan").innerHTML = clutter
document.querySelector("#storiyan").addEventListener("click",function(des){
    // console.log(ara[des.target.id].Image);
    document.querySelector("#fs").style.display= "block"
    document.querySelector("#fs").style.backgroundImage = `url(${ara[des.target.id]})`
    setTimeout(function(){
        document.querySelector("#fs").style.display = 'none'
    },2000
)
} )

