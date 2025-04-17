
import { faker } from "@faker-js/faker";
import * as BookTableInterface from "./books";
import * as UserTableInterace from "./user";


export function books_fillDB() {
    const data = [
        { "title": "الرحيق المختوم", "publish_year": 1979, "author": "صفي الرحمن المباركفوري" },
        { "title": "في ظلال القرآن", "publish_year": 1952, "author": "سيد قطب" },
        { "title": "مقدمة ابن خلدون", "publish_year": 1377, "author": "ابن خلدون" },
        { "title": "صحيح البخاري", "publish_year": 846, "author": "الإمام البخاري" },
        { "title": "صحيح مسلم", "publish_year": 875, "author": "الإمام مسلم" },
        { "title": "رياض الصالحين", "publish_year": 1250, "author": "الإمام النووي" },
        { "title": "الأربعون النووية", "publish_year": 1233, "author": "الإمام النووي" },
        { "title": "إحياء علوم الدين", "publish_year": 1111, "author": "الإمام الغزالي" },
        { "title": "تفسير ابن كثير", "publish_year": 1373, "author": "ابن كثير" },
        { "title": "تفسير الطبري", "publish_year": 923, "author": "الإمام الطبري" },
        { "title": "سنن الترمذي", "publish_year": 892, "author": "الإمام الترمذي" },
        { "title": "سنن النسائي", "publish_year": 915, "author": "الإمام النسائي" },
        { "title": "سنن ابن ماجه", "publish_year": 887, "author": "ابن ماجه" },
        { "title": "سنن أبي داود", "publish_year": 888, "author": "أبو داود السجستاني" },
        { "title": "الموطأ", "publish_year": 800, "author": "الإمام مالك" },
        { "title": "العقيدة الطحاوية", "publish_year": 933, "author": "أبو جعفر الطحاوي" },
        { "title": "زاد المعاد", "publish_year": 1350, "author": "ابن القيم" },
        { "title": "السيرة النبوية لابن هشام", "publish_year": 833, "author": "ابن هشام" },
        { "title": "الشفا بتعريف حقوق المصطفى", "publish_year": 1100, "author": "القاضي عياض" },
        { "title": "القرآن الكريم", "publish_year": 632, "author": "الله سبحانه وتعالى" },
        { "title": "الفتح الرباني", "publish_year": 1138, "author": "عبد القادر الجيلاني" },
        { "title": "حلية الأولياء", "publish_year": 1044, "author": "أبو نعيم الأصبهاني" },
        { "title": "الفقه على المذاهب الأربعة", "publish_year": 1908, "author": "عبد الرحمن الجزيري" },
        { "title": "بلوغ المرام", "publish_year": 1355, "author": "ابن حجر العسقلاني" },
        { "title": "تهذيب الكمال", "publish_year": 1255, "author": "المزي" },
        { "title": "كشف الشبهات", "publish_year": 1740, "author": "محمد بن عبد الوهاب" },
        { "title": "الفوائد", "publish_year": 1348, "author": "ابن القيم" },
        { "title": "إعلام الموقعين", "publish_year": 1341, "author": "ابن القيم" },
        { "title": "تيسير الكريم الرحمن", "publish_year": 1965, "author": "عبد الرحمن السعدي" },
        { "title": "مختصر صحيح مسلم", "publish_year": 1250, "author": "الإمام المنذري" }
    ];
    for (let item of data) {
        BookTableInterface.insert(item.title,item.author,item.publish_year,[])
    }
}


export function users_fillDB() {
    const data = [
        { "first_name": "محمد", "last_name": "أحمد" },
        { "first_name": "علي", "last_name": "حسن" },
        { "first_name": "فاطمة", "last_name": "عبدالله" },
        { "first_name": "خالد", "last_name": "سعيد" },
        { "first_name": "نور", "last_name": "الدين" },
        { "first_name": "زينب", "last_name": "عمر" },
        { "first_name": "عبدالرحمن", "last_name": "يوسف" },
        { "first_name": "عائشة", "last_name": "محمود" },
        { "first_name": "يحيى", "last_name": "إبراهيم" },
        { "first_name": "سارة", "last_name": "عبدالرحيم" },
        { "first_name": "عمر", "last_name": "عبدالكريم" },
        { "first_name": "مريم", "last_name": "أمين" },
        { "first_name": "حسين", "last_name": "مصطفى" },
        { "first_name": "ليلى", "last_name": "جميل" },
        { "first_name": "سلمان", "last_name": "الطاهر" },
        { "first_name": "هند", "last_name": "عبدالغفور" },
        { "first_name": "طارق", "last_name": "عصام" },
        { "first_name": "هدى", "last_name": "العلي" },
        { "first_name": "إيمان", "last_name": "فتحي" },
        { "first_name": "عبدالعزيز", "last_name": "عبداللطيف" },
        { "first_name": "خلود", "last_name": "الزهراني" },
        { "first_name": "ماهر", "last_name": "السيد" },
        { "first_name": "نايف", "last_name": "الشريف" },
        { "first_name": "سمير", "last_name": "خالد" },
        { "first_name": "روان", "last_name": "مجدي" },
        { "first_name": "باسم", "last_name": "حمدي" },
        { "first_name": "دينا", "last_name": "سليمان" },
        { "first_name": "يوسف", "last_name": "الهاشمي" },
        { "first_name": "رنا", "last_name": "الغامدي" },
        { "first_name": "أيمن", "last_name": "الناصر" }
    ];


    for (let item of data) {
        // UserTableInterace.insert(item.first_name, item.last_name,faker.image.dataUri());
    }
}
