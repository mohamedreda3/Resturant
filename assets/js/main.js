// ===================== NavBar =========================
const navbarLi = document.querySelectorAll('nav .nav__toggle li');
navbarLi.forEach((item, index) => item.addEventListener('mousemove', () => addBlur(index, 'blur')))

for (let item = 0; item < navbarLi.length; item++) {
    navbarLi[item].addEventListener('mouseleave', () => removeBlur('blur'));
}
// ==========================================================


// ===================== SearchBar =========================
removeActiveClass(document.querySelector('.searchBar span'), document.querySelector('.searchBar'));
addActiveClass(document.querySelector('.search'), document.querySelector('.searchBar'), () => document.querySelector('.shopCart').classList.remove('active')
);
// ==========================================================


// ===================== ShopCart =========================
removeActiveClass(document.querySelector('.shopCart span'), document.querySelector('.shopCart'));
addActiveClass(document.querySelector('.cart'), document.querySelector('.shopCart'), function () {
    document.querySelector('.searchBar').classList.remove('active');
});

toggleActiveClass(document.querySelector('.nav__menu'), document.querySelector('.navLinks'),
    function () {
        document.querySelector('.shopCart').classList.remove('active');
        document.querySelector('.searchBar').classList.remove('active');
        document.querySelector('.nav__menu').classList.toggle('active');
    });
if (!(document.querySelector('.cartContainer').childNodes.length > 0)) {
    document.querySelector('.cartContainer').innerHTML = '<p>The bag is empty</p>';
}
// ==========================================================


// ===================== ScrollInHeader =========================
var scrollyPage = 0;
window.addEventListener('scroll', function () {
    var scrollyPage = window.scrollY;
    setTimeout(function () {
        document.querySelector('header .headerCol1').style.top = `-${scrollyPage}px`;
        document.querySelector('header .headerCol2').style.left = `-${scrollyPage}px`;
        // document.querySelector('.websiteComponentes').style.top = `-${scrollyPage - 50}px`;
        document.querySelector('header .scroll').style.top = `-${scrollyPage}px`;
    }, 10)
    // console.log(scrollyPage);
})
// ==========================================================
// =====================================================================================================

// window.scroll({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
// })

// ========================= Scroll Reveal =================================
let sr2 = new ScrollReveal(document.querySelector('.discover1'), { "right": 1050 }, 1500);
let sr3 = new ScrollReveal(document.querySelector('.discover2'), { "top": 1050 }, 1500);
let sr4 = new ScrollReveal(document.querySelector('.discover3'), { "left": 1050 }, 1500);
let sr5 = new ScrollReveal(document.querySelector('.meal:nth-child(1)'), { "right": 1050 }, 1500);
let sr6 = new ScrollReveal(document.querySelector('.meal:nth-child(2)'), { "top": 1050 }, 1500);
let sr7 = new ScrollReveal(document.querySelector('.meal:nth-child(3)'), { "left": 1050 }, 1500);
let sr8 = new ScrollReveal(document.querySelector('.meal:nth-child(4)'), { "right": 1050 }, 1500);
let sr9 = new ScrollReveal(document.querySelector('.meal:nth-child(5)'), { "top": 1050 }, 1500);
let sr10 = new ScrollReveal(document.querySelector('.meal:nth-child(6)'), { "left": 1050 }, 1500);
let sr11 = new ScrollReveal(document.querySelector('.mainCol1'), { "right": 1050 }, 1500);
let sr12 = new ScrollReveal(document.querySelector('.mainCol2'), { "left": 1050 }, 1500);
window.addEventListener('scroll', function () {
    // let sr = new ScrollReveal(document.querySelector('.headerCol1'), {'top':1000,"left":1050});
    sr2.showWhenScroll();
    sr3.showWhenScroll();
    sr4.showWhenScroll();
    sr5.showWhenScroll();
    sr6.showWhenScroll();
    sr7.showWhenScroll();
    sr8.showWhenScroll();
    sr9.showWhenScroll();
    sr10.showWhenScroll();
    sr11.showWhenScroll();
    sr12.showWhenScroll();
    // sr.showWhenScroll();
})
// ==========================================================
// =====================================================================================================

// ========================= Add To Cart =================================
const addToCartButton = document.querySelectorAll('.addToCart'),
    cart = document.querySelector('.cartContainer');

for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', (e) => addMealToCart(e.target))
}

function addMealToCart(cartButton) {
    let id = cartButton.parentNode.querySelector('.mealId').textContent,
        mealName = cartButton.parentNode.querySelector('h1').textContent,
        mealPrice = parseInt(cartButton.parentNode.querySelector('.price span').textContent),
        mealImageSrc = cartButton.parentNode.parentNode.querySelector('.mealImg img').src;
    const getMealInformation = new GetMealInformation(id, mealName, mealPrice, mealImageSrc);
    let productContainer = document.createElement('div');
    productContainer.classList.add('discover');
    if (cart.childNodes.length > 0 && cart.firstChild.textContent == 'The bag is empty') {
        cart.removeChild(cart.firstChild);
        addMealNode();
    } else {
        if (cart.childNodes.length != 0) {
            let mealWillAddId = cartButton.parentNode.childNodes[1].textContent,
                mealInCartId = cart.childNodes[0].childNodes[2].childNodes[1].textContent, iterateIntoCartElements = 0,
                checkExists = false;
            for (iterateIntoCartElements = 0; iterateIntoCartElements < cart.childNodes.length; iterateIntoCartElements++) {
                mealInCartId = cart.childNodes[iterateIntoCartElements].childNodes[2].childNodes[1].textContent;
                if (parseInt(mealInCartId) == parseInt(mealWillAddId)) {
                    checkExists = true;
                    break;
                }
            }
            if (!checkExists) {
                addMealNode();
            } else {
                alert('Founded');
            }
        } else {
            addMealNode();
        }
    }

    function addMealNode() {
        if (cart.appendChild(productContainer)) {
            productContainer.innerHTML = `<div class="discImg discoverImage">
<img src='${getMealInformation.productInfo().mealImage}' />
</div>
<div class="discoverDiscription">
<div class="mealId" style="display:none;">${getMealInformation.productInfo().mealId}</div>
<h1>${getMealInformation.productInfo().mealName}</h1>
<p class="price" data-price="${getMealInformation.productInfo().mealPrice}">$<span>${getMealInformation.productInfo().mealPrice}</span></p>
<p class="productQuantitiy"><input type="number" min="0" value="1" onchange="addOrderQuantity(this)"/></span></p>
<div class="headerBtns">
<button class="buyMeal">BUY NOW</button> 
<button class="removeMeal" onclick="removeMealFromCart(this)"><i class="fa-solid fa-trash"></i>Remove</button>     
</div>
`;
            alert('Added');
        } else {
            alert('There are a problem');
        }
    }
}

function removeMealFromCart(element) {
    var removeButtons = document.querySelectorAll('.removeMeal');
    if (removeButtons.length > 0) {
        document.querySelector('.cartContainer').removeChild(element.parentNode.parentNode.parentNode);
    } else {
        document.querySelector('.cartContainer').innerHTML = '<p>The bag is empty</p>';
    }
}



function addOrderQuantity(element) {
    var price = parseInt(element.parentNode.parentNode.querySelector('.price').getAttribute('data-price'));
    element.parentNode.parentNode.querySelector('.price span').textContent = price * parseInt(element.value);
}




