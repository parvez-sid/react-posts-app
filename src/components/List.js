import React from 'react'

const List = () => {
    const members = [{ id: 111, name: "Chelsea Foster", workExp: 7, deptExp: 6, isPermanent: true, }, { id: 102, name: "Aggie Sparling", workExp: 13, deptExp: 10, isPermanent: false, }, { id: 123, name: "Timmy Matthews", workExp: 23, deptExp: 15, isPermanent: false, }, { id: 66, name: "Emmet Foster", workExp: 22, deptExp: 9, isPermanent: true, }, { id: 89, name: "Brent Dolan", workExp: 16, deptExp: 12, isPermanent: true, }];

    const filterEmployees = (members, isPermanent) => {
        return members.filter((m) => m.isPermanent === isPermanent);
    }

    const permanentEmployees = <ul>
        {
            filterEmployees(members, true).map((p) => {
                return <li key={p.id}>
                    {p.name}
                </li>
            })
        }
    </ul>

    const tempEmployees = <ul>
        {
            filterEmployees(members, false).map((t) => {
                return <li key={t.id}>
                    {t.name}
                </li>
            })
        }
    </ul>

    return(
        <>
            {/* List of all permanent employees */}
            <h1>Permanent Employees</h1>
            {permanentEmployees}

            {/* List of all non permanent employees */}
            <h1>Temporary Employees</h1>
            {tempEmployees}
        </>
    )
}

export default List