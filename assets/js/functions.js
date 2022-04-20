function removeBlur(className) {
    for (let li = 0; li < navbarLi.length; li++) {
        navbarLi[li].classList.remove(className);
    }
}

function addBlur(item, className) {
    for (let li = 0; li < navbarLi.length; li++) {
        if (li != item) {
            navbarLi[li].classList.add(className)
        } else {
            continue;
        }
    }
}

function addActiveClass(btn, node, function_you_want = () => null) {
    btn.onclick = function () {
        node.classList.add('active');
        if (function_you_want != null) {
            function_you_want();
        }
    }
}

function removeActiveClass(btn, node, function_you_want = () => null) {
    btn.onclick = function () {
        node.classList.remove('active');
        if (function_you_want != null) {
            function_you_want();
        }
    }
}

function toggleActiveClass(btn, node, function_you_want = () => null) {
    btn.onclick = function () {
        node.classList.toggle('active');
        if (function_you_want != null) {
            function_you_want();
        }
    }
}