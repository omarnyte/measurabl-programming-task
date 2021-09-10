type PeopleTableProps = {
	rows: {
		age?: number;
		firstName?: string;
		id: string;
		lastName?: string;
	}[];
}

const PeopleTable = ({ rows }: PeopleTableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => {
					const { age, id, firstName, lastName } = row;
					return (
						<tr key={id}>
							<td>{id}</td>
							<td>{firstName ? firstName : '-'}</td>
							<td>{firstName ? lastName : '-'}</td>
							<td>{age ? age : '-'}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	)
}

export default PeopleTable;
