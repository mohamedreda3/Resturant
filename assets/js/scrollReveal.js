class ScrollReveal {
    ele;
    transition;
    propsObj = {};
    constructor(ele, propsObj, transition) {
        this.ele = ele;
        this.transition = transition;
        this.propsObj = propsObj;
        this.preparePosition();
    }

    set Ele(ele) {
        this.ele = ele;
    }

    set Transition(ele) {
        this.ele = ele;
    }

    set PropsObj(propsObj) {
        this.propsObj = propsObj;
    }

    get element() {
        return this.ele;
    }

    get TransitionElement() {
        return this.transition;
    }

    get properitiesObj() {
        return this.propsObj;
    }

    preparePosition() {
        if (this.element != null) {  
            if (window.scrollY >= (this.element.parentNode.getBoundingClientRect().top + 50) && this.element.getBoundingClientRect().bottom > 80) {
                this.element.classList.add('active');
                this.styleWhenInViewport();
            } else {
                this.styleWhenOutViewport();
            }
        } else {
            alert('This element is not found');
        }
    }

    styleWhenInViewport() {
        for (const prop in this.properitiesObj) {
            this.element.style[prop] = (0 + "px") || "none";
            this.element.style['zIndex'] = 1;
        }
    }


    styleWhenOutViewport() {
        this.element.style["transition"] = (this.TransitionElement/1000)+"s ease-in-out";
        for (const prop in this.properitiesObj) {
            this.element.style['zIndex'] = -1;
            this.element.style[prop] = isNaN(this.properitiesObj[prop]) ? this.properitiesObj[prop].indexOf('px') != -1 ? `${this.properitiesObj[prop]}` : `${this.properitiesObj[prop]}px` : `${this.properitiesObj[prop]}px`;
        }
    }


    showWhenScroll() {
        if (this.element != null) {
            let eleTop = this.element.parentNode.getBoundingClientRect().top;
            var eleBottom = this.element.getBoundingClientRect().bottom;
            if (window.scrollY >= (this.element.parentNode.getBoundingClientRect().top + 50) && this.element.getBoundingClientRect().bottom > 80) {
                this.element.classList.add('active');
                this.styleWhenInViewport();
            } else {
                this.styleWhenOutViewport();
            }
        } else {
            alert('This element is not found');
        }

}
}