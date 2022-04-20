class GetMealInformation {
	id;
	mealName;
	mealPrice;
	mealImage;

	constructor(id, mealName, mealPrice, mealImage) {
		this.mealName = mealName;
		this.id = id;
		this.mealPrice = mealPrice;
		this.mealImage = mealImage;
	}


	set Id(id) {
		this.id = id;
	}

	get Id() {
		return this.id;
	}

	set MealName(mealName) {
		this.mealName = mealName;
	}

	get MealName() {
		return this.mealName;
	}

	set mealImage(mealImage) {
		this.mealImage = mealImage;
	}

	get mealImage() {
		return this.mealImage;
	}

	get MealPrice() {
		return this.mealPrice;
	}

	set MealPrice(mealPrice) {
		this.mealPrice = mealPrice;
	}

	productInfo() {
		return {
			mealName: this.mealName,
			mealPrice: this.mealPrice,
			mealId: this.id,
			mealImage: this.mealImage
		};
	}

}

