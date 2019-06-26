export class AppareilService {
	appareils = [
		{
			name: 'Machine à laver',
			status: 'Eteint'
		},
		{
			name: 'Micro onde',
			status: 'Allumer'
		},
		{
			name: 'Four',
			status: 'Eteint'
		},
	];

	switchOnAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'Allumer';
		}
	};

	switchOffAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'Eteint';
		}
	};

	switchOnOne(i: number) {
		this.appareils[i].status = 'Allumer';
	}

	switchOffOne(i: number) {
		this.appareils[i].status = 'Eteint';
	}
	
}