import DataTable from "react-data-table-component";
import "./Table.css";

export default function Table({columns, data} : any) {
    return       <DataTable
    className="table shadow overflow-scroll h-full custom-table"
    columns={columns}
    data={data}
/>
    // <section className="rounded w-full">
        // <br />
        // <div className="table-container ">
      
        // </div>
    // </section>
}