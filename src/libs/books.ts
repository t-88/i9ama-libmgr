import OptionsComp from "../comps/OptionsComp";
import GState from "./gstate";



interface Book {
    id: string,
    idx: string,
    title: string,
    author: string,
    tags: string[],
    publish_year: string,
    available: string,
    desc: string,
    options_comp: any,
}

function loadBooks() {
    const loadedBooks = (window as any).db.books.getAll();
    let books: Book[] = [];
    for (let i = 0; i < loadedBooks.length; i++) {
        books.push({
            id: loadedBooks[i]["id"],
            idx: i.toString(),
            title: loadedBooks[i]["title"] ?? "",
            author: loadedBooks[i]["author"] ?? "",
            available: loadedBooks[i]["available"] ?? "",
            publish_year: loadedBooks[i]["publish_year"] ?? "",
            tags: (loadedBooks[i]["tags"] as string).split(",") ?? [],
            desc: loadedBooks[i]["desc"],
            options_comp: () => OptionsComp({ idx: i, id: Number.parseInt(loadedBooks[i]["id"]) }),
        });
    }
    GState.books = books;
}
function addBook(title: string, author: string, publish_year: string, tags: string) {
    // const data : any = [
    //     { "title": "الرحيق المختوم", "publish_year": 1979, "author": "صفي الرحمن المباركفوري" },
    //     { "title": "في ظلال القرآن", "publish_year": 1952, "author": "سيد قطب" },
    //     { "title": "مقدمة ابن خلدون", "publish_year": 1377, "author": "ابن خلدون" },
    //     { "title": "صحيح البخاري", "publish_year": 846, "author": "الإمام البخاري" },
    //     { "title": "صحيح مسلم", "publish_year": 875, "author": "الإمام مسلم" },
    //     { "title": "رياض الصالحين", "publish_year": 1250, "author": "الإمام النووي" },
    //     { "title": "الأربعون النووية", "publish_year": 1233, "author": "الإمام النووي" },
    //     { "title": "إحياء علوم الدين", "publish_year": 1111, "author": "الإمام الغزالي" },
    //     { "title": "تفسير ابن كثير", "publish_year": 1373, "author": "ابن كثير" },
    //     { "title": "تفسير الطبري", "publish_year": 923, "author": "الإمام الطبري" },
    //     { "title": "سنن الترمذي", "publish_year": 892, "author": "الإمام الترمذي" },
    //     { "title": "سنن النسائي", "publish_year": 915, "author": "الإمام النسائي" },
    //     { "title": "سنن ابن ماجه", "publish_year": 887, "author": "ابن ماجه" },
    //     { "title": "سنن أبي داود", "publish_year": 888, "author": "أبو داود السجستاني" },
    //     { "title": "الموطأ", "publish_year": 800, "author": "الإمام مالك" },
    //     { "title": "العقيدة الطحاوية", "publish_year": 933, "author": "أبو جعفر الطحاوي" },
    //     { "title": "زاد المعاد", "publish_year": 1350, "author": "ابن القيم" },
    //     { "title": "السيرة النبوية لابن هشام", "publish_year": 833, "author": "ابن هشام" },
    //     { "title": "الشفا بتعريف حقوق المصطفى", "publish_year": 1100, "author": "القاضي عياض" },
    //     { "title": "القرآن الكريم", "publish_year": 632, "author": "الله سبحانه وتعالى" },
    //     { "title": "الفتح الرباني", "publish_year": 1138, "author": "عبد القادر الجيلاني" },
    //     { "title": "حلية الأولياء", "publish_year": 1044, "author": "أبو نعيم الأصبهاني" },
    //     { "title": "الفقه على المذاهب الأربعة", "publish_year": 1908, "author": "عبد الرحمن الجزيري" },
    //     { "title": "بلوغ المرام", "publish_year": 1355, "author": "ابن حجر العسقلاني" },
    //     { "title": "تهذيب الكمال", "publish_year": 1255, "author": "المزي" },
    //     { "title": "كشف الشبهات", "publish_year": 1740, "author": "محمد بن عبد الوهاب" },
    //     { "title": "الفوائد", "publish_year": 1348, "author": "ابن القيم" },
    //     { "title": "إعلام الموقعين", "publish_year": 1341, "author": "ابن القيم" },
    //     { "title": "تيسير الكريم الرحمن", "publish_year": 1965, "author": "عبد الرحمن السعدي" },
    //     { "title": "مختصر صحيح مسلم", "publish_year": 1250, "author": "الإمام المنذري" }
    //   ];
    //   for(let item of data) {
    //     (window as any).db.books.insert(item.title,item.author,Number.parseInt(item.publish_year).toString(),"");
    // }
    (window as any).db.books.insert(title, author, publish_year, tags);
    loadBooks();
}

function removeBook() {
    (window as any).db.books.remove(GState.books[GState.editedBookIdx].id);
    loadBooks();
}

function updateBook(title: string, author: string, publish_year: string, tags: string) {
    (window as any).db.books.update(GState.books[GState.editedBookIdx].id, title, author, publish_year, tags);
    loadBooks();
}

function searchBook(title: string, author: string, publish_year: string, tags: string) {
    (window as any).db.books.search(title, author, publish_year, tags);
}


export {
    loadBooks,
    addBook,
    removeBook,
    updateBook,
    searchBook,
}

export type {Book};