import DataTable from "react-data-table-component";

export default function Table({columns, data} : any) {
    return <section className="px-8 rounded">
        <br />
        <div className="table-container ">
            <DataTable
                className="table shadow "
                columns={columns}
                data={data}
            />
        </div>
    </section>
}