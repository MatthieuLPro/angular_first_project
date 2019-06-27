import { Subject } from 'rxjs';

export class AppareilService {

	appareilSubject = new Subject<any[]>();

	private appareils = [
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

	emitAppareilSubject() {
		this.appareilSubject.next(this.appareils.slice());
	}

	switchOnAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'Allumer';
		}
		this.emitAppareilSubject;
	};

	switchOffAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'Eteint';
		}
		this.emitAppareilSubject;
	};

	switchOnOne(id: number) {
		this.appareils[id].status = 'Allumer';
		this.emitAppareilSubject;
	};

	switchOffOne(id: number) {
		this.appareils[id].status = 'Eteint';
		this.emitAppareilSubject;
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