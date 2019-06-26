export class AppareilService {
	appareils = [
		{
			id: 1,
			name: 'Machine à laver',
			status: 'Eteint'
		},
		{
			id: 2,
			name: 'Micro onde',
			status: 'Allumer'
		},
		{
			id: 3,
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

	switchOnOne(id: number) {
		this.appareils[id].status = 'Allumer';
	};

	switchOffOne(id: number) {
		this.appareils[id].status = 'Eteint';
	};

	getAppareilById(id: number) {
		const appareil = this.appareils.find(
			(s) => {
				return s.id === id;
			}
		);
		return appareil;
	}
	
}