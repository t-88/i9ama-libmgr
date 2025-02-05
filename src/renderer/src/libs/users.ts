import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditUser } from "./popup";

interface User {
	id: string;
	idx: string;
	first_name: string;
	last_name: string;
	school: string;
	reserved_book: number | null;
	img: string;
	idImg: string;
	schoolIdImg: string;
	schoolPaper: string;
	imgsUUID: string;
	options_comp: any;

	// New fields i added them suuuuuuuuui
	phone_number: string;
	date_of_birth: string;
	email: string;
	state: string;
	place_of_accommodation: string;
	room_number: string;
	speciality: string;
	year_of_study: number;
}

interface UserStateObj {
	users: User[];
}
let UsersState: UserStateObj = proxy({
	users: [],
});

async function loadAll() {
	const fetched = await (window as any).db.users.getAll();
	let users: User[] = [];

	for (let i = 0; i < fetched.length; i++) {
		users.push({
			id: fetched[i]["id"],
			idx: i.toString(),
			first_name: fetched[i]["first_name"] ?? "",
			last_name: fetched[i]["last_name"] ?? "",
			school: fetched[i]["school"] ?? "",
			imgsUUID: fetched[i]["imgsUUID"] ?? "",
			reserved_book: fetched[i]["reserved_book"] ?? null,
			img: "",
			idImg: "",
			schoolIdImg: "",
			schoolPaper: "",
			options_comp: () =>
				OptionsComp({ idx: i, onClick: toggleEditUser }),

			// New fields i added them suuuuuuuuuui
			phone_number: fetched[i]["phone_number"] ?? "",
			date_of_birth: fetched[i]["date_of_birth"] ?? "",
			email: fetched[i]["email"] ?? "",
			state: fetched[i]["state"] ?? "",
			place_of_accommodation: fetched[i]["place_of_accommodation"] ?? "",
			room_number: fetched[i]["room_number"] ?? "",
			speciality: fetched[i]["speciality"] ?? "",
			year_of_study: fetched[i]["year_of_study"] ?? 0,
		});

		let { img, idImg, schoolIdImg, schoolPaper } = (
			window as any
		).utils.loadUserImgs(users[i].imgsUUID);
		users[i].img = img;
		users[i].idImg = idImg;
		users[i].schoolIdImg = schoolIdImg;
		users[i].schoolPaper = schoolPaper;
	}

	UsersState.users = users;
}


const UserAction = {
	loadAll: loadAll,
	search: (fname: string, lname: string) =>
		(window as any).db.users.search(fname, lname),
	remove: async (id: string) => {
		await (window as any).db.users.remove(id);
		UserAction.loadAll();
	},
	removeCurr: async () => {
		await UserAction.remove(UsersState.users[popupState.editedAdminIdx].id);
		await UserAction.loadAll();
	},
	update: (
		id: string,
		imgsUUID: string,
		fname: string,
		lname: string,
		school: string,
		img: string,
		idImg: string,
		schoolIdImg: string,
		schoolPaper: string, // New fields i added them suuuuuuuuuui
		phone_number: string,
		date_of_birth: string,
		email: string,
		state: string,
		place_of_accommodation: string,
		room_number: string,
		speciality: string,
		year_of_study: number,
	) => {
		(window as any).db.users.update(
			id,
			imgsUUID,
			fname,
			lname,
			school,
			img,
			idImg,
			schoolIdImg,
			schoolPaper,
			phone_number,
			date_of_birth,
			email,
			state,
			place_of_accommodation,
			room_number,
			speciality,
			year_of_study,
		);
		UserAction.loadAll();
	},
	add: (
		fname: string,
		lname: string,
		school: string,
		img: string,
		idImg: string,
		schoolIdImg: string,
		schoolPaper: string,
		phone_number: string,
		date_of_birth: string,
		email: string,
		state: string,
		place_of_accommodation: string,
		room_number: string,
		speciality: string,
		year_of_study: number,
	) => {
		(window as any).db.users.insert(
			fname,
			lname,
			school,
			img,
			idImg,
			schoolIdImg,
			schoolPaper,
			phone_number,
			date_of_birth,
			email,
			state,
			place_of_accommodation,
			room_number,
			speciality,
			year_of_study,
		);
		UserAction.loadAll();
	},
	getUser: (id) => UsersState.users.find((user) => user.id === id), // edited this suuuuuuuuuui
	getCurUser: () => UsersState.users[popupState.editedUserIdx],
};


export default UsersState;

export {
    UserAction,
}

export type { User };