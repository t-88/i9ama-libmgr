import StatusSvg from "./StatusSvg";

export default function StatusCards() {
    const cardCSS = "card cursor-pointer h-fit w-100 bg-white shadow  p-4 text-xl  flex flex-col gap-1 rounded-lg w-56"
    const cardTextCSS = "self-center text-2xl";

    return <section className="cards  w-full flex flex-row align-center justify-center w-auto gap-16">
        <br />
        <div className={cardCSS}>
            <StatusSvg className="self-end scale-125 -mb-5" />
            <p>عدد الكتب</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>100</b>
        </div>
        <div className={cardCSS + " taken text-white"}>
            <StatusSvg className="self-end scale-125 -mb-5" />
            <p>عدد المأخودة</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>5</b>
        </div>
    </section>
}