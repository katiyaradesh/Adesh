import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import Table from '../atoms/Table/index';
import { shallow } from 'enzyme';

it('renders in table rows based on provided columns', () => {
    const cols = [
        { name: "Transcript", header: "Transcript" },
        { name: "Amino Acid Position", header: "Amino Acid Position" },
        { name: "Amino Acid 10th Left Position", header: "Amino Acid 10th Left Position" }
    ];
    const data = [
            {
                "id": "ENST00000642875",
                "firstColumn": "A",
                "secondColumn": "A"
            },
            {
                "id": "ENST00000644120",
                "firstColumn": "A",
                "secondColumn": "A"
            },
            {
                "id": "ENST00000644905",
                "firstColumn": "T",
                "secondColumn": "C"
            },
            {
                "id": "ENST00000644969",
                "firstColumn": "C",
                "secondColumn": "G"
            },
            {
                "id": "ENST00000642228",
                "firstColumn": "T",
                "secondColumn": "C"
            },
            {
                "id": "ENST00000496384",
                "firstColumn": "G",
                "secondColumn": "G"
            },
            {
                "id": "ENST00000646891",
                "firstColumn": "C",
                "secondColumn": "A"
            },
            {
                "id": "ENST00000645443",
                "firstColumn": "A",
                "secondColumn": "G"
            }
        ];
    const container = shallow(<Table data={data} cols={cols} rowsPerPage={5} />);
    const table = container.find('table');
    expect(table).toHaveLength(1);
    // The table should have ONLY 1 thead element
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);
    // The number of th tags should be equal to number of columns
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);
    // Each th tag text should equal to column header
    headers.forEach((th, idx) => {
       expect(th.text()).toEqual(cols[idx].header);
    });
    // The table should have ONLY 1 tbody tag
    const tbody = table.find('tbody');
    expect(tbody).toHaveLength(1);
    // tbody tag should have the same number of tr tags as data rows
    const rows = tbody.find('tr');
    expect(rows).toHaveLength(data.length);
    // Loop through each row and check the content
    rows.forEach((tr, rowIndex) => {
       const cells = tr.find('td');
       expect(cells).toHaveLength(cols.length);
       expect(cells.at(0).text()).toEqual(data[rowIndex].id);
       expect(cells.at(1).text()).toEqual(data[rowIndex].firstColumn);
       expect(cells.at(2).text()).toEqual(data[rowIndex].secondColumn);
    });
 });