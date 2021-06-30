// let header1 = $('h1');

// $(document).ready(() => {
//  header1.css('color', 'red').css('font-size', '20px');

// })
// $('#dropDown').on('change', () => {
//     console.log(this.value);
//  })

// $('#addlist').click(() => {
//     $('#list').append(`<li>mawmaw</li>`)
// })

// $(document).ready(() => {
//     let newRecipe = $('#newRecipe');
//     let addRecipeBtn = $('#addRecipe');
//     let cartList = $('#list');
//     addRecipeBtn.click(() => {
//         cartList.append(`<p>Recipe: ${newRecipe.val()} <button class="deleteRecipe">Delete</button></p>`);
//         newRecipe.val('');
//         $('.deleteRecipe').on ('click',function () {
//             $(this).parent().remove();
//         })
//     })
// })

// $(document).ready(() => {
//     $('#modify').click(() => {
//         $('#list > ul > li').eq(1).css({'color': 'red', 'font-size': '52px'})
//     })
// })

class Person {
    constructor (username, age, address) {
        this.username = username,
        this.age = age,
        this.address = address
    }
    getAddress(newAddress) {
        this.address.push(newAddress)
    }
}

let ford = new Person ('ford23', 28)

console.log(ford);
ford.getAddress('Manila')
console.log(ford);