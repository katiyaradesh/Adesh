import React from "react";

const Table = ({ ...props }) => {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {props.cols && props.cols.map(col =>
                            <th key={col.name}>{col.header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((el) => (
                        <tr key={el.id}>
                            <td >{el.id}</td>
                            <td >{el.firstColumn}</td>
                            <td >{el.secondColumn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;