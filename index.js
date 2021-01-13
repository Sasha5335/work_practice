'use strict';
const MIN_ZP = 6000 / 21;

class User {
	constructor(name, surName, age) {
		this.name = name;
		this.surName = surName;
		this.age = age;
	}

	getFullName() {
		return `${this.name} ${this.surName} = ${this.age}`;
	}

	yourAge() {
		return this.age >= 18;
	}
}

class Worker {
	constructor(name, surName, days = 0, rate = MIN_ZP) {
		if (typeof days !== 'number' || typeof rate !== 'number') {
			throw new TypeError('Error');
		}
		if (days < 0 || days > 31) {
			throw new RangeError();
		}
		this.name = name;
		this.surName = surName;
		this.days = days;
		this.rate = rate;
	}

	set days(newDays) {
		if (typeof newDays !== 'number') {
			throw new TypeError('Error');
		}
		if (newDays < 0) {
			throw new RangeError();
		}
		this._days = newDays;
	}

	get days() {
		return this._days;
	}

	set rate(newRate) {
		if (typeof newRate !== 'number') {
			throw new TypeError('Error');
		}
		if (newRate < 0) {
			throw new RangeError();
		}
		this._rate = newRate;
	}

	get rate() {
		return this._rate;
	}


	wageUser() {
		return this.days * this.rate;
	}
}

const w = new Worker('Alex', 'Mir', 22);

class Fuel {
	constructor(volume, density) {
		this.volume = volume;
		this.density = density;
	}

	get fuellWeight() {
		return this.volume * this.density;
	}

}

class Auto {
	/**
	 * 
	 * @param {string} model 
	 * @param {number} ownWeight 
	 * @param {Fuel} fuel 
	 */

	constructor(model, ownWeight, fuel) {
		this.model = model;
		this.ownWeight = ownWeight;
		this.fuel = fuel;
	}

	get fullWeight() {
		return this.ownWeight + this.fuel.fuellWeight;
	}
}

class Friend {
	constructor(name, appleAmount, frend) {
		this.name = name;
		this.appleAmoumt = appleAmount;
		this.frend = frend;
	}

	calculationAppleAmount() {
		return this.appleAmoumt + this.frend.appleAmoumt;
	}
}
const friend = new Friend('Alex', 20);
const me = new Friend('lol', 20, friend);

const u = {
	_name: '',
	set name(v) { this._name = v; },
	get name() { return this._name; }
};